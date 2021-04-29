import axios from 'axios';

const api = axios.create({
  baseURL: 'https://podcastr-node.herokuapp.com/',
});

export default api;
