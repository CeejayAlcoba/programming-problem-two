import axios from "axios"
import { EntryPoint } from "../Config";

const EndPoint ="/employee";
const AddEmployee=(data)=>{
return axios.post(EntryPoint+EndPoint,data)
}
const GetAllEmployee=()=>{
    return axios.get(EntryPoint+EndPoint)
    }
    const DeleteEmployee=(id)=>{
        return axios.delete(EntryPoint+EndPoint+"/"+id)
        }
export{
    AddEmployee,
    GetAllEmployee,
    DeleteEmployee,
}