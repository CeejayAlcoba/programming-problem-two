import React from "react";
import { Link, Navigate } from "react-router-dom";
import { AccountLogin } from "../services/AccountService";
import { DecodedToken } from "../services/JWTService";
export class Login extends React.Component {
    state = {
        data: {

        },
        isLogin:false,
    }
    handleData(field, value) {
        this.setState({ ...this.state, data: { ...this.state.data, [field]: value } })
    }
    handleLogIn=async()=>{
await AccountLogin(this.state.data).then((res)=>{
   localStorage.setItem("token",res.data)
   localStorage.setItem("data", JSON.stringify(DecodedToken(res.data)))
   this.setState({...this.state,isLogin:true})
})
    }
    render() {
        return <div className="d-flex flex-column min-vh-100 text-center">
            <div className="d-flex justify-content-center p-1">
                <div className="text-center border border-secondary p-4 m-5 bg-light">
                    <h2 className="m-4">
                        Log in
                    </h2>
                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={this.state.data.username} onChange={(e) => this.handleData("username", e.target.value, true)} />
                        <label className="form-label">Username</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" value={this.state.data.password} onChange={(e) => this.handleData("password", e.target.value, true)} />
                        <label className="form-label">Password</label>
                    </div>
                    <button className='btn btn-outline-primary rounded-pill m-2' onClick={() => {this.handleLogIn()}}>
                        Log in
                    </button>
                    <div class="text-center">
                        <p> Don't have an account? <Link to="/signup">Sign in</Link></p>
                    </div>
                </div>
            </div>
            {this.state.isLogin?<Navigate to="/home"/>:null}
        </div>
    }
}