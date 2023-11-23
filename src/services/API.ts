import axios from "axios";
import { getUserLocalStorage } from "../contexts/authProvider/Utils";

const api = axios.create({
    baseURL: 'https://mais-saude-app.onrender.com'
})

api.interceptors.request.use(
    (config) => {
      const user = getUserLocalStorage()
  
      config.headers.Authorization = user?.token;
  
      return config
    },
    (error) => {
      //enviar para login
      return Promise.reject(error)
    },
  )
  
export default api;