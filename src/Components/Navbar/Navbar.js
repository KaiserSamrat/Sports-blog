import React from 'react';
import { Link } from "react-router-dom";


const Nabvar = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Tech Blog</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/login' class="nav-link ms-3" href="#footer-area">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' class="nav-link ms-3" href="#footer-area">User</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/admin' class="nav-link ms-3" href="#footer-area">Admin</Link>
                            </li>

                            <li class="nav-item">
                                <Link to='/' class="nav-link ms-3" href="#services-area">User</Link>
                            </li>




                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nabvar;