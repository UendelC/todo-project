import axios from 'axios';

export const getTodos = () => axios.get('/todos');

export const postTodo = (params) => axios.post('/todos', params);
