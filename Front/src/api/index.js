import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://projet-peintre.herokuapp.com/',
  });

  export default instance;