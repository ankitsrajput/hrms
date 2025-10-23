import React from "react";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Allemp = () => {

    const navigate = useNavigate();
    let [instaData, setInstaData] = useState("");
    let [tableData, setTableData] = useState([]);

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="d-flex">
                <div className="flex-grow-1" style={{ marginLeft: "250px" }}>
                    <div className="container bg-light">
                        {/* Add button Starts */}
                        <div className="modal-button-style mt-5 pt-5">
                            <button type="button" class="btn btn-success" onClick={() => navigate("/admin/add-employee")}>Add</button>
                        </div>
                        {/* Add button end */}

                        {/* Table Starts here */}
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr No.</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Insta Handle</th>
                                        <th scope="col">Action</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{row.fname}</td>
                                                <td>{row.lname}</td>
                                                <td><span>@</span>{row.instahandle}</td>
                                                <td className="action-style">
                                                    <i class="edit-icon bi bi-pencil-square" title="Edit" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                                                    <i class="bi bi-trash3" title="Delete"></i>
                                                </td>
                                                <td>{row.status}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {/* Table ends here */}
                </div>
            </div>
        </>
    )
}

export default Allemp;