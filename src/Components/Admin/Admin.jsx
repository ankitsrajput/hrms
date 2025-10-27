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
                        <div class="col-md-3">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="bi bi-people-fill text-primary fs-3"></i>
                                            <span class="fs-6">Total Emps</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-5">: ₹1001</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-university"></i>&nbsp;
                                            <span>Bank</span>
                                        </div>
                                        <span class="fw-bold fs-4">: ₹0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="bi bi-people-fill text-primary fs-3"></i>
                                            <span class="fs-6">New Emps</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-5">: ₹1001</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-university"></i>&nbsp;
                                            <span>Bank</span>
                                        </div>
                                        <span class="fw-bold fs-4">: ₹0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="bi bi-people-fill text-primary fs-3"></i>
                                            <span class="fs-6">Interns</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-5">: ₹1001</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-university"></i>&nbsp;
                                            <span>Bank</span>
                                        </div>
                                        <span class="fw-bold fs-4">: ₹0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="bi bi-people-fill text-primary fs-3"></i>
                                            <span class="fs-6">Total Employees</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-5">: ₹1001</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-university"></i>&nbsp;
                                            <span>Bank</span>
                                        </div>
                                        <span class="fw-bold fs-4">: ₹0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Admin;