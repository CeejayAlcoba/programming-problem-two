import React from "react";
import { Link, Navigate } from "react-router-dom";
import { AddEmployee } from "../services/EmployeeService";
import { DecodedToken } from "../services/JWTService";
export class SignUp extends React.Component {
    state = {
        data: {
            credential: {

            },
        },
        show: false,
        isLogin:false,
    }
    handleAddEmployee = async () => {
        console.log(this.state.data)
        await AddEmployee(this.state.data).then((res) => {
            localStorage.setItem("tokem",res.data)
            localStorage.setItem("data", JSON.stringify(DecodedToken(res.data)))
            this.setState({ ...this.state,isLogin:true, data: { credential: {} } })
        })
    }
    handleChange = (event) => {
        this.setState({ ...this.state, data: { ...this.state.data, positionId: event.target.value } });
    }
    handleClose = () => {
        this.setState({ ...this.state, show: false })
    }
    handleData(field, value, isCredential) {
        if (isCredential)
            this.setState({ ...this.state, data: { ...this.state.data, credential: { ...this.state.data.credential, [field]: value } } })
        else
            this.setState({ ...this.state, data: { ...this.state.data, [field]: value } })
        console.log(this.state.data)
    }
    handleShow = () => {
        this.setState({ ...this.state, show: true })
    }
    render() {
        return (
            <>
                <div>
                    <div className='text-center p-4 m-5 bg-light border border-dark'>
                        <h1>Sign in</h1>
                        <div className="form-outline mb-4 d-flex flex-row">
                            <label className="form-label">Firstname</label>
                            <input type="text" className="form-control" value={this.state.data.firstname} onChange={(e) => this.handleData("firstname", e.target.value, false)} />
                            <label className="form-label">Lastname</label>
                            <input type="text" className="form-control" value={this.state.data.lastname} onChange={(e) => this.handleData("lastname", e.target.value, false)} />

                        </div>
                        <div className="form-outline mb-4 d-flex flex-row">
                        <label className="form-label">Gender</label>
                            <input type="text" className="form-control" value={this.state.data.gender} onChange={(e) => this.handleData("gender", e.target.value, false)} />
                            <label className="form-label">Birthday</label>
                            <input type="date" className="form-control" value={this.state.data.birthday} onChange={(e) => this.handleData("birthday", e.target.value, false)} />
                        </div>
                        <div className="form-outline mb-4 d-flex flex-row">
                        <label className="form-label">Position</label>
                        <select className="form-select w-50" onChange={(e) => this.handleChange(e)} id="colours" value={this.state.data.positionId}>
                            <option >Select an employee position</option>
                            <option value={2}>Manager</option>
                            <option value={3}>Supervisor</option>
                            <option value={4}>Staff</option>
                        </select>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" value={this.state.data.credential.username} onChange={(e) => this.handleData("username", e.target.value, true)} />
                            <label className="form-label">Username</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" className="form-control" value={this.state.data.credential.password} onChange={(e) => this.handleData("password", e.target.value, true)} />
                            <label className="form-label">Password</label>
                        </div>
                        <button className='btn btn-outline-primary rounded-pill m-2' onClick={() => { this.handleClose(); this.handleAddEmployee(); }}>
                            Sign in
                        </button>
                        <div class="text-center">
                        <p>Already have an account. <Link to="/login">Log in</Link></p>
                    </div>
                    </div>
                </div>
                {this.state.isLogin?<Navigate to="/home"/>:null}
            </>
        )
    }
}