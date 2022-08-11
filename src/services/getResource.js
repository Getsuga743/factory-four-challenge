import axios from 'axios';

export const getResource = (resource) => {
  return axios.get(`/api/${resource}/health/status`);
};
