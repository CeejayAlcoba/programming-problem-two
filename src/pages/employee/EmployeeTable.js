import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllEmployee } from "../../services/EmployeeService";
import { DeleteModal } from "./DeleteEmployee";
import { SaveEmployee, UpdateEmployee } from "./SaveEmployee";
export function EmployeeTable() {
const[data,setData]=useState([]);
const[showModal, setShowModal]=useState(false);
useEffect(()=>{
 GetAllEmployee().then((res)=>{
setData(res.data)
 })
},[data])
    return <div className="d-flex flex-column min-vh-100 text-center p-5">
        <div className="d-flex justify-content-end">
        <SaveEmployee/>
        </div>
        <div className="d-flex justify-content-center">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Position</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, index) =>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{val.credential.username}</td>
                            <td>{val.firstname}</td>
                            <td>{val.lastname}</td>
                            <td>{val.gender}</td>
                            <td>{val.birthday}</td>
                            <td>{val.position.type}</td>
                            <td>
                                <SaveEmployee data={val}/>
                                {val.employeeId==1? null: <DeleteModal data={val}/>}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>;

}