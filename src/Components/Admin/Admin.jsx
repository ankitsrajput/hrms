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
                    <div class="row pt-2 pb-2">
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="bi bi-people-fill text-primary fs-4"></i>
                                            <span class="fs-6">TotalEmp:</span>
                                        </div>
                                        <span class="fw-bold text-primary fs-5">135</span>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center">
                                            <i class="bi bi-university"></i>&nbsp;
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
                                            <span class="fs-6">NewEmp:</span>
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

                    <div class="row pt-2 pb-2">
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="stat-card border rounded shadow-sm">
                                <div class="card-body p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="bi bi-code-square text-primary fs-4"></i>
                                            <span class="fs-6">Soft.Eng:</span>
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
                                            <i class="bi bi-bar-chart-line-fill text-primary fs-4"></i>
                                            <span class="fs-6">Marketing:</span>
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
                                            <i class="bi bi-cash text-primary fs-4"></i>
                                            <span class="fs-6">Finance:</span>
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
                                            <i class="bi bi-person-workspace text-primary fs-4"></i>
                                            <span class="fs-6">HR:</span>
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
                </div>
            </div>
        </>
    );
};

export default Admin;