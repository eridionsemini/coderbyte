import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {REACT_APP_API_URL} from '@env';
const instance = axios.create({
  baseURL: `${REACT_APP_API_URL}`,
  timeout: 10000,
});

const requestHandler = async request => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

const responseHandler = response => {
  return response.data;
};

const errorHandler = error => {
  return Promise.reject(error);
};

instance.interceptors.request.use(
  request => requestHandler(request),
  error => errorHandler(error),
);

instance.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default instance;
