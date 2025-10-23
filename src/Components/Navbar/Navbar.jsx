import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();
    return (
        <>
            <nav class="navbar fixed-top navbar-expand-lg text-light ans-primary-bg">
                <div class="container-fluid">
                    <div class="ans-toggler" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        <i class="bi bi-list"></i>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                <a class="nav-link text-light active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Contact</a>
                            </li> */}
                        </ul>
                        <div class="d-flex" role="search">
                            <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light me-2 rounded-0" type="submit">Search</button>
                            {/* Notification Area & Message Area Starts Here */}
                            <div class="d-flex align-items-center ms-1 me-1">
                                {/* Notification Area Starts*/}
                                <i class="bi bi-bell position-relative fs-5 me-3 dropdown" data-bs-toggle="dropdown" role="button" aria-expanded="true">
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        3
                                    </span>
                                </i>
                                <ul class="dropdown-menu dropdown-menu-end mt-0 me-1">
                                    <div class="d-flex align-items-center p-2">
                                        <span class="avatar avatar-md me-2 online avatar-rounded">
                                            <img src="/imgs/profile/admin/userProfile.jpg" alt="profile-img" className="user-profile" />
                                        </span>
                                        <div className="">
                                            <h6 class="mb-0">Ankit Singh</h6>
                                            <p class="text-primary-emphasis fw-medium mb-0">Admin</p>
                                        </div>
                                    </div>
                                    <li onClick={() => navigate("/admin/profile")}><a class="dropdown-item" href=""><i class="bi bi-person me-2"></i>Profile</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Settings</a></li>
                                    <li onClick={() => navigate("/login")}><a class="dropdown-item" href=""><i class="bi bi-box-arrow-left me-2"></i>Log out</a></li>
                                </ul>
                                {/* Notification Area Ends*/}
                                {/* Message Area Starts*/}

                                <i class="bi bi-envelope position-relative fs-5 ms-1">
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        2
                                    </span>
                                </i>
                                {/* Message Area Ends*/}

                            </div>
                            {/* Notification Area & Message Area Ends Here */}
                        </div>

                        <div class="d-flex ms-3 me-3">
                            <i class="bi bi-person-circle profile-icon dropdown" data-bs-toggle="dropdown" role="button" aria-expanded="false"></i>
                            <ul class="dropdown-menu dropdown-menu-end mt-0 me-1">
                                <div class="d-flex align-items-center p-2">
                                    <span class="avatar avatar-md me-2 online avatar-rounded">
                                        <img src="/imgs/profile/admin/userProfile.jpg" alt="profile-img" className="user-profile" />
                                    </span>
                                    <div className="">
                                        <h6 class="mb-0">Ankit Singh</h6>
                                        <p class="text-primary-emphasis fw-medium mb-0">Admin</p>
                                    </div>
                                </div>
                                <li onClick={() => navigate("/admin/profile")}><a class="dropdown-item" href=""><i class="bi bi-person me-2"></i>Profile</a></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Settings</a></li>
                                <li onClick={() => navigate("/login")}><a class="dropdown-item" href=""><i class="bi bi-box-arrow-left me-2"></i>Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;