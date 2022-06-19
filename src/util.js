import axios from 'axios';

const dummyApi = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 10000
  });
export {dummyApi};