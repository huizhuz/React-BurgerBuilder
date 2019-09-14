import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilderwithreact.firebaseio.com/'
})

export default instance