import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { endpoints } from "../../_config";
import { post, get } from "../../_services/apiService";
import { toast } from "react-toastify";


const GetQuoteStep = () => {

    const [uploadedImage1, setUploadedImage1] = useState(null); // State for first file upload
    const [uploadedImage2, setUploadedImage2] = useState(null); // State for second file upload
    const [isChecked, setIsChecked] = useState(false);
    const handleImageUpload1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage1(imageUrl); // Set the uploaded image URL for the first input
        }

        const { name, value, type } = event.target;

        if (type === 'file') {
            // For file inputs, store the selected file
            setFormData(prevState => ({
                ...prevState,
                [name]: event.target.files[0], // Handle file uploads
            }));
        }
    };
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const handleImageUpload2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage2(imageUrl); // Set the uploaded image URL for the second input
        }


        const { name, value, type } = event.target;

        if (type === 'file') {
            // For file inputs, store the selected file
            setFormData(prevState => ({
                ...prevState,
                [name]: event.target.files[0], // Handle file uploads
            }));
        }

    };

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5; // Adjust this based on the number of steps
    const fieldsetsRef = useRef([]);
    const navigate = useNavigate(); // To handle navigation to /thankyou page


    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAppointmentSidebar, setShowAppointmentSidebar] = useState(false);
    const [activeTab, setActiveTab] = useState('book-appointment');
    const [serviceTypeData, setServiceTypeData] = useState();
    const [getSizeTypeData, setGetSizeType] = useState();

    const handleNext = () => {
        if (currentStep < totalSteps) {
            animateFieldset(currentStep - 1, currentStep, true);
            setCurrentStep(currentStep + 1);
        } else if (currentStep === totalSteps) {


            onQuotation();
            // Redirect to /thankyou when at the last step
            // Trigger the redirect when the user reaches step 4


        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            animateFieldset(currentStep - 1, currentStep - 2, false);
            setCurrentStep(currentStep - 1);
        }

    };

    const animateFieldset = (fromIndex, toIndex, isNext) => {
        const fromFieldset = fieldsetsRef.current[fromIndex];
        const toFieldset = fieldsetsRef.current[toIndex];

        if (!fromFieldset || !toFieldset) return;

        fromFieldset.style.opacity = 0;
        setTimeout(() => {
            fromFieldset.style.display = "none";
            toFieldset.style.display = "block";
            toFieldset.style.opacity = 1;
        }, 400);
    };

    const getProgressWidth = () => {
        return `${(currentStep / totalSteps) * 100}%`;
    };

    const [formData, setFormData] = useState({
        quotationId: 0,
        firstName: '',
        lastName: '',
        emailId: '',
        contactNo: "",
        referralSource: "",
        additionalMsg: "",
        serviceId: 0,
        streetAddress: '',
        modelNumber: '',
        sizeTypeId: 0,
        productDetail: '',
        state: "",
        isActive: true,
        createdBy: 0,
        aboveGroundLevel: '',
        preferredDay1: '',
        time1: '',
        preferredDay2: '',
        time2: '',
        serialImagePath: '',
        productPath: '',
        houseStatusId: 1,
        file: '',
        fullfile: ''

    });

    const getServiceType = async () => {
        try {
            const response = await get(endpoints.GetServiceType)
            console.log(response);
            if (response.isSuccess === 200) {
                setServiceTypeData(response.data);
            } else {
                setError("Failed to fetch Service Type");
            }
        } catch (error) {
            setError("Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    const getSizeType = async () => {
        try {
            const response = await get(endpoints.GetSizeType)
            console.log(response);
            if (response.isSuccess === 200) {
                setGetSizeType(response.data);
            } else {
                setError("Failed to fetch Size Type");
            }
        } catch (error) {
            setError("Please try again later.");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getServiceType();
        getSizeType();
    }, []);

    const handleChange = (e) => {
        const { name, value, type } = e.target;

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
        } else {
            // For other input types (text, date, etc.), update the value
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };


    const onQuotation = async () => {

        if (isChecked) {
            const formDataToSend = new FormData();

            // Append form data fields
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }




            try {
                const response = await post(endpoints.SaveQuatation, formDataToSend);
                if (response.isSuccess === 200) {

                    toast.success("Quotation submit successfully");
                    onReset();

                    setTimeout(() => {
                        navigate("/thank-you");
                    }, 2000);
                } else {
                    toast.error("Failed to submit form data");
                }
            } catch (error) {
                toast.error("Please try again later.");
            } finally {

            }
        } else {
            toast.warning("Please check terms & condition");

        }
    };


    const onReset = () => {
        setFormData({
            quotationId: 0,
            firstName: '',
            lastName: '',
            emailId: '',
            contactNo: "",
            referralSource: "",
            additionalMsg: "",
            serviceId: 0,
            streetAddress: '',
            modelNumber: '',
            sizeTypeId: 0,
            productDetail: '',
            state: "",
            isActive: true,
            createdBy: 0,
            aboveGroundLevel: '',
            preferredDay1: '',
            time1: '',
            preferredDay2: '',
            time2: '',
            serialImagePath: '',
            productPath: '',
            houseStatusId: 1,
            file: '',
            fullfile: ''

        });
    }

    return (
        <section className="get_quote_wepper">
            <div className="card" style={{ backgroundImage: "url('images/step1.png')" }}>
                <form id="msform" onSubmit={onQuotation} >
                    {/* Step 1 */}
                    <fieldset
                        ref={(el) => (fieldsetsRef.current[0] = el)}
                        style={{ display: currentStep === 1 ? "block" : "none" }}
                    >
                        <div className="form-card">
                            <div className="logo_currnt">
                                <img src="images/logo-white-text.png" alt="" />
                            </div>
                            <h2 id="heading">Enter your current address</h2>
                            <p className="step_first">
                                The first step in receiving your detailed quote is telling us where we are installing.
                            </p>
                            <div className="form-group email_wepper email_wepper_Address placeholder_color_chnge">
                                <label className="fieldlabels">
                                    Enter Your Address <span>|</span>
                                </label>

                                <input type="text" name="streetAddress" id="streetAddress" className="form-control" placeholder="Denver W Pkwy, Golden, CO 80401" required value={formData.streetAddress} onChange={handleChange} />



                            </div>
                            <div className="example_wepper">
                                <span>
                                    Information that you share is always confidential and only used for the purpose of obtaining a quote.
                                </span>
                            </div>
                        </div>
                    </fieldset>

                    {/* Step 2 */}
                    <fieldset
                        ref={(el) => (fieldsetsRef.current[1] = el)}
                        style={{ display: currentStep === 2 ? "block" : "none" }}
                    >
                        <div className="form-card">
                            <h2 id="heading">Tell us what you need help with</h2>
                            <p>
                                Everyone's system is different so please explain what you are experiencing, and we will do our best to help.
                            </p>
                            <div className="form-group email_wepper what_going">

                                <textarea name="additionalMsg" id="additionalMsg" rows="4" data-name="Message" placeholder="What's going on?" value={formData.additionalMsg} onChange={handleChange}
                                    className="form-control" required=""></textarea>

                            </div>
                            <div className="example_wepper sure_whate">
                                <p>Example: My Furnace is not blowing warm air</p>
                                <span>Example: Our system is 24 years old and need a quote to replace</span>
                                <h6>Information that you share is always confidential and only used for the
                                    purpose of obtaining a quote.</h6>
                            </div>
                        </div>
                    </fieldset>

                    {/* Step 3 */}
                    <fieldset
                        style={{ display: currentStep === 3 ? "block" : "none" }}
                    >
                        <div className="form-card">
                            <h2 id="heading">Share the details of your HVAC system</h2>
                            <div className="row mt-5">
                                {/* First File Upload */}
                                <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="what_going_content file_uplode_quote">
                                        <label className="filelabel">
                                            <img
                                                src={uploadedImage1 || "images/album.svg"} // Show uploaded image or default icon
                                                alt="Uploaded Preview 1"
                                                style={{ width: "50px", height: "50px" }} // Set width and height
                                            />
                                            <span className="title">
                                                Upload label photo
                                            </span>
                                            <p>of my outdoor HVAC label</p>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="file"
                                                name="file"
                                                accept="image/png, image/jpeg"
                                                onChange={handleImageUpload1} // Handle first file upload
                                            />
                                        </label>
                                    </div>
                                </div>

                                {/* Second File Upload */}
                                <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="what_going_content file_uplode_quote">
                                        <label className="filelabel">
                                            <img
                                                src={uploadedImage2 || "images/phone.svg"} // Show uploaded image or default icon
                                                alt="Uploaded Preview 2"
                                                style={{ width: "50px", height: "50px" }} // Set width and height
                                            />
                                            <span className="title">
                                                Take label photo with phone
                                            </span>
                                            <p>of my outdoor HVAC label</p>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="fullfile"
                                                name="fullfile"
                                                accept="image/png, image/jpeg"
                                                onChange={handleImageUpload2} // Handle second file upload
                                            />
                                        </label>
                                    </div>
                                </div>

                                <p className="your_information">
                                    Your information is kept strictly confidential, never shared with outside parties.
                                </p>
                            </div>
                        </div>
                    </fieldset>


                    {/* Step 4 */}
                    <fieldset
                        ref={(el) => (fieldsetsRef.current[3] = el)}
                        style={{ display: currentStep === 4 ? "block" : "none" }}
                    >
                        <div className="form-card" />
                        <h2 id="heading">Tell us about your current HVAC system for accurate estimates</h2>
                        <p>Information about your outdoor HVAC unit tells us everything we need to know
                            about your entire HVAC system, including detailed info about your indoor units.
                        </p>
                        <div className="row mt-1">
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <div className="send_quote_wepper">

                                    <input type="text" name="modelNumber" id="modelNumber" className="form-control" placeholder="Model Number of outdoor unit" required value={formData.modelNumber} onChange={handleChange} />


                                </div>
                            </div>
                            <div className="or_line">
                                <span>Or</span>
                            </div>
                            <div className="wepper_serive_select row">
                                <div className="col-xxl-6 col-xl-126 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <div className="send_quote_wepper send_quote_wepper_select">
                                        <select name="serviceId" id="serviceId" className="" value={formData.serviceId} onChange={handleChange} required >
                                            <option value="0" className="option">Select Service Type</option>
                                            {serviceTypeData?.map((item, i) => (
                                                <option key={item.serviceId} value={item.serviceId} className="option">{item?.serviceName}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-126 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <div className="send_quote_wepper send_quote_wepper_select">
                                        <select name="sizeTypeId" id="sizeTypeId" className="" value={formData.sizeTypeId} onChange={handleChange} required >
                                            <option value="0" className="option">Select Size Type</option>
                                            {getSizeTypeData?.map((item, i) => (
                                                <option key={item.sizeTypeId} value={item.sizeTypeId} className="option">{item?.typeName}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="send_quote_wepper send_quote_textarea">

                                        <textarea name="productDetail" id="productDetail" rows="7" data-name="Message" placeholder="Other product details" value={formData.productDetail} onChange={handleChange}
                                            className="form-control" required=""></textarea>

                                    </div>
                                </div>
                            </div>
                            <p className="your_information">Information that you share is always confidential
                                and only used for the purpose of obtaining a quote.</p>
                        </div>

                    </fieldset>


                    {/* Step 5 */}
                    <fieldset
                        ref={(el) => (fieldsetsRef.current[4] = el)}
                        style={{ display: currentStep === 5 ? "block" : "none" }}
                    >
                        <div className="form-card">
                            <h2 id="heading">Quote Delivery</h2>
                            <p>
                                Please give us your information so that we will be able to send you our quote.
                            </p>
                            <div className="row mt-2">
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="send_quote_wepper">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            className="form-control"
                                            placeholder="First Name"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="send_quote_wepper">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            className="form-control"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="send_quote_wepper">
                                        <input
                                            type="text"
                                            name="emailId"
                                            id="emailId"
                                            className="form-control"
                                            placeholder="Email Id"
                                            required
                                            value={formData.emailId}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="send_quote_wepper">
                                        <input
                                            type="text"
                                            name="contactNo"
                                            id="contactNo"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            value={formData.contactNo}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="send_quote_wepper">
                                        <input
                                            type="text"
                                            name="referralSource"
                                            id="referralSource"
                                            className="form-control"
                                            placeholder="How did you hear about us?"
                                            value={formData.referralSource}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="checkbox_once">
                                    <label >
                                        <input
                                            type="checkbox"
                                            name="agree"
                                            id="agree"
                                            required
                                            className="me-2"
                                            onChange={handleCheckboxChange} // Add this to handle checkbox state
                                        />

                                    </label>
                                    <p className="your_information">  Once you click submit you <span>Agree</span> to receive information and communication from us about your quote and as always your information is kept private.</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                </form>

                {/* Progress Bar */}
                <div className="progress">
                    <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: getProgressWidth() }}
                    ></div>
                </div>

                {/* Dynamic Step Display */}
                <div className="container">
                    <div className="row setp_wepper">
                        <div className="col-lg-6 col-sm-6 col-12">
                            {/* Conditionally render "Previous Page" button */}
                            {currentStep > 1 && (
                                <div className="previous_wepper">
                                    <span onClick={handlePrevious}>
                                        <img src="images/preview-icon.png" alt="" /> Previous Page
                                    </span>
                                    <a href="#" className="fs-title">Connect with us</a>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12 ">
                            <div className="steps">
                                Step {currentStep} {/* Dynamic step number */}
                                <p className="next action-button" onClick={handleNext}>
                                    {currentStep === 5 ? "Submit" : "Continue"}
                                    {currentStep !== 5 && <img src="images/right-arrow.svg" alt="" />}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetQuoteStep;
