import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {

    // to add body background-color
    useEffect(() => {
        // Add class when Login component is mounted
        document.body.classList.add("signup-body");

        // Remove it when component unmounts
        return () => {
            document.body.classList.remove("signup-body");
        };
    }, []);

    // Signup Validations
    let [data, setData] = useState("");
    let [error, setError] = useState({});

    let signupHandle = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    let signupValidate = (value) => {
        let error = {};

        if (!value.fname) {
            error.fname = "Enter First Name.";
        }
        if (!value.lname) {
            error.lname = "Enter Last Name.";
        }
        if (!value.username) {
            error.username = "Enter User Name.";
        }
        if (!value.email) {
            error.email = "Enter a Valid Email.";
        }
        if (!value.mobile) {
            error.mobile = "Enter Mobile Number."
        }
        if (!value.password) {
            error.password = "Enter Password atleast 6-8 Character /,-,@,#,0-9.";
        }
        if (!value.conpassword) {
            error.conpassword = "Enter Confirm Password.";
        }
        if (value.password !== value.conpassword) {
            error.conpassword = "Confirm Password Doesn't Match.";
        }
        if (!value.consent) {
            error.consent = "Please accept the T&C and Privacy Policy before proceeding.";
        }
        setError(error);
    }

    let signupClickHandle = () => {
        signupValidate(data);
    }

    return (
        <>
            <div className="container bg-light p-4 opacity-75">
                <div class="row">
                    <h2 class="text-center ans-h2">Sign Up</h2>
                    <div class="col-12">
                        <div class="form-group text-start mb-2 mt-2">
                            {/* <label for="exampleInputFName" class="mb-1">First Name</label> */}
                            <input type="text"
                                class="form-control text-left ans-form-control"
                                id="exampleInputFName"
                                aria-describedby="fnameHelp"
                                placeholder="First Name"
                                name="fname"
                                onChange={signupHandle}
                            />
                            <span class="ans-validate">{error.fname}</span>
                        </div>
                        <div class="form-group text-start mb-2 mt-2">
                            {/* <label for="exampleInputlName" class="mb-1">Last Name</label> */}
                            <input type="text"
                                class="form-control text-left ans-form-control"
                                id="exampleInputlName"
                                aria-describedby="lnameHelp"
                                placeholder="Last Name"
                                name="lname"
                                onChange={signupHandle}
                            />
                            <span class="ans-validate">{error.lname}</span>
                        </div>
                        <div class="form-group text-start mt-2 mb-2">
                            {/* <label for="exampleInputUser" class="mb-1">User Name</label> */}
                            <input type="text"
                                class="form-control ans-form-control"
                                id="exampleInputUser"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name="username"
                                onChange={signupHandle}
                            />
                            <span class="ans-validate">{error.username}</span>
                        </div>
                        <div class="form-group text-start mb-2 mt-2">
                            {/* <label for="exampleInputEmail" class="mb-1">Email Address</label> */}
                            <input type="email"
                                class="form-control text-left ans-form-control"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="E-mail"
                                name="email"
                                onChange={signupHandle}
                            />
                            <span class="ans-validate">{error.email}</span>
                        </div>
                        <div class="form-group text-start mb-2 mt-2">
                            {/* <label for="exampleInputMobile" class="mb-1">Mobile Number</label> */}
                            <input type="text"
                                class="form-control text-left ans-form-control"
                                id="exampleInputMobile"
                                aria-describedby="MobileHelp"
                                placeholder="+91-"
                                name="mobile"
                                onChange={signupHandle}
                            />
                            <span class="ans-validate">{error.mobile}</span>
                        </div>
                        <div class="form-group text-start mt-2 mb-2">
                            {/* <label for="exampleInputPassword1" class="mb-1">Password</label> */}
                            <input type="password"
                                class="form-control ans-form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name="password"
                                onChange={signupHandle}
                            />
                            <span class="ans-validate">{error.password}</span>
                        </div>
                        <div class="form-group text-start mt-2 mb-2">
                            {/* <label for="exampleInputPassword1" class="mb-1">Confirm Password</label> */}
                            <input type="password"
                                class="form-control ans-form-control"
                                id="exampleInputConfirmPassword1"
                                placeholder="Confirm Password"
                                name="conpassword"
                                onChange={signupHandle}
                            />
                            <span class="ans-validate">{error.conpassword}</span>
                        </div>
                        <div class="form-group text-start mt-2 mb-2 ans-consent">
                            <input class="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                                name="consent"
                                onChange={signupHandle}
                            />
                            <label class="form-check-label text-decoration" for="gridCheck">
                                &nbsp;I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                            </label>
                        </div>
                        <div class="form-group mt-2 mb-2 text-center ans-d-flex">
                            <span class="ans-validate">{error.consent}</span>
                            <button type="submit" class="btn btn-primary mt-3 mb-3" onClick={signupClickHandle}>Sign Up</button>
                            <span class="already-account">Already Have an Account
                                <Link to="/login">&nbsp;Log in</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;