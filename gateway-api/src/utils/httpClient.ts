import axios, { AxiosInstance } from 'axios';

const createHttpClient = (port:number | string):AxiosInstance => {
  const url = `http://localhost:${port}`;
  const client = axios.create({
    baseURL:url,
    timeout:1000,
  });

  return client;
};

export default createHttpClient;
