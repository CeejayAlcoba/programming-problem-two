import React, { useEffect, useState } from "react";
import NavigationBar from "../common/NavigationBar";
import { GetDataFromLocalStorage } from "../services/AccountService";
import { GetAllEmployee } from "../services/EmployeeService";
import { EmployeeTable } from "./employee/EmployeeTable";
export function Home() {
    const data = JSON.parse(localStorage.getItem('data'));
    return <>
    <div className="w-100">
    <NavigationBar/>
    {data?
    data.position=="Admin"?
    <EmployeeTable/>
    :
    <h1>Welcome {data.position}!</h1>
    :
    null
    }
    
    </div>

    </>

}