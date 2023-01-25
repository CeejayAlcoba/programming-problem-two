import axios from "axios"
import { EntryPoint } from "../Config";

const EndPoint ="/position";
const GetAllPosition=()=>{
return axios.get(EntryPoint+EndPoint)
}
export{
    GetAllPosition
}