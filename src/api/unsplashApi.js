import axios from 'axios';

//create an instance of the axios client with default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization:
            `Client-ID ${process.env.REACT_APP_unsplashKey}`
    }
})