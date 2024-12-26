import { useLocation } from "react-router-dom";
import React, { useState } from "react";

const DashboardHeader = () => {

    const location = useLocation();

    // Function to determine the title based on the current path
    const getPageTitle = () => {
        if (location.pathname.includes('/dashboard')) return 'Quotation';
        if (location.pathname.includes('/history')) return 'History';
        if (location.pathname.includes('/settings')) return 'Profile';
        if (location.pathname.includes('/table')) return 'Table';

        return 'Dashboard'; // Default title
    };

    const [flag, setFlag] = useState("images/country.png");
    const countries = [
        { name: "United States", flag: "images/united-states.png" },
        { name: "India", flag: "images/country.png" }, // Default selected country
        // Add more countries as needed
    ];
    const handleCountryChange = (event) => {
        const selectedCountry = countries.find(
            (country) => country.name === event.target.value
        );
        setFlag(selectedCountry.flag);
    };

    return (
        <div className="container dashboard_container">
            <div className="dashboard_hedaer">
                <div className="dashboard_inner">
                    <h2>{getPageTitle()}</h2>

                    {/* <div className="dashboard_serch_box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                            fill="none">
                            <path
                                d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                                fill="#204C6D" />
                        </svg> <input type="text" placeholder="Search here..." required />
                    </div> */}
                    <div className="country_wepper">
                        <img src={flag} alt="Country Flag" />
                        <select onChange={handleCountryChange} defaultValue="India">
                            {countries.map((country, index) => (
                                <option key={index} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="notifications_wepper">
                        <span class="text-tiny">1</span>
                        <span class="notification-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M11.3527 2.95875C10.8698 2.67825 10.572 2.15625 10.5728 1.59375V1.5915C10.5728 0.7125 9.8685 0 9 0C8.1315 0 7.42725 0.7125 7.42725 1.5915V1.59375C7.428 2.157 7.13025 2.67825 6.6465 2.95875C3.14625 4.99275 5.15775 11.745 1.5 12.9382V14.25H16.5V12.9382C12.8422 11.745 14.8538 4.99275 11.3527 2.95875ZM6.30675 12H4.89525C5.829 9.94425 5.5545 5.241 7.8 4.00875C6.47925 5.559 7.0875 9.63675 6.30675 12ZM9 2.25C8.586 2.25 8.25 1.914 8.25 1.5C8.25 1.08675 8.586 0.75 9 0.75C9.414 0.75 9.75 1.08675 9.75 1.5C9.75 1.914 9.414 2.25 9 2.25ZM6.75 15.75H11.25C11.25 16.9485 10.2052 18 9.02175 18C7.8375 18 6.75 16.9485 6.75 15.75Z" fill="#6F757E"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="admin_profile_wepper">
                        <img src="images/admin-icon.png" alt="" />
                        <div className="profile_name">
                            <h3>Ishivax</h3>
                            <p>Admin</p>
                        </div>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Ishivax
                                <span class="sub-arrow"><i class="fas fa-chevron-down"></i></span>
                            </a>
                            <p>Admin</p>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;