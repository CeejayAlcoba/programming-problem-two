import React, { useEffect, useState } from "react";
import { GetAllEmployee } from "../services/EmployeeService";
export function Home() {
const [data,setData]=useState([]);
const [num,setNum]=useState(1);
const handleNum=(()=>{
setNum(num + 1);
})
    return <div className="d-flex flex-column min-vh-100 text-center">
        <div className="d-flex justify-content-center p-1">
            Home
            <button onClick={()=>{setData(data=>[...data,"num:"+num]); handleNum();}}>add</button>
            {num}
            {console.log(data)}
        </div>
    </div>;

}