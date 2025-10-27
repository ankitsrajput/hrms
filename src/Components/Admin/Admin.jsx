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
            <Sidebar />
            <div className="d-flex pt-3">
                <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" }}></div>
                <div class="container">
                    <div class="row gx-2">
                        <div class="col border">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col border">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col border">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col border">
                            <div class="p-3">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Admin;