import Axios from 'axios';

import { URL_API } from '../config';

const AxiosClient = Axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosClient.interceptors.request.use(
  async (config) => {
    try {
      // const token = localStorage.getItem('@token');
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE1ZDYwNjQ5MzlkMzlkNjFkNWNiOTgiLCJpc0Jsb2NrZWQiOmZhbHNlLCJpYXQiOjE2MzgyNTgxODIsImV4cCI6MTY0NjAzNDE4Mn0.mCqFbNupudPPW8rkxz1rIATqYrWuMTe7Ur4h_uDxnHo';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (e) {
      return config;
    }
  },
  (error) => {
    Promise.reject(error);
  },
);

AxiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      // handle logout
      // store.dispatch(requestLogout());
    }
    return Promise.reject(error);
  },
);

export default AxiosClient;
