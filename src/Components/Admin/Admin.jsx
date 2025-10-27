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
            <div className="d-flex">
                <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" }}></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="bi bi-people-fill text-primary fs-4"></i>
                                            <span class="fs-6">Total Emp:</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-5">135</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-university"></i>&nbsp;
                                            <span>Bank</span>
                                        </div>
                                        <span class="fw-bold fs-5">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="bi bi-people-fill text-primary fs-4"></i>
                                            <span class="fs-6">New Emp:</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-5">34</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-university"></i>&nbsp;
                                            <span>Bank</span>
                                        </div>
                                        <span class="fw-bold fs-5">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="bi bi-people-fill text-primary fs-4"></i>
                                            <span class="fs-6">Interns:</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-5">11</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-university"></i>&nbsp;
                                            <span>Bank</span>
                                        </div>
                                        <span class="fw-bold fs-5">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-1">
                                            <i class="bi bi-cash-coin text-primary fs-4"></i>
                                            <span class="fs-6">Avg.Sal:</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-5">
                                            <i class="bi bi-currency-dollar"></i>3
                                        </span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-university"></i>
                                            <span>Bank</span>
                                        </div>
                                        <span class="fw-bold fs-5">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {/* <!-- Enquiry Card --> */}
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card border rounded shadow-sm p-3">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-file-alt text-primary"></i>&nbsp;
                                            <span>Today Enquiry</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-4">: 0</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-file-archive text-info"></i>&nbsp;
                                            <span>Total Enquiry</span>
                                        </div>
                                        <span class="fw-bold text-info fs-4">: 0</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-clipboard-check text-success"></i>&nbsp;
                                            <span>Pending</span>
                                        </div>
                                        <span class="fw-bold text-warning fs-4">: 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Student Card --> */}
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-user-plus text-success"></i>&nbsp;
                                            <span>New Student</span>
                                        </div>
                                        <span class="fw-bold text-success fs-4">: 5</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-user-graduate text-danger"></i>&nbsp;
                                            <span>Old Student</span>
                                        </div>
                                        <span class="fw-bold text-danger fs-4">: 0</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-graduation-cap text-info"></i>&nbsp;
                                            <span>Active</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-4">: 6</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Staff Card --> */}
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-users-cog text-warning"></i>&nbsp;
                                            <span>Total Staff</span>
                                        </div>
                                        <span class="fw-bold text-dark fs-4">: 0</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-chalkboard-teacher text-info"></i>&nbsp;
                                            <span>Teachers</span>
                                        </div>
                                        <span class="fw-bold text-info fs-4">: 0</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-user-tie text-success"></i>&nbsp;
                                            <span>Admin Staff</span>
                                        </div>
                                        <span class="fw-bold text-success fs-4">: 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Payment Status Card --> */}
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="bi bi-exclamation-circle text-danger"></i>&nbsp;
                                            <span>Not Paid</span>
                                        </div>
                                        <span class="fw-bold text-danger fs-4">: 3</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="bi bi-clock text-warning"></i>&nbsp;
                                            <span>Full Paid</span>
                                        </div>
                                        <span class="fw-bold text-warning fs-4">: 0</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="bi bi-bell text-info"></i>&nbsp;
                                            <span>Reminder Send</span>
                                        </div>
                                        <span class="fw-bold text-info fs-4">: 0</span>
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