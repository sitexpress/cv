import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://api.tokenmetrics.com/v2/`,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_CRYPTO_KEY,
  },
});
