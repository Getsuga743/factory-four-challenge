import { useCallback, useEffect, useState } from 'react';
import { getResource } from '../services/getResource';

//Get API's data from the array of endPoints, and set timer for SECONDS_FOR_REFECTH seconds after which getResources will be called again.
export const useGetResources = (SECONDS_FOR_REFECTH = 15, endPoints) => {
  const [resources, setResources] = useState(() =>
    endPoints.reduce((current, item) => {
      current[item] = {};
      return current;
    }, {}),
  );
  // GET data for each endpoint.
  const getResources = useCallback(() => {
    endPoints.forEach((resource) => {
      getResource(resource)
        .then(({ data }) => {
          setResources((prevState) => ({
            ...prevState,
            [resource]: {
              hostname: data.hostname,
              message: data.message,
              success: data.success,
              time: data.time,
            },
          }));
        })
        .catch((err) => {
          setResources((prevState) => ({
            ...prevState,
            [resource]: {
              success: false,
              message: err.message ? err.message : 'error',
              error: `Error: ${err.response.status ? err.response.status : 'OUTAGE'}`,
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
