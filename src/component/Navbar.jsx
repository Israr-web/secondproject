import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfiles/Navbar.css';
// import './jsfiles/AnimateNavbar.js';
import { Link, useNavigation } from 'react-router-dom';

export default function Navbar() {


    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <div className="container">
                    <a href="" className="navbar-brand text-white font-weight-bold">
                        <img src="img/shoesicon.jpg" alt="Shoes Icon" class="sho" />
                        <span id="logo">
                            Shoes Store
                        </span>
                    </a>
                    <button
                        className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse borderXwidth" id="collapsenavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                               <Link to='/'><a  className="nav-link  text-white"> Home
                               </a></Link> 
                                   
                               
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#section-course" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                <li>
                                      <Link to='/man'> <a className="dropdown-item" >
                                          Man Shoes
                                        </a></Link>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Female Shoes
                                        </a>
                                    </li>
                                    {/* <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Other
                                        </a>
                                    </li> */}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/product">
                                <a href="#product" className="nav-link text-white">
                                    Products
                                </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#footerdiv" className="nav-link text-white">
                                    Contact Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-dark" id="btn_pos">
                                    Login
                                </button>
                                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#examplesignup" >
                                    Sign Up
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
