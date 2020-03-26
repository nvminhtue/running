import axios, { AxiosRequestConfig } from 'axios';
// import { mapKeys, snakeCase, ca } from 'lodash';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'http://localhost:8000',
  timeout: 10000,
  apiVersion: 'v1',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
};

export default class V1 {
  client: axios;

  constructor(config = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
  }
}

