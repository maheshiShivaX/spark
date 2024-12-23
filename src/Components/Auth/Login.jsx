import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { endpoints } from "../../_config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post } from '../../_services/apiService';
import { useDispatch, useSelector } from "react-redux";
import { get_cart_Data, saveorder } from "../../redux/action";

const Login = () => {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginDetailId, setLoginDetailId] = useState();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const reduxCartData = useSelector((state) => state.cartReducer.cart);
    const loginId = localStorage.getItem("loginId");

   


    console.log('cartdata1', reduxCartData);


    useEffect(() => {
        dispatch(get_cart_Data());
    }, [dispatch]);


    const handleLogin = async () => {
        const payload = { username, password };

        try {

            const response = await post(endpoints.GetLoginDetails, payload)
            console.log("Response:", response); // Log response for debugging
            if (response.isSuccess === 200) {

                localStorage.setItem("loginId", response.data[0].loginId);


                
                localStorage.setItem("authToken", response.token);

                const cartstatus = localStorage.getItem('CartData');
               // dispatch(saveorder(formData));
          
                if (cartstatus == 'Y' ) {

                    const cartItems = reduxCartData.map(item => ({
                        productId: item.productId || 0,
                        quantity: item.quantity || 1,
                        unitPrice: item.unitPrice || 0,
                        totalAmount: item.unitPrice ? item.unitPrice * item.quantity : 0,
                        loginid:response.data[0].loginId
                    }));
    


                    const responsecart = await post(endpoints.SaveProductOrder, cartItems)
                    if (responsecart.isSuccess === 200) {
                        localStorage.setItem("CartData", '');
                    }
                    localStorage.setItem("CartData", '');
                }


                // toast.success("Login successful!", {
                //     position: "top-right",
                //     autoClose: 3000,
                // });


                localStorage.setItem("roleId", response.data[0].roleId);
                if (response.data[0].roleId == 1) {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/admin/userdashboard");
                }

            } else {
                toast.error(response.message || "Login failed. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (err) {
            console.error("Error occurred during login:", err); // Log detailed error
            toast.error(err.response?.message || "An error occurred. Please try again.", {
                position: "top-right",
                autoClose: 3000,
            });
        }


    };





    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 p-0">
                            <div className="login_wepper">
                                <div className="login_hedding">
                                    <h2>Welcome to your Sparks Heating & Air Customer Portal!</h2>
                                    <ul>
                                        <li>Track service requests</li>
                                        <li>View your service history</li>
                                        <li>Manage appointments</li>
                                        <li>And more!</li>
                                    </ul>
                                </div>
                                <div>
                                    <img src="images/login_pic.png" alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 p-0">
                            <div className="login_text_wepper only_login_hight">
                                <h3>Login</h3>
                                <p>For the latest trends, exciting offers, and more!</p>
                                <div>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleLogin();
                                        }}
                                    >
                                        <div className="input-container">
                                            <img src="images/user-icon.svg" alt="" className="icon" />
                                            <input
                                                type="email"
                                                placeholder="Email ID"
                                                value={username}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="input-container">
                                            <img src="images/paasword-icon.svg" alt="" className="icon" />
                                            <input
                                                type="password"
                                                placeholder="Enter Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="login_now_btn">
                                            <button type="submit" className="all_sumbit_button" >Login Now</button>
                                            <div className="forgot_wepper">
                                                <Link to="/forgot-password">Forgot Password</Link>
                                                <p>
                                                    New User? <Link to="/signup">Create Account</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
