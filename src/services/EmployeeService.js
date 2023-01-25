import axios from "axios"
import { EntryPoint } from "../Config";
import { DefaultHeader } from "./AxiosHeaderService";

DefaultHeader();
const EndPoint = "/employee";
const AddEmployee = (data) => {
    return axios.post(EntryPoint + EndPoint, data)
}
const GetAllEmployee = () => {
    return axios.get(EntryPoint + EndPoint)
}
const DeleteEmployee = (id) => {
    return axios.delete(EntryPoint + EndPoint + "/" + id)
}
const UpdateEmployee = (data) => {
    return axios.put(EntryPoint + EndPoint, data)
}
export {
    AddEmployee,
    GetAllEmployee,
    DeleteEmployee,
    UpdateEmployee
}