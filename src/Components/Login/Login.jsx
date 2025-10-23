import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Signup from "../Signup/Signup";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    // to add body background-color
    useEffect(() => {
        // Add class when Login component is mounted
        document.body.classList.add("login-body");

        // Remove it when component unmounts
        return () => {
            document.body.classList.remove("login-body");
        };
    }, []);

    // Input Field Validations
    let navigate = useNavigate();
    let [data, setData] = useState("");
    let [error, setError] = useState({});

    let loginHandle = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value })
    };

    let loginValidate = (value) => {
        let error = {};
        if (!value.email) {
            error.email = "Please Enter E-mail,"
        }
        if (!value.username) {
            error.username = " Username "
        }
        if (!value.password) {
            error.password = "& Password to Sign in."
        }
        setError(error);
    }

    let loginClickHandle = () => {
        loginValidate(data);
    }

    return (
        <>
            <div className="container bg-light opacity-75 p-4 ans-bg-shadow">
                <div class="row">
                    <div class="text-center">
                        <i class="bi bi-person-circle login-avtar"></i>
                    </div>
                    <h2 class="text-center ans-h2">Log In</h2>
                    <div class="col-12">
                        <div class="form-group text-start mb-3 mt-3">
                            {/* <label for="exampleInputEmail1" class="mb-1">Email address</label> */}
                            <input type="email"
                                class="form-control text-left input-control ans-form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="E-Mail"
                                name="email"
                                onChange={loginHandle}
                                required
                            />
                            {/* Given below line to show the warning/validation of email field */}
                            {/* <span class="ans-validate">{error.email}</span> */}
                        </div>
                        <div class="form-group text-start mt-3 mb-3">
                            {/* <label for="exampleInputUser" class="mb-1">User Name</label> */}
                            <input type="text"
                                class="form-control ans-form-control"
                                id="exampleInputUser"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name="username"
                                onChange={loginHandle}
                            />
                            {/* Given below line to show the warning/validation of username field */}
                            {/* <span class="ans-validate">{error.username}</span> */}
                        </div>
                        <div class="form-group text-start mt-0 mb-3 eye-flex">
                            {/* <label for="exampleInputPassword1" class="mb-1">Password</label> */}
                            <input type={showPassword ? "text" : "password"}
                                class="form-control ans-form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name="password"
                                onChange={loginHandle}
                            />
                            {/* Given below line to show the warning/validation of password field */}
                            {/* <span class="ans-validate">{error.password}</span> */}
                            <button
                                className="btn btn-secondary btn-eye"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                            </button>
                        </div>
                        <div class="form-group mt-2 mb-2 text-center ans-d-flex">
                            <span class="ans-validate">{error.email} {error.username} {error.password}</span>
                            <button type="submit" class="btn btn-primary mt-3 mb-3" onClick={loginClickHandle}>Log In</button>
                            <span class="already-account">Don't Have an Account
                                <Link to="/signup">&nbsp;Sign Up</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;