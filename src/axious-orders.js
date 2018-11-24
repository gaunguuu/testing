import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5825e.firebaseio.com/'
});

export default instance;