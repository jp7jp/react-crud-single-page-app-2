import axios from 'axios';

export const getAllUsers = () => {

  const request = axios.get('http://localhost:3001/users');

  return {
    type: 'GET_ALL_USERS',
    payload: request
  }
}

export const getUser = (id) => {

  const request = axios.get(`http://localhost:3001/users/${id}`);

  return {
    type: 'GET_USER',
    payload: request
  }
}
