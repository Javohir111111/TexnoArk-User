import { getToken } from "@/helper/auth-helper";
import axios from "axios";

const http = axios.create({
    baseURL: 'https://ecomapi.ilyosbekdev.uz'
})

http.interceptors.request.use((config)=>{
    const token = getToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
export default http