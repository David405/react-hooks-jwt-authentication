import axios from 'axios';

const API_URL = 'server base url';

const login = (email, password) => {
    return axios.post('login url', {
        email, password
    }).then((res) => {
        console.log(res.headers.authorization);
    })
}

export default {
    login
}