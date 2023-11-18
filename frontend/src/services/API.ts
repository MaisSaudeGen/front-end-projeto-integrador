import axios from "axios";

export const api = axios.create({
    baseURL: 'https://mais-saude-app.onrender.com'
})

