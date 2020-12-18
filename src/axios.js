import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://whatsapp-clone-backend-app.herokuapp.com',
});

export default instance;
