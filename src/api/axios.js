import axios from 'axios';

const Instance = axios.create({
  baseURL: '//localhost:8080/api',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Instance;
