import { useCallback, useEffect, useState } from 'react';
import { apiResourcesNames } from '@/helpers/resources';
import { getResource } from '../services/getResource';

export const useGetResources = (SECONDS_FOR_REFECTH = 15) => {
  const [resources, setResources] = useState(() =>
    apiResourcesNames.reduce((current, item) => {
      current[item] = {};
      return current;
    }, {}),
  );

  const getResources = useCallback(() => {
    apiResourcesNames.map((resource) => {
      getResource(resource)
        .then((res) => setResources((prevState) => ({ ...prevState, [resource]: res.data })))
        .catch((err) => {
          setResources((prevState) => ({
            ...prevState,
            [resource]: {
              success: false,
              message: err.message ? err.message : 'error',
              status: err.response.status ? err.response.status : 'OUTAGE',
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
