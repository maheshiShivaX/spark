import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_BASE_URL, endpoints } from '../../_config';
import OverLay from '../HomePage/OverLay';
import { useDispatch, useSelector } from 'react-redux';
import { get_cart_Data } from '../../redux/action';
const Header = () => {

    const [showAppointmentSidebar, setShowAppointmentSidebar] = useState(false);
    const [activeTab, setActiveTab] = useState('book-appointment');
    const [isData, setIsData] = useState(0);
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    const cartData = useSelector((state) => state.cartReducer.cart);

    console.log('cartdata1', cartData);

    const getTotalQuantity = () => {
        return cartData.reduce((acc, item) => acc + (item.quantity || 0), 0);
    };

    const [totalQuantity, setTotalQuantity] = useState(getTotalQuantity());

    useEffect(() => {
        setTotalQuantity(getTotalQuantity());
    }, [cartData]);


    useEffect(() => {
        dispatch(get_cart_Data());
    }, [dispatch]);

    useEffect(() => {

        const routesToScrollTop = ["/aboutus", "/our-product", "/product-detail", "/get-quote-step", "/get-quote-inner", "/add-quotation", '/financing-services', '/thank-you'];
        if (routesToScrollTop.includes(pathname)) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname]);

    const onContactUs = (activetab) => {
        setShowAppointmentSidebar(true);
        setActiveTab(activetab);
    }



    return (
        <div>

            {/* TOP Header Satrt */}
            <section className="over_lay">

                <OverLay
                    showAppointmentSidebar={showAppointmentSidebar}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setShowAppointmentSidebar={setShowAppointmentSidebar}
                />
            </section>
            <div className="top_headar_wepper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="top_logo">
                                <a href="/"> <img src="images/logo-white-text.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="top_book_appointment_wepper">
                                <div className="book_appointment_btn">
                                    <Link to="/get-quote-step">Get Instant Quote Now <img src="images/right-arrow.svg" alt="" /></Link>
                                    <p className="book_appointment_click" onClick={() => onContactUs('book-appointment')} >Book Your Appointment <img src="images/right-arrow.svg"
                                        alt="" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TOP Header END */}

            <header className="header" id="header">
                <nav className="navbar navbar-light  navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <div className="time_logo">
                                <i className="fa-regular fa-clock"></i>
                                <p>Mon - Fri (09.00 am - 10.00 pm)</p>
                            </div>
                        </a>
                        <div className='login_mobile_wepper'>
                            <img src="images/add-to-cart.svg" alt="" className="mobile_show cart_icon" />
                            <span>{`${totalQuantity}`}</span>
                            <Link to="/login"> <img src="images/User-profile-icon.svg" alt="" className="mobile_show user_profile_icon" /></Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon">
                                <img src="images/nav.svg" alt="" />

                            </span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <div className="logo_offcanavs">
                                    <div className="logo">
                                        <img src="images/logo-dark.svg" alt="" />
                                    </div>
                                </div>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/our-product">Our Product</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Heating
                                            <span className="sub-arrow"><i className="fas fa-chevron-down"></i></span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/our-product">Furnace Installation</Link></li>
                                            <li><a className="dropdown-item" href="#">Furnace Replacement</a></li>
                                            <li><a className="dropdown-item" href="#">Heat Pump Installation</a>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Furnace Repair and Maintenance</a></li>
                                            <li><a className="dropdown-item" href="#">Water Heater Replacement</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Cooling
                                            <span className="sub-arrow"><i className="fas fa-chevron-down"></i></span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Air Conditioning Installation</a></li>
                                            <li><a className="dropdown-item" href="#">AC Maintenance and Replacement</a></li>
                                            <li><a className="dropdown-item" href="#">AC Repair services</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/financing-services">Apply for Financing</Link>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Warranty Registration</a>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link" onClick={() => onContactUs('contact-us')} >Contact Us</p>
                                    </li>
                                </ul>
                                <div className="add_to_cart_wepper">

                                    {/*  <img src="images/add-to-cart-dark.svg" alt="" className="mobile_show" />*/}

                                    <div className='totalQuantity_adddynemic'>
                                         <Link to="/add-quotation">  <img src="images/add-to-cart.svg" alt="" className="destop_show" />
                                       <span>{`${totalQuantity}`}</span></Link>

                                        <Link to="/login"> <img src="images/User-profile-icon.svg" alt="" className="destop_show" /></Link>
                                    </div>


                                    {/* <Link to="/login"> <img src="images/User-profile-icon-dark.svg" alt="" className="mobile_show" /></Link> */}

                                    <div className="club_member_ship">
                                        <img src="images/club-membership.svg" alt="" className="club_membership_click" onClick={() => onContactUs('club-membership')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;  