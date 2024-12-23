import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import "../Admin/admin.css";
import { endpoints, Image_BASE_URL } from "../_config";
import { get, post } from "../_services/apiService";
import { toast } from "react-toastify";

const ProductImages = (props) => {


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState(""); // Add state for search term

    const [productdata, setData] = useState();
    const [productImageData, setProductImageData] = useState();
    const [specificationsData, setSpecificationsData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const productId = props.id;
    const [isChecked, setIsChecked] = useState(false);


    const GetProductImageByProductId = async (id) => {
        try {
            const response = await get(endpoints.GetProductImageByProductId + "?pProductId=" + id)
            console.log('datar', response);
            if (response.isSuccess === 200) {
                setProductImageData(response.data);
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
        GetProductImageByProductId(productId);

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

    const [formData, setFormData] = useState({
        productImageId: 0,
        productId: productId,
        imgPath: 'asda',
        isHeader: false,
        file: '',
        isDisplay: true,
        isActive: true,
        createdBy: 0,
    });




    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'radio') {
            // For radio buttons, simply set the selected value
            setFormData(prevState => ({
                ...prevState,
                [name]: value, // Store the selected value for the radio button group
            }));
        } else if (type === 'file') {
            // For file inputs, store the selected file
            setFormData(prevState => ({
                ...prevState,
                [name]: e.target.files[0], // Handle file uploads
            }));
        }
        else if (type === 'checkbox') {
            // For file inputs, store the selected file
            setFormData(prevState => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
        else {
            // For other input types (text, date, etc.), update the value
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };


    const onSave = async (e) => {
        e.preventDefault();
        try {

            const formDataToSend = new FormData();

            // Append form data fields
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            const response = await post(endpoints.SaveProductImage, formDataToSend);
            if (response.isSuccess === 200) {

                toast.success("Product Image save successfully");
                onReset();
                GetProductImageByProductId(productId);
                modelToggle('modeldata', false);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error("Please try again later.");
        } finally {

        }
    };

    const onReset = () => {
        setFormData({
            productImageId: 0,
            productId: productId,
            imgPath: 'asda',
            isHeader: false,
            file: '',
            isDisplay: true,
            isActive: true,
            createdBy: 0,

        });
    }

    const onEdit = (item) => {
        setFormData({
            productImageId: item.productImageId,
            productId: item.productId,
            imgPath: item.imgPath,
            file: item.file,
            isHeader: item.isHeader,
            isDisplay: item.isDisplay,
            isActive: item.isActive,
            createdBy: item.createdBy,


        });

        modelToggle('modeldata', true);
    }



    const onDelete = async (id) => {


        const isConfirmed = window.confirm("Are you sure you want to delete this record?");

        if (!isConfirmed) {
            return;
        }
        const response = await get(endpoints.DeleteProductImageById + "?pProductImageId=" + id)
        if (response.isSuccess == 200) {
            GetProductImageByProductId(productId);
        }
    }

    const modelToggle = (modelname, status) => {
        // Get the modal element by ID
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
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };


    return (
        <div>

            <div className="product_wepper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="product_hedding">
                                <h2>Product Image</h2>
                            </div>
                        </div>
                        <div className="col-lg-7">
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
                                <div className="col-lg-4 add_subcategory">

                                    <button type="button" className="btn btn-primary" onClick={() => modelToggle('modeldata', true)} >
                                        + Add Product Image     </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="row mt-3">

                        {productImageData?.length > 0 ? (
                            productImageData?.map((item, index) => (
                                <div className="image_wrapper col-3">
                                    <div className="image_icon">
                                        <span onClick={() => onEdit(item)} >
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
                                        <span onClick={() => onDelete(item.productImageId)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
                                                <path
                                                    d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"
                                                    fill="#FF0000"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <img
                                        src={`${Image_BASE_URL}${item.imgPath}`}
                                        alt="Product"
                                        style={{ width: "150px", height: "150px" }}
                                    />

                                </div>

                            ))
                        ) : (null
                        )}



                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="modeldata" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Product Specification</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={onSave}>



                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="uplod_data">
                                        <p>Upload  Image</p>
                                        <label className="filelabel">Upload Image

                                            <input type="file" className="form-control" id="file" name="file" accept="image/png, image/jpeg" onChange={handleChange} />
                                        </label>
                                    </div>

                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="send_quote_wepper">
                                        <input type="checkbox" name="isHeader" id="isHeader" value={formData.isHeader} onChange={handleChange} /> Is Header Image
                                    </div>
                                </div>


                                <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Reset</button>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductImages;