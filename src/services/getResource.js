import axios from 'axios';

// For this challenge i prefer to keep the things simple and not using environment variables for sensitive data.
const URL = 'https://api.factoryfour.com/';
// Uses heroku cors-anywhere proxy.
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

const headers = { 'Access-Control-Allow-Origin': '*' };

export const getResource = (resource) => {
  if (['invites', 'messages', 'users'].includes(resource)) {
    return axios.get(`${CORS_PROXY}${URL}${resource}/health/status`, { headers });
  }

  return axios.get(`${URL}${resource}/health/status`, { headers });
};
