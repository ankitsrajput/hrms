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
            <div className="modal-button-style">
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Employee</button>
            </div>
            <div className="d-flex pt-3">
                <div className="flex-grow-1" style={{ marginLeft: "250px" }}></div>
                <div className="container bg-light">
                    <div className="row bg-secondary">
                        <h5 class="text-light  mt-2">
                            <span><i class="bi bi-info-circle m-2"></i></span>
                            Employee List
                        </h5>
                    </div>
                    <div class="row g-3 p-3">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.No.</th>
                                    <th scope="col">Emp Id.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Emp Type</th>
                                    <th scope="col">DOJ</th>
                                    <th scope="col">Manager</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>IT001</td>
                                    <td>Akshat</td>
                                    <td>IT</td>
                                    <td>Front-end</td>
                                    <td>Intern</td>
                                    <td>08/20/2025</td>
                                    <td>Mudit</td>
                                    <td>34790</td>
                                    <td>7651849593</td>
                                    <td className="action-style">
                                        <i class="edit-icon bi bi-pencil-square" title="Edit" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                                        <i class="bi bi-trash3" title="Delete"></i>
                                    </td>
                                    <td>Active</td>
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