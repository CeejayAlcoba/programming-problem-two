import axios from "axios";

export const DefaultHeader=()=>{
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("token");
        config.headers.Authorization =  'Bearer '+token;
         
        return config;
    });
}