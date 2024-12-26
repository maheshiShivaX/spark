import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faHistory, faCog, faTable, faSignOutAlt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Admin/admin.css";
import { endpoints } from "../_config";
import { get } from "../_services/apiService";


import { library } from "@fortawesome/fontawesome-svg-core";


// Adding the icons to the library (optional but recommended for performance)
library.add(faHistory, faCog, faTable, faSignOutAlt, faDashboard);


const SideBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(null); // Track the active menu
    const [menuData, setMenuData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // Function to toggle the active menu and keep it open on submenu click
    const toggleMenu = (menu) => {
        setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    };




    const GetMenuDetailByTypeId = async (pMenuTypeId, pRoleId) => {
        try {
            const response = await get(endpoints.GetMenuDetailByTypeId + "?pMenuTypeId=" + pMenuTypeId + "&pRoleId=" + pRoleId)
            console.log('datar', response);
            if (response.isSuccess === 200) {
                setMenuData(response.data);
            } else {
                setError("Failed to fetch Service Type");
            }
        } catch (error) {
            setError("Please try again later.");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {

        //  localStorage.setItem("roleId", response.data[0].roleId);
        const roleid = localStorage.getItem("roleId");

        GetMenuDetailByTypeId(1, roleid);
    }, []);

    const getIcon = (iconName) => {
        return <FontAwesomeIcon icon={iconName} />;
    };

    const isActive = (path) => location.pathname.includes(path);


    const onLogout = () => {

        localStorage.clear();
        navigate("/");
    }

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <>
            {/* Sidebar Toggle Button for Mobile */}
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
            </button>
            <div className={`dashboard_left_bg ${sidebarOpen ? "open" : ""}`}>
                <div className="dashboard_logo">
                    <img src="images/logo-white.png" alt="logo" />
                </div>

                <div className="left_menu_wepper">
                    <ul>

                        {menuData?.map((item, index) => (
                            <li
                                key={index}
                                className={`menu-item ${activeMenu === item.title || isActive(item.url) ? "active" : ""}`}
                            >
                                <Link
                                    to={item.url}
                                    className={`nav-link ${activeMenu === item.title || isActive(item.url) ? "active" : ""}`}
                                    onClick={() => item.isModal ? null : toggleMenu(item.title)} // Only toggle if it's not a modal
                                >
                                    <FontAwesomeIcon icon={faDashboard} />   {item.title}
                                    {item.children.length > 0 && (
                                        <span className={`arrow ${activeMenu === item.title ? "open" : ""}`}>
                                            <i className="fa-solid fa-chevron-right rotate-icon"></i>
                                        </span>
                                    )}
                                </Link>

                                {/* Render sub-menu if available */}
                                {activeMenu === item.title && item.children.length > 0 && (
                                    <ul className="submenu">
                                        {item.children.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link to={subItem.url}>{subItem.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}


                        {/* Sign Out */}
                        <li data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <Link to="#" className="nav-link">
                                <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
                            </Link>
                        </li> </ul>

                </div>


            </div>

            {/* Modal for Sign Out */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Log Out
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="logout_content">
                                <h2>Are you sure you want to log Out?</h2>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={onLogout} className="login_out_btn">
                                Log Out
                            </button>
                            <button
                                type="button"
                                className="login_out_btn"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
