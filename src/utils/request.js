import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (api, option = {}) => {
  const result = await request.get(api, {
    params: option,
  });

  return result.data;
};

export default request;
