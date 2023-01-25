import axios from "axios"
import { EntryPoint } from "../Config";
import { DefaultHeader } from "./AxiosHeaderService";

const EndPoint ="/account";
const AccountLogin=(data)=>{
return axios.post(EntryPoint+EndPoint+"/login",data)
}
const AccountLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("data");
}
const GetDataFromLocalStorage=()=>{
    return localStorage.getItem("data");
}
export{
    AccountLogin,
    AccountLogout,
    GetDataFromLocalStorage,
}