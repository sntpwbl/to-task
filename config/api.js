import axios from "axios"

const api = axios.create({
    baseURL: 'http://192.168.15.47:3000/task'
})

export default api