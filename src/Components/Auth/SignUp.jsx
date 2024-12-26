import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { API_BASE_URL, endpoints } from "../../_config";
import { post } from "../../_services/apiService";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const dispatch = useDispatch();
    const reduxCartData = useSelector((state) => state.cartReducer.cart);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let formErrors = {};

        if (!formData.firstName) formErrors.firstName = "First Name is required.";
        if (!formData.lastName) formErrors.lastName = "Last Name is required.";
        if (!formData.email) formErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Invalid email address.";
        if (!formData.phoneNumber) formErrors.phoneNumber = "Phone Number is required.";
        if (!formData.password) formErrors.password = "Password is required.";
        if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = "Passwords do not match.";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        const payload = {
            loginId: 0,
            firstName: formData.firstName,
            lastName: formData.lastName,
            emailId: formData.email,
            mobileNo: formData.phoneNumber,
            roleId: 2, // Example value, replace with actual
            password: formData.password
        };

        try {
            const response = await post(endpoints.SaveLoginDetail, payload)

            if (response.isSuccess == 200) {


                console.log('res', response.data.loginId)
                toast.success("User created successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                });

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    password: "",
                    confirmPassword: "",
                });

                localStorage.setItem("loginId", response.data.loginId);



                localStorage.setItem("authToken", response.token);

                const cartstatus = localStorage.getItem('CartData');
                // dispatch(saveorder(formData));

                if (cartstatus == 'Y') {

                    const cartItems = reduxCartData.map(item => ({
                        productId: item.productId || 0,
                        quantity: item.quantity || 1,
                        unitPrice: item.unitPrice || 0,
                        totalAmount: item.unitPrice ? item.unitPrice * item.quantity : 0,
                        loginid: response.data.loginId
                    }));


                    console.log('cartitems', cartItems);
                    if (cartItems.length > 0) {
                        const responsecart = await post(endpoints.SaveProductOrder, cartItems)
                        if (responsecart.isSuccess === 200) {
                            localStorage.setItem("CartData", '');
                            localStorage.setItem("cartstatus", '');
                        }
                        localStorage.setItem("CartData", '');
                        localStorage.setItem("cartstatus", '');
                    }
                    localStorage.setItem("cartstatus", '');
                }

                localStorage.setItem("roleId", response.data.roleId);
                if (response.data.roleId == 1) {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/admin/userdashboard");
                }


                // navigate("/login");
            } else {
                toast.error(response.message || "Failed to create user.");
            }
        } catch (error) {
            toast.error("An error occurred while creating the user.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Header />
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 p-0">
                            <div className="login_wepper">
                                <div className="login_hedding sign_up_hedding">
                                    <h2>Book an Appointment Now</h2>
                                    <p>
                                        We’re a tech company bringing a breath of fresh air to HVAC, ensuring
                                        homeowners get the trusted help they deserve
                                    </p>
                                </div>
                                <div className="login_banner_img_data">
                                    <img src="images/login_pic.png" alt="Login Visual" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 p-0">
                            <div className="login_text_wepper signup_set_only">
                                <h3>Sign up</h3>
                                <p>for Latest trends, exciting offers and everything</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-container">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name*"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                        {errors.firstName && <small>{errors.firstName}</small>}
                                    </div>
                                    <div className="input-container">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name*"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                        {errors.lastName && <small>{errors.lastName}</small>}
                                    </div>
                                    <div className="input-container">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email ID"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <small>{errors.email}</small>}
                                    </div>
                                    <div className="input-container">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Choose New Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <small>{errors.password}</small>}
                                    </div>
                                    <div className="input-container">
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
                                    </div>
                                    <div className="input-container">
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                        />
                                        {errors.phoneNumber && <small>{errors.phoneNumber}</small>}
                                    </div>
                                    <div className="login_now_btn">
                                        <button type="submit" className="all_sumbit_button" disabled={isSubmitting}>
                                            {isSubmitting ? "Signing Up..." : "Sign Up"}
                                        </button>
                                        <div className="forgot_wepper">
                                            <p>
                                                Already have an account? <Link to="/login">Login Now</Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default SignUp;
