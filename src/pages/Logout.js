import React from "react";
import {Navigate } from "react-router-dom";
export class Logout extends React.Component {
    constructor(props) {
        super(props);
      localStorage.removeItem("toke");
      localStorage.removeItem("data");
      }
    render() {
        return <>
           
           <Navigate to="/login"/>
        </>;
    }
}