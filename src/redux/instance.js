import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = 'http://159.65.117.204:8000/';

const instance = axios.create({
  baseURL: `${url}`,
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
