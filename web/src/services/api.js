import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2832'
});

export default api;
