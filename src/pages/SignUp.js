import React from "react";
import { Link } from "react-router-dom";
import { AddEmployee } from "../services/EmployeeService";
export class SignUp extends React.Component {
    constructor(props){
        super(props)
        
    }
        state = {
        data: {
            firstname: "",
            lastname: "",
            gender: "",
            birthday: new Date(),
            username: "",
            password: "",
        },
        errors: {
            name: "",
            username: "",
            password: ""
        },
        isNavigate: false
    }
    handleData(field, value) {
        this.setState({ ...this.state, data: { ...this.state.data, [field]: value } });
        console.log(this.state.data);
    }
    handleSubmit = async () => {
        await AddEmployee(this.state.data);
    }
    isNull = () => {
        if (this.state.data.name === "" || this.state.data.username === "" || this.state.data.password === "") {
            return true;
        }
        else return false;
    }
    render() {
        return <div className="d-flex flex-column min-vh-100 text-center">
            <div className="d-flex justify-content-center p-1">
                <div className="text-center border border-secondary p-4 m-5 bg-light">

                    <h2 className="m-4">
                        Sign Up
                    </h2>

                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={this.state.data.firstname} onChange={(e) => this.handleData("firstname", e.target.value)} />
                        <label className="form-label">Firstname</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={this.state.data.lastname} onChange={(e) => this.handleData("lastname", e.target.value)} />
                        <label className="form-label">Lastname</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={this.state.data.gender} onChange={(e) => this.handleData("gender", e.target.value)} />
                        <label className="form-label">Gender</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="date" className="form-control" value={this.state.data.birthday} onChange={(e) => this.handleData("birthday", e.target.value)} />
                        <label className="form-label">Birthday</label>
                    </div>
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={this.state.data.username} onChange={(e) => this.handleData("username", e.target.value)} />
                        <label className="form-label">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" value={this.state.data.password} onChange={(e) => this.handleData("password", e.target.value)} />
                        <label className="form-label">Password</label>
                    </div>


                    <button type="submit" className="btn btn-outline-primary rounded-pill m-2" disabled={this.isNull()} onClick={() => this.handleSubmit()}>Sign in</button>
                    <p>Already have an account </p><Link to="/signin"> Sign in</Link>


                </div>
            </div>
        </div>
    }
}