import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DeleteModal } from "../pages/employee/DeleteEmployee";
import { EmployeeTable } from "../pages/employee/EmployeeTable";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
export default function ProjectRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="home" element={<Home />}/>
        <Route path="*" element={<EmployeeTable />}/>
        <Route path="delete-employee" element={<DeleteModal/>}/>
      </Routes>
    </BrowserRouter>
  );
}