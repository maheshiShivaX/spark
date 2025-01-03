import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import "../Admin/admin.css";
import { endpoints, Image_BASE_URL } from "../_config";
import { get } from "../_services/apiService";

const UserAppointments = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState(""); // Add state for search term

    const [appointmentData, setAppointmentData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
const loginId= localStorage.getItem("loginId");
const [appointmentItemData, setAppointmentItemData] = useState();
    const GetBookAppoinment = async (loginId) => {
        try {
            const response = await get(endpoints.GetBookAppoinmentByLoginId+ "?pLoginId="+ loginId)
            console.log('datar',response);
            if (response.isSuccess === 200) {
                setAppointmentData(response.data);
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
        GetBookAppoinment(loginId);
    }, []);


    const data = [
        {
            id: 1,
            image: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
            code: "#22323",
            name: "Car",
            displayName: "Car",
            description: "Here Are The Coolest New Cars For 2020",
            isDisplay: true,
            isActive: true,
        },
        {
            id: 2,
            image: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
            code: "#22323",
            name: "Bike",
            displayName: "Bike",
            description: "New Bikes Launch in 2020",
            isDisplay: true,
            isActive: false,
        },
        // Add more mock data
    ];

    // Filter data based on search term
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const modelToggle = (modelname, status, item) => {
        // Get the modal element by ID

        setAppointmentItemData(item);
        // console.log('item', item);
        // console.log('item1', productOrderItemData);
        const modalElement = document.getElementById(modelname);
        let modal = window.bootstrap.Modal.getInstance(modalElement);
        if (!modal) {
            modal = new window.bootstrap.Modal(modalElement);
        }
        // Show or hide the modal based on the status value
        if (status) {
            modal.show(); // Show the modal if status is true
        } else {
            modal.hide(); // Hide the modal if status is false
        }
    };

    return (
        <div>
            <AdminLayout>
                <div className="product_wepper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="product_hedding">
                                    <h2>Appointments</h2>
                                </div>
                            </div>
                            {/* <div className="col-lg-7">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 search_input">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="form-control"
                                            value={searchTerm}
                                            onChange={handleSearchChange} // Handle search input change
                                        />
                                    </div>
                                    <div className="col-lg-6 add_subcategory">
                                        <p
                                            data-bs-toggle="modal"
                                            data-bs-target="#Subcategory"
                                            data-bs-whatever="@mdo"
                                        >
                                            Add Product Sub Category
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        {/* Table Section */}
                        <div className="row mt-3 product_hedding_table_main">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Email Id</th>
                                        <th>Contact No</th>
                                        <th>Address</th>
                                        <th>Service Type</th>
                                        <th>Referral Source</th>
                                        <th>Additional Msg</th>
                                        <th>Appointent Date 1</th>
                                        <th>Appointent Date 2</th>
                                        <th>View</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointmentData?.length > 0 ? (
                                        appointmentData?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index +1}</td>
                                                {/* <td>
                                                    <img
                                                        src={item.image}
                                                        alt="Product"
                                                        style={{ width: "70px", height: "70px" }}
                                                    />
                                                </td> */}
                                                <td>{item.firstName} {item.lastName}</td>
                                                <td>{item.emailId}</td>
                                                <td>{item.contactNo}</td>
                                                <td>{item.address} </td>
                                                <td>{item.serviceName}</td>
                                                <td>{item.referralSource}</td>
                                                <td>{item.additionalMsg}</td>
                                                <td>{item.appointmentDate1}</td>
                                                <td>{item.appointmentDate1}</td>
                                                {/* <td>{item.isDisplay ? "True" : "False"}</td> */}
                                                <td>
                                                <span className="edit_icon_wepper" onClick={() => modelToggle('modeldata', true, item)} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
                                                            <path d="M16 9.75C12.5537 9.75 9.75 12.5538 9.75 16C9.75 19.4462 12.5537 22.25 16 22.25C19.4463 22.25 22.25 19.4462 22.25 16C22.25 12.5538 19.4463 9.75 16 9.75ZM16 19.75C13.9323 19.75 12.25 18.0677 12.25 16C12.25 13.9323 13.9323 12.25 16 12.25C18.0677 12.25 19.75 13.9323 19.75 16C19.75 18.0677 18.0677 19.75 16 19.75Z" fill="black" />
                                                            <path d="M31.5881 15.3389C30.3622 13.3717 24.1243 4.75 16 4.75C7.8775 4.75 1.63787 13.3716 0.411938 15.3389L0 16L0.411938 16.6611C1.63775 18.6283 7.87569 27.25 16 27.25C24.1225 27.25 30.3621 18.6284 31.5881 16.6611L32 16L31.5881 15.3389ZM16 24.75C9.69775 24.75 4.50862 18.1404 2.99325 15.999C4.50581 13.8559 9.68162 7.25 16 7.25C22.3018 7.25 27.4907 13.8587 29.0068 16.001C27.4942 18.1442 22.3184 24.75 16 24.75Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                </td>
                                                {/* <td>
                                                    <div className="action_btn_weepr">
                                                        <span className="edit_icon_wepper">
                                                            <svg id="Layer_1" viewBox="0 0 512 512" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                                                <g transform="matrix(1,0,0,1,0,0)">
                                                                    <path
                                                                        d="m41.3 512c-22.8 0-41.3-18.5-41.3-41.3 0-2.6.2-5.2.7-7.7l27.3-144.8c1.5-8.2 5.5-15.7 11.4-21.5l274-274c14.7-14.7 35.1-22.7 57.7-22.7 8.1 0 16.1 1 24 2.8 25.5 5.9 51.1 20.7 72.2 41.8s36 46.7 41.8 72.2c7.4 31.9.2 61.7-19.8 81.7l-274 274c-5.9 5.9-13.4 9.8-21.5 11.4l-144.8 27.4c-2.5.5-5.1.7-7.7.7zm51.8-93.1 72.9-13.8 182-182-59.1-59.1-182 182zm313.3-254.2 23.1-23.1c.2-5.4-3.8-21.8-20.6-38.5-10.1-10.2-22-17.4-32.4-19.8-1.8-.4-3.7-.7-5.5-.7h-.7l-23 23z"
                                                                        fill="#000"
                                                                    ></path>
                                                                    <path
                                                                        d="m499.4 119.1c-5.4-23.7-19.4-47.6-39.1-67.4s-43.8-33.7-67.4-39.1c-28.5-6.6-54.9-.4-72.3 17.1l-274 274c-4.5 4.4-7.5 10.1-8.7 16.3l-27.4 144.9c-3.2 17 8 33.4 24.9 36.6 1.9.4 3.9.5 5.8.5s3.9-.2 5.8-.5l145-27.4c6.2-1.2 11.9-4.2 16.3-8.6l274-274c17.5-17.5 23.7-43.9 17.1-72.4zm-328.5 295.3-90.3 17 17-90.3 191.3-191.3 73.3 73.3zm267.2-267.2-31.7 31.7-73.2-73.3 31.7-31.7c1-1 5.6-2.3 14-.4 12.2 2.8 25.8 11 37.2 22.4 23.5 23.7 25.6 47.7 22 51.3z"
                                                                        fill="url(#gradient1)"
                                                                    ></path>
                                                                    <defs>
                                                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                            <stop offset="0%" stop-color="#000"></stop>
                                                                            <stop offset="100%" stop-color="#000"></stop>
                                                                        </linearGradient>
                                                                    </defs>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span className="delete_icon_weepr">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"
                                                                    fill="#FF0000"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </td> */}
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="text-center">
                                                No results found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Pagination */}
                            <nav aria-label="...">
                                <ul className="pagination justify-content-end">
                                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                        <button className="page-link" onClick={handlePrevPage}>
                                            Previous
                                        </button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <li
                                            key={index}
                                            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => setCurrentPage(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                        <button className="page-link" onClick={handleNextPage}>
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </AdminLayout>
            {/* Modal */}
            <div className="modal fade" id="modeldata" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Appointments</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            {appointmentItemData != null ?

                                <div className="">

                                    <div className="row user_deatlis">
                                        <div className="col-lg-3">
                                            <strong>Name: </strong>

                                        </div>
                                        <div className="col-lg-3">
                                            {appointmentItemData.firstName} {appointmentItemData.lastName}
                                        </div>

                                        <div className="col-lg-3">
                                            <strong>Email Id: </strong>

                                        </div>
                                        <div className="col-lg-3">
                                            {appointmentItemData?.emailId}
                                        </div>
                                        <div className="col-lg-3">
                                            <strong>Contact No: </strong>

                                        </div>
                                        <div className="col-lg-3">
                                            {appointmentItemData?.contactNo}
                                        </div>

                                        <div className="col-lg-3">
                                            <strong>Above Ground Level: </strong>

                                        </div>
                                        <div className="col-lg-3">
                                            {appointmentItemData?.aboveGroundLevel}
                                        </div>

                                        


                                        <div className="col-lg-3">
                                            <strong>Address:</strong>
                                        </div>
                                        <div className="col-lg-9">
                                            {appointmentItemData?.address}
                                        </div>
                                        <div className="col-lg-3">
                                            <strong>Service Type:</strong>
                                        </div>
                                        <div className="col-lg-3">
                                            {appointmentItemData?.serviceName}
                                        </div>

                                        <div className="col-lg-3">
                                            <strong>House Status:</strong>
                                        </div>
                                        <div className="col-lg-3">
                                            {appointmentItemData?.houseStatusName}
                                        </div>

                                        {/* <div className="col-lg-3">
                                            <strong>Product Detail:</strong>
                                        </div>
                                        <div className="col-lg-9">
                                            {appointmentItemData?.productDetail}
                                        </div> */}

                                        <div className="col-lg-3">
                                            <strong>Referral Source:</strong>
                                        </div>
                                        <div className="col-lg-9">
                                            {appointmentItemData?.referralSource}
                                        </div>


                                        <div className="col-lg-3">
                                            <strong>Additional Message:</strong>
                                        </div>
                                        <div className="col-lg-9">
                                            {appointmentItemData?.additionalMsg}
                                        </div>
                                        <div className="col-lg-3">
                                            <strong>Additional Message:</strong>
                                        </div>
                                        <div className="col-lg-9">
                                            {appointmentItemData?.additionalMsg}
                                        </div>
                                        <div className="col-lg-3">
                                            <strong>Appointent Date 1: </strong>

                                        </div>
                                        <div className="col-lg-3">
                                            {appointmentItemData?.appointmentDate1}
                                        </div>

                                        <div className="col-lg-3">
                                            <strong>Appointent Date 2: </strong>

                                        </div>
                                        <div className="col-lg-3">
                                            {appointmentItemData?.appointmentDate2}
                                        </div>
                                      


                                        <div className="col-lg-6">
                                            <strong>Product Path:</strong>
                                        </div>
                                        <div className="col-lg-6">
                                            <strong>Serial Image Path:</strong>
                                        </div>

                                        <div className="col-lg-6"> <img
                                            src={`${Image_BASE_URL}${appointmentItemData.productPath}`}
                                            alt="Product"
                                            style={{ width: "150px", height: "150px" }} />
                                        </div>



                                        <div className="col-lg-6">


                                            <img
                                                src={`${Image_BASE_URL}${appointmentItemData.serialImagePath}`}
                                                alt="Product"
                                                style={{ width: "150px", height: "150px" }} />
                                        </div>

                                    </div>
                                </div>

                                : null}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAppointments;
