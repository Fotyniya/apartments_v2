import axios from '../utils/axios';

export const getCityList = () => {
  return axios.get('/cities');
};