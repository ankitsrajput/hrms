import React from "react";
import { useState } from "react";
import "./admin.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Admin = () => {
    return (
        <>
            <Navbar />
            <Sidebar/>
            <h1>Hello! admin</h1>
        </>
    );
};

export default Admin;