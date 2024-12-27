import React, { useEffect, useRef, useState } from "react";
import AdminLayout from "./AdminLayout";
import "../Admin/admin.css";
import { endpoints } from "../_config";
import { get } from "../_services/apiService";
import { Link } from "react-router-dom";
// import {Html } from 'react-pdf-html';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";


const UserProductQuotation = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState(""); // Add state for search term

    const [productOrderData, setroductOrderData] = useState();
    const [productOrderItemData, setroductOrderItemData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const pdfRef = useRef();
    const loginId = localStorage.getItem("loginId");
    const GetProductOrder = async (loginId) => {
        try {
            const response = await get(endpoints.GetProductOrderByLoginId + "?pLoginId=" + loginId)
            console.log('datar', response);
            if (response.isSuccess === 200) {
                setroductOrderData(response.data);
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
        GetProductOrder(loginId);
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



    const generatePdf = async () => {
        const element = pdfRef.current;
        const canvas = await html2canvas(element, {
            scale: 2, // Improves quality
        });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("download.pdf");
    };


    const modelToggle = (modelname, status, item) => {
        // Get the modal element by ID

        setroductOrderItemData(item);
        console.log('item', item);
        console.log('item1', productOrderItemData);
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
                                    <h2>Product Quotation</h2>
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
                                        <th>Quotation No.</th>
                                        <th>Quotation Date</th>
                                        <th>Name</th>
                                        <th>Email Id</th>
                                        <th>Contact No</th>
                                        <th>Entry Date</th>
                                        <th>View</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {productOrderData?.length > 0 ? (
                                        productOrderData?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.orderNo}</td>
                                                <td>{item.orderDate}</td>
                                                <td>{item.name} </td>
                                                <td>{item.emailId}</td>
                                                <td>{item.mobileNo}</td>
                                                <td>{item.createdDate}</td>

                                                <td>
                                                    <span className="edit_icon_wepper" onClick={() => modelToggle('modeldata', true, item)} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
                                                            <path d="M16 9.75C12.5537 9.75 9.75 12.5538 9.75 16C9.75 19.4462 12.5537 22.25 16 22.25C19.4463 22.25 22.25 19.4462 22.25 16C22.25 12.5538 19.4463 9.75 16 9.75ZM16 19.75C13.9323 19.75 12.25 18.0677 12.25 16C12.25 13.9323 13.9323 12.25 16 12.25C18.0677 12.25 19.75 13.9323 19.75 16C19.75 18.0677 18.0677 19.75 16 19.75Z" fill="black" />
                                                            <path d="M31.5881 15.3389C30.3622 13.3717 24.1243 4.75 16 4.75C7.8775 4.75 1.63787 13.3716 0.411938 15.3389L0 16L0.411938 16.6611C1.63775 18.6283 7.87569 27.25 16 27.25C24.1225 27.25 30.3621 18.6284 31.5881 16.6611L32 16L31.5881 15.3389ZM16 24.75C9.69775 24.75 4.50862 18.1404 2.99325 15.999C4.50581 13.8559 9.68162 7.25 16 7.25C22.3018 7.25 27.4907 13.8587 29.0068 16.001C27.4942 18.1442 22.3184 24.75 16 24.75Z" fill="black" />
                                                        </svg>
                                                    </span>




                                                </td>

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
                            <h5 className="modal-title" id="exampleModalLabel">Quotation</h5>
                            <div className="send_wepper">
                                <span onClick={generatePdf}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_701_102)">
                                        <path d="M25.6116 17.4062L16 27.0178L6.38843 17.4062L8.15625 15.6384L14.75 22.2322V0H17.25V22.2322L23.8438 15.6384L25.6116 17.4062ZM32 29.5H0V32H32V29.5Z" fill="#7e7e7e" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_701_102">
                                            <rect width="32" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </span>
                                {/* <span onClick={generatePdf}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_701_93)">
                                        <path d="M31.9783 3.22965C32.1342 2.50347 31.4223 1.89117 30.7278 2.15616L0.603121 13.6561C0.240562 13.7945 0.000751757 14.142 1.76421e-06 14.53C-0.000748228 14.9182 0.237687 15.2666 0.599746 15.4064L9.06235 18.6748V28.9693C9.06235 29.4035 9.36054 29.7809 9.78303 29.8813C10.2027 29.9811 10.6403 29.7815 10.8371 29.3911L14.3371 22.4457L22.8785 28.7846C23.3981 29.1702 24.1449 28.925 24.334 28.3053C32.3088 2.15823 31.9641 3.29534 31.9783 3.22965ZM24.542 6.5245L9.86697 16.9756L3.55278 14.537L24.542 6.5245ZM10.9373 18.5151L23.729 9.40541C12.7219 21.0172 13.2968 20.406 13.2488 20.4706C13.1775 20.5665 13.3729 20.1926 10.9373 25.0257V18.5151ZM22.9283 26.4867L15.4099 20.907L29.0042 6.56575L22.9283 26.4867Z" fill="#7e7e7e" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_701_93">
                                            <rect width="32" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                </span> */}
                                <span className="btn-close" style={{ margin: '0' }} data-bs-dismiss="modal" aria-label="Close"></span>
                            </div>
                        </div>
                        <div class="modal-body">

                            <div   >
                                <div ref={pdfRef} style={{ padding: 20 }}>

                                    {productOrderItemData != null ?
                                        <section>
                                            <div>
                                                <div class="container mt-5">
                                                    <header class="d-flex justify-content-between header_weepr">
                                                        <div class="logo">
                                                            <img src="images/logo-white.png" alt="" />
                                                        </div>
                                                        <div class="header_text">
                                                            <h2>QUOTATION</h2>
                                                            <p><strong>Number:</strong> {productOrderItemData.orderNo}</p>
                                                            <p><strong>Date:</strong> {productOrderItemData.orderDate}</p>
                                                        </div>
                                                    </header>

                                                    <div class="all_main_wepper">
                                                        <div class="client-details">
                                                            <strong>QUOTATIONTO:</strong>
                                                            <h3>{productOrderItemData.name}</h3>
                                                            {/* <span>Managing Director ,Company ltd.</span> */}
                                                            <p><strong>Phone:</strong>{productOrderItemData.mobileNo}</p>
                                                            <p><strong>Email:</strong>{productOrderItemData.emailId}</p>
                                                        </div>

                                                        <div class="quotation-details mt-4">
                                                            <p><strong>Dear Client,</strong></p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                                                                labore et
                                                                dolore magna aliqua.
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                                                                labore et
                                                                dolore magna aliqua.
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                                                                labore et
                                                                dolore magna aliqua.
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                                                                labore et
                                                                dolore magna aliqua.
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                                                                labore et
                                                                dolore magna aliqua.
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                                                                labore et
                                                                dolore magna aliqua.</p>

                                                        </div>


                                                        <div class="mt-4">

                                                            <div class="product-header">
                                                                <div class="product-no"><strong>No.</strong></div>
                                                                <div class="product-description"><strong>PRODUCT DESCRIPTION</strong></div>
                                                                <div class="price"><strong>PRICE</strong></div>
                                                                <div class="quantity"><strong>QUANTITY</strong></div>
                                                                <div class="total"><strong>TOTAL</strong></div>
                                                            </div>


                                                            {productOrderItemData?.orderItem?.map((item, index) => (

                                                                <div class="product-row">
                                                                    <div class="product-no">01</div>
                                                                    <div class="product-description">
                                                                        {item.productName}<br />
                                                                        <small>Categories: {item.productSubCategoryName}, {item.categoryName}</small>
                                                                    </div>
                                                                    <div class="price">-</div>
                                                                    <div class="quantity">{item.quantity}</div>
                                                                    <div class="total">-</div>
                                                                </div>

                                                            ))}





                                                        </div>


                                                        <div class="terms mt-4">
                                                            <div class="terms-conditions-row">
                                                                <div class="left-col">
                                                                    <p><strong>Terms & Conditions:</strong> Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing
                                                                        elit, sed
                                                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                </div>
                                                                <div class="right-col">
                                                                    {/* <p><strong>SUBTOTAL:</strong> ${productOrderItemData.totalAmount}</p> */}
                                                                    {/* <p><strong>TAX (10%):</strong> $100.00</p>
                                                                <p><strong>DISCOUNT:</strong> $0.00</p> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="footer1 text-center mt-4">
                                                            {/* <p><strong>Total: ${productOrderItemData.orderAmount}</strong></p> */}
                                                        </div>

                                                        <div class="signature">
                                                            <p>AUTHORIZED SIGN</p>
                                                        </div>

                                                        <div class="footer1 text-center mt-4">
                                                            <p>For any questions contact us at:</p>
                                                            <p><a href="mailto:Help@sparks-hvac.com">Help@sparks-hvac.com</a></p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </section>
                                        : null}
                                </div>

                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Reset</button>
                            <button type="button" class="btn btn-primary">Summit</button>
                        </div> */}
                    </div>
                </div>
            </div>






            {/* <Html>{html}</Html> */}



        </div>







    );
};

export default UserProductQuotation;
