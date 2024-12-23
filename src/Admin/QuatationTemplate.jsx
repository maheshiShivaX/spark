import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import "../Admin/template.css";
import { endpoints } from "../_config";
import { get } from "../_services/apiService";
import { useParams } from "react-router-dom";

const QuatationTemplate = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState(""); // Add state for search term
    const params = useParams();
    const [productOrderData, setroductOrderData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const productId = params.id

    const GetProductOrderByOrderId = async (id) => {
        try {
            const response = await get(endpoints.GetProductOrderByOrderId + "?pOrderId=" + id)
            console.log('datar1', response);
            if (response.isSuccess === 200) {
                setroductOrderData(response.data);


                console.log('data',productOrderData);
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
        GetProductOrderByOrderId(productId);
    }, []);




    return (
        <div>


{productOrderData?.length > 0 ? (
            <section>
                <div>
                    <div class="container mt-5">
                        <header class="d-flex justify-content-between header_weepr">
                            <div class="logo">
                                <img src="images/logo-white.png" alt="" />
                            </div>
                            <div class="header_text">
                                <h2>QUOTATION</h2>
                                <p><strong>Number:</strong> {productOrderData[0]?.orderNo}</p>
                                <p><strong>Date:</strong> {productOrderData[0]?.orderDate}</p>
                            </div>
                        </header>

                        <div class="all_main_wepper">
                            <div class="client-details">
                                <strong>QUOTATIONTO:</strong>
                                <h3>Tim Sparks</h3>
                                <span>Managing Director ,Company ltd.</span>
                                <p><strong>Phone:</strong>+123 4567 8910</p>
                                <p><strong>Email:</strong>example@mall.com</p>
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
                                {productOrderData?.length > 0 ? (
                                    productOrderData[0]?.orderItem?.map((item, index) => (

                                        <div class="product-row">
                                            <div class="product-no">01</div>
                                            <div class="product-description">
                                                {item.productName}<br />
                                                <small>Categories: {item.productSubCategoryName}, {item.categoryName}</small>
                                            </div>
                                            <div class="price">{item.unitPrice}</div>
                                            <div class="quantity">{item.quantity}</div>
                                            <div class="total">${item.totalAmount}</div>
                                        </div>

                                    ))) : null}


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
                                        <p><strong>SUBTOTAL:</strong> ${productOrderData[0]?.totalAmount}</p>
                                        {/* <p><strong>TAX (10%):</strong> $100.00</p> */}
                                        {/* <p><strong>DISCOUNT:</strong> $0.00</p> */}
                                    </div>
                                </div>
                            </div>

                            <div class="footer text-center mt-4">
                                <p><strong>Total: $1100.00</strong></p>
                            </div>

                            <div class="signature">
                                <p>AUTHORIZED SIGN</p>
                            </div>

                            <div class="footer text-center mt-4">
                                <p>For any questions contact us at:</p>
                                <p><a href="mailto:Help@sparks-hvac.com">Help@sparks-hvac.com</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
):null}

        </div>


    );
};

export default QuatationTemplate;
