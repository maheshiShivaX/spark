import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL, endpoints } from "../../_config";

const ForgotPassword = () => {
  const [input, setInput] = useState(""); // Email/Phone number input
  const [otp, setOtp] = useState(""); // OTP input
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const [step, setStep] = useState(1); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Send OTP to mobile/email
    if (step === 1) {
      const isMobile = /^[0-9]{10}$/.test(input);
      const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input);

      if (!isEmail && !isMobile) {
        toast.error("Please enter a valid email or 10-digit mobile number.", {
            position: "top-right",
            autoClose: 3000,
        });
        
        return;
      }

      const requestData = isMobile
        ? { mobileNumber: input }
        : { email: input };

      try {
        
        setIsLoading(true);
        const response = await axios.post(`${API_BASE_URL}${endpoints?.forgotPassowrd}`, requestData);

        if (response.data.isSuccess) {
          toast.success(response.data.message , {
            position: "top-right",
            autoClose: 3000,
        }); // Success toast
          setStep(2); // Move to OTP verification step
        } else {
          toast.error(response.data.message); // Error toast
        }
      } catch (error) {
        toast.error("An error occurred while sending OTP.", {
            position: "top-right",
            autoClose: 3000,
        });
      } finally {
        setIsLoading(false);
      }
    }

    // Step 2: Verify OTP
    if (step === 2) {
      if (!otp) {
        toast.error("Please enter OTP.", {
            position: "top-right",
            autoClose: 3000,
        });
        return;
      }

      const isMobile = /^[0-9]{10}$/.test(input); // Assuming input is still mobile or email
      const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input);

      const verifyData = isMobile
        ? { mobileNumber: input, otp: otp }
        : { email: input, otp: otp };

      try {
        setIsLoading(true);
        const response = await axios.post(`${API_BASE_URL}${endpoints?.verifyOtp}`, verifyData);

        if (response.data.isSuccess) {
          
          toast.success("OTP verified successfully.", {
            position: "top-right",
            autoClose: 3000,
        });
        navigate("/reset-password");
        } else {
          toast.error(response.data.message); // Error toast
        }
      } catch (error) {
        toast.error("An error occurred while verifying OTP.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <Header />
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 p-0">
              <div className="login_wepper">
                <div className="login_hedding sign_up_hedding">
                  <h2>Book an Appointment Now</h2>
                  <p>We’re a tech company bringing a breath of fresh air to HVAC, ensuring homeowners get the trusted help they deserve</p>
                </div>
                <div>
                  <img src="images/login_pic.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 p-0">
              <div className="login_text_wepper forgot_password_wepper">
                <h3>Forgot Password</h3>
                <p>for Latest trends, exciting offers and everything</p>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="input-container">
                      <img src="images/Mail-icon.svg" alt="" className="icon" />
                      <input
                        type="text"
                        placeholder="Enter Email/Phone Number"
                        value={input}
                        onChange={handleChange}
                      />
                      <img src="images/Checkmark-icon.svg" alt="" className="checkmark_icon" />
                    </div>

                    {/* Show OTP field only after sending OTP */}
                    {step === 2 && (
                      <div className="input-container">
                        <img src="images/paasword-icon.svg" alt="" className="icon" />
                        <input
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={handleOtpChange}
                        />
                      </div>
                    )}

                    <div className="login_now_btn">
                      <input
                        type="submit"
                        value={isLoading ? "Processing..." : step === 1 ? "Continue" : "Verify OTP"}
                        disabled={isLoading}
                      />
                      <div className="forgot_wepper">
                        <p>New User ? <Link to="/signup">Create Account</Link></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
