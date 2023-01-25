import React from "react";
export class Login extends React.Component {
    render() {
        return <div className="d-flex flex-column min-vh-100 text-center">
            <div className="d-flex justify-content-center p-1">

                <div className="text-center border border-secondary p-4 m-5 bg-light">
                <h2 className="m-4">
                    Log in
                </h2>
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" />
                        <label class="form-label" for="form2Example1">Username</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>

                    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

                    <div class="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                    </div>
                </div>
            </div>
        </div>;
    }
}