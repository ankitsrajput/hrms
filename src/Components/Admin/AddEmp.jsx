import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AddEmp = () => {

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="d-flex pt-3">
                <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" }}>
                    <div className="container bg-light">
                        <div className="row bg-secondary">
                            <h5 class="text-light  mt-2">
                                <span><i class="bi bi-info-circle m-2"></i></span>
                                Personal Details
                            </h5>
                        </div>
                        <div class="row g-3 p-3">
                            <div class="col-md-4">
                                <label for="empId" class="form-label">Emp Id.</label>
                                <input type="text" class="form-control" id="empId" />
                            </div>
                            <div class="col-md-4">
                                <label for="fname" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="fname" />
                            </div>
                            <div class="col-md-4">
                                <label for="lname" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lname" />
                            </div>
                            <div class="col-md-4">
                                <label for="empDob" class="form-label">Date of Birth</label>
                                <input type="date" class="form-control" id="empDob" />
                            </div>
                            <div class="col-md-4">
                                <label for="gender" class="form-label">Gender</label>
                                <select id="gender" class="form-select">
                                    <option selected>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="bloodgrp" class="form-label">Blood Group</label>
                                <select id="bloodgrp" class="form-select">
                                    <option selected>Select</option>
                                    <option value="a+">A+</option>
                                    <option value="a-">A-</option>
                                    <option value="b+">B+</option>
                                    <option value="b-">B-</option>
                                    <option value="ba+">AB+</option>
                                    <option value="ab-">AB-</option>
                                    <option value="o+">O+</option>
                                    <option value="o-">O-</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="maritalstatus" class="form-label">Marital Status</label>
                                <input type="text" class="form-control" id="maritalstatus" />
                            </div>
                            <div class="col-md-4">
                                <label for="experience" class="form-label">Experience in Months</label>
                                <input type="text" class="form-control" id="experience" />
                            </div>
                            <div class="col-md-4">
                                <label for="empContact" class="form-label">Contact Number</label>
                                <input type="text" class="form-control" id="empContact" />
                            </div>
                            <div class="col-md-4">
                                <label for="empWhatsapp" class="form-label">Whatsapp Number</label>
                                <input type="text" class="form-control" id="empWhatsapp" />
                            </div>
                            <div class="col-md-4">
                                <label for="empEmail" class="form-label">E-mail Address</label>
                                <input type="email" class="form-control" id="empEmail" />
                            </div>
                            <div class="col-md-4">
                                <label for="famContact" class="form-label">Family Contact</label>
                                <input type="text" class="form-control" id="famContact" />
                            </div>
                            <div class="col-md-12">
                                <label for="curAddress" class="form-label">Current Address</label>
                                <input type="text" class="form-control" id="curAddress" />
                            </div>
                            <div class="col-md-4">
                                <label for="curCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="curCity" />
                            </div>
                            <div class="col-md-4">
                                <label for="curState" class="form-label">State</label>
                                <select id="curState" class="form-select">
                                    <option selected>Select State</option>
                                    <option value="assam">Assam</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="curZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="curZip" />
                            </div>
                            <div class="col-md-12">
                                <label for="perAddress" class="form-label">Permanent Address</label>
                                <input type="text" class="form-control" id="perAddress" />
                            </div>
                            <div class="col-md-4">
                                <label for="perCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="perCity" />
                            </div>
                            <div class="col-md-4">
                                <label for="perState" class="form-label">State</label>
                                <select id="perState" class="form-select">
                                    <option selected>Select State</option>
                                    <option value="assam">Assam</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="perZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="perZip" />
                            </div>
                        </div>
                    </div>
                    <div className="container bg-light">
                        <div className="row bg-secondary">
                            <h5 class="text-light  mt-2">
                                <span><i class="bi bi-person-lines-fill m-2"></i></span>
                                Job Details
                            </h5>
                        </div>
                        <div class="row g-3 p-3">
                            <div class="col-md-4">
                                <label for="department" class="form-label">Department</label>
                                <select id="department" class="form-select">
                                    <option selected>Select</option>
                                    <option>IT</option>
                                    <option>HR</option>
                                    <option>Finance</option>
                                    <option>Marketing</option>
                                    <option>Technical</option>
                                    <option>Service</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="designation" class="form-label">Designation</label>
                                <input type="text" class="form-control" id="designation" />
                            </div>
                            <div class="col-md-4">
                                <label for="empType" class="form-label">Employment Type</label>
                                <select id="empType" class="form-select">
                                    <option selected>Select</option>
                                    <option>Intern</option>
                                    <option>Full-Time</option>
                                    <option>Part-Time</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="doj" class="form-label">Joining Date</label>
                                <input type="date" class="form-control" id="doj" />
                            </div>
                            <div class="col-md-4">
                                <label for="note1" class="form-label">Note</label>
                                <input type="text" class="form-control" id="note1" />
                            </div>
                            <div class="col-md-4">
                                <label for="dor" class="form-label">Date of Resignation</label>
                                <input type="date" class="form-control" id="dor" />
                            </div>
                            <div class="col-md-4">
                                <label for="note2" class="form-label">Note</label>
                                <input type="text" class="form-control" id="note2" />
                            </div>
                            <div class="col-md-4">
                                <label for="workLoc" class="form-label">Work Location</label>
                                <input type="text" class="form-control" id="workLoc" />
                            </div>
                            <div class="col-md-4">
                                <label for="reportMan" class="form-label">Reporting Manager</label>
                                <input type="text" class="form-control" id="reportMan" />
                            </div>
                        </div>
                    </div>
                    <div className="container bg-light">
                        <div className="row bg-secondary">
                            <h5 class="text-light  mt-2">
                                <span><i class="bi bi-cash-coin m-2"></i></span>
                                Salary & Payroll Info
                            </h5>
                        </div>
                        <div class="row g-3 p-3">
                            <div class="col-md-4">
                                <label for="bsalary" class="form-label">Basic Salary</label>
                                <input type="text" class="form-control" id="bsalary" />
                            </div>
                            <div class="col-md-4">
                                <label for="allowType" class="form-label">Allowance Type</label>
                                <select id="allowType" class="form-select">
                                    <option selected>Select</option>
                                    <option>Food</option>
                                    <option>Health</option>
                                    <option>Travel</option>
                                    <option>Accommodation</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="allowance" class="form-label">Allowance</label>
                                <input type="text" class="form-control" id="allowance" />
                            </div>
                            <div class="col-md-4">
                                <label for="deductType" class="form-label">Deduction Type</label>
                                <select id="deductType" class="form-select">
                                    <option selected>Select</option>
                                    <option>Personal Savings</option>
                                    <option>Retirement Fund</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="deduction" class="form-label">Deduction</label>
                                <input type="text" class="form-control" id="deduction" />
                            </div>
                            <div class="col-md-4">
                                <label for="bankname" class="form-label">Bank Name</label>
                                <input type="text" class="form-control" id="bankname" />
                            </div>
                            <div class="col-md-4">
                                <label for="acct" class="form-label">Account Number</label>
                                <input type="text" class="form-control" id="acct" />
                            </div>
                            <div class="col-md-4">
                                <label for="ifsc" class="form-label">IFSC Code</label>
                                <input type="text" class="form-control" id="ifsc" />
                            </div>
                            <div class="col-md-4">
                                <label for="bbranch" class="form-label">Branch</label>
                                <input type="text" class="form-control" id="bbranch" />
                            </div>
                        </div>
                    </div>
                    <div className="container bg-light">
                        <div className="row bg-secondary">
                            <h5 class="text-light  mt-2">
                                <span><i class="bi bi-file-earmark-pdf m-2"></i></span>
                                Documents
                            </h5>
                        </div>
                        <div class="row g-3 p-3">
                            <div class="col-md-4">
                                <label for="resume" class="form-label">Resume/CV</label>
                                <input type="file" class="form-control" id="resume" accept=".pdf" />
                            </div>
                            <div class="col-md-4">
                                <label for="adhar" class="form-label">Adhaar</label>
                                <input type="file" class="form-control" id="adhar" accept=".pdf" />
                            </div>
                            <div class="col-md-4">
                                <label for="pan" class="form-label">PAN Card</label>
                                <input type="file" class="form-control" id="pan" accept=".pdf" />
                            </div>
                            <div class="col-md-4">
                                <label for="empProfile" class="form-label">Employee Profile</label>
                                <input type="file" class="form-control" id="empProfile" accept="image/png, image/jpeg" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 my-3  text-end">
                            <button type="submit" class="btn btn-primary rounded-1 me-1">Cancel</button>
                            <button type="submit" class="btn btn-primary rounded-1 ms-1">Save Employee</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddEmp;