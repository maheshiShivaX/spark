import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import ProductImages from "./ProductImages";
import ProductSpecification from "./ProductSpecification";
import { Link, useParams } from "react-router-dom";
import { get } from "../_services/apiService";
import { endpoints } from "../_config";
// import "./Tabs.css";

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState("details");
    const [productData, setProductData] = useState();
    const params = useParams();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const productId = params.id;
    //  alert(productId);

    const GetProductDetailById = async (productId) => {
        try {
            const response = await get(endpoints.GetProductDetailById + "?pProductDetailId=" + productId)
            console.log(response);
            if (response.isSuccess === 200) {
                setProductData(response.data);
            } else {
                setError("Failed to fetch Product Data");
            }
        } catch (error) {
            setError("Please try again later.");
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        GetProductDetailById(productId);

    }, []);


    const renderContent = () => {
        switch (activeTab) {

            case "details":
                return (
                    <div className="product-details">
                        <div className="product-card">
                            {productData?.length > 0 ? (
                                <div className="product-info">
                                    <div>
                                        <strong>Category Name:</strong> {productData[0]?.categoryName}
                                    </div>
                                    <div>
                                        <strong>SubCategory Name:</strong> {productData[0]?.productSubCategoryName}
                                    </div>
                                    <div>
                                        <strong>Product Name:</strong>  {productData[0]?.productName}
                                    </div>
                                    <div>
                                        <strong>Display Name:</strong>  {productData[0]?.displayName}
                                    </div>
                                    <div>
                                        <strong>Description:</strong>  {productData[0]?.displayDesc}
                                    </div>
                                    <div>
                                        <strong>Model Name:</strong>  {productData[0]?.modelName}
                                    </div>
                                    <div>
                                        <strong>Product Code:</strong>  {productData[0]?.productCode}
                                    </div>
                                    <div>
                                        <strong>Sale Price:</strong>  {productData[0]?.salePrice}
                                    </div>
                                    <div>
                                        <strong>Inculde Item:</strong>{productData[0]?.inculdeItem}
                                    </div>
                                </div>) : null}
                            <div className="edit-icon">
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>
                );
            case "images":
                return <div>
                    <ProductImages id={productId} ></ProductImages>
                </div>;
            case "specifications":
                return <div>
                    <ProductSpecification id={productId} ></ProductSpecification>
                </div>;
            default:
                return null;
        }
    };

    return (
        <div>
            <AdminLayout>

                <div className="tabs-container">


                    {/* Tabs */}
                    <div className="tabs">
                        <div style={{ lineHeight: '3' }}>
                            <div className="back_color"> <Link to={'/admin/product'} >   {`<< Back`} </Link> </div>
                        </div>
                        <button
                            className={`tab ${activeTab === "details" ? "active" : ""}`}
                            onClick={() => setActiveTab("details")}
                        >
                            Product Details
                        </button>
                        <button
                            className={`tab ${activeTab === "images" ? "active" : ""}`}
                            onClick={() => setActiveTab("images")}
                        >
                            Product Images
                        </button>
                        <button
                            className={`tab ${activeTab === "specifications" ? "active" : ""}`}
                            onClick={() => setActiveTab("specifications")}
                        >
                            Product Specification Data
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content">{renderContent()}</div>
                </div>
            </AdminLayout>
        </div>
    );
};

export default ProductDetail;
