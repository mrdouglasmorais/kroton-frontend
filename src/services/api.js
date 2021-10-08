import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export const apiLocal = axios.create({
  baseURL: 'http://localhost:8888/'
})