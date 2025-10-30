import React from "react";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Allemp = () => {

    const navigate = useNavigate();
    let [instaData, setInstaData] = useState("");
    let [tableData, setTableData] = useState([]);

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="d-flex pt-3">
                <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" }}></div>
                <div className="container bg-light">
                    <div className="row bg-secondary">
                        <h5 class="text-light  mt-2">
                            <span><i class="bi bi-info-circle m-2"></i></span>
                            Employee List
                        </h5>
                    </div>
                    <div class="row g-3 p-3">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.No.</th>
                                    <th scope="col">Emp Id.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Employment Type</th>
                                    <th scope="col">Joining Date</th>
                                    <th scope="col">Reporting Manager</th>
                                    <th scope="col">Basic Salary</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>@social</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allemp;