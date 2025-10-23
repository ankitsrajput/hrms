import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    
    const navigate = useNavigate();

    return (
        <div className="admin-sidebar ans-primary-bg text-light vh-100 p-3">
            <h5 className="text-center mb-2">Welcome! Username</h5>
            <ul className="nav">
                <li className="nav-item mb-2">
                    <a className="nav-link text-light" onClick={() => navigate("/admin")}>
                        <i className="bi bi-speedometer2 me-2"></i> Dashboard
                    </a>
                </li>

                <li className="nav-item mb-2">
                    <a
                        className="nav-link text-light dropdown-toggle"
                        data-bs-toggle="collapse"
                        href="#employeeMenu"
                        role="button"
                        aria-expanded="false"
                    >
                        <i className="bi bi-people me-2"></i> Employees
                    </a>
                    <div className="collapse ms-3" id="employeeMenu">
                        <a className="nav-link text-light" onClick={() => navigate("/admin/employees")}>
                            All Employees
                        </a>
                        <a className="nav-link text-light" onClick={() => navigate("/admin/add-employee")}>
                            Add Employee
                        </a>
                    </div>
                </li>

                <li className="nav-item mb-2">
                    <a
                        className="nav-link text-light dropdown-toggle"
                        data-bs-toggle="collapse"
                        href="#payrollMenu"
                        role="button"
                        aria-expanded="false"
                    >
                        <i className="bi bi-cash-stack me-2"></i> Payroll
                    </a>
                    <div className="collapse ms-3" id="payrollMenu">
                        <a className="nav-link text-light" onClick={() => navigate("/admin/salary-list")}>
                            Salary List
                        </a>
                        <a className="nav-link text-light" onClick={() => navigate("/admin/generate-payslip")}>
                            Generate Payslip
                        </a>
                    </div>
                </li>

                <li className="nav-item mb-2">
                    <a className="nav-link text-light" onClick={() => navigate("/admin/reports")}>
                        <i className="bi bi-bar-chart-line me-2"></i> Reports
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
