import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { apiResourcesNames } from '~/helpers/resources';
import { Resources } from '~/types';


const URL = 'https://api.factoryfour.com/';

export const useGetResources = (SECONDS_FOR_REFECTH = 15) => {
  const [resources, setResources] = useState<Resources>(() =>
    apiResourcesNames.reduce((current, item) => {
      current[item] = {};
      return current;
    }, {}),
  );

  const getResources = useCallback(() => {
    apiResourcesNames.map((resource) => {
      axios
        .get(`${URL}${resource}/health/status`)
        .then((res) => setResources((prevState) => ({ ...prevState, [resource]: res.data })))
        .catch((err) => {
          setResources((prevState) => ({
            ...prevState,
            [resource]: {
              success: false,
              message: err.message ? err.message : 'error',
              status: err.response.status,
            },
          }));
        });
    });
  }, []);

  useEffect(() => {
    getResources();
    const interval = setInterval(() => {
      getResources();
    }, SECONDS_FOR_REFECTH * 1000);
    return () => clearInterval(interval);
  }, []);

  return { resources };
};
