import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../Shared/Header";
import { API_BASE_URL, endpoints } from "../../_config";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    const requestData = {
      newPassword: newPassword,
      // Include the relevant user identifier here
      mobileNumber: "string", // Replace with actual value
      email: "string",       // Replace with actual value
      userId: 0,             // Replace with actual value
      userName: "string",    // Replace with actual value
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}${endpoints?.resetPassword}`,
        requestData
      );

      if (response.data.isSuccess) {
        toast.success("Password reset successful. Redirecting to login...", {
          position: "top-right",
          autoClose: 3000,
        });
        navigate("/login");
      } else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred while resetting the password.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
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
                  <p>
                    We’re a tech company bringing a breath of fresh air to HVAC,
                    ensuring homeowners get the trusted help they deserve
                  </p>
                </div>
                <div>
                  <img
                    src="images/login_pic.png"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 p-0">
              <div className="login_text_wepper forgot_password_wepper">
                <h3>Reset Password</h3>
                <p>for Latest trends, exciting offers and everything</p>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="input-container">
                      <img
                        src="images/paasword-icon.svg"
                        alt=""
                        className="icon"
                      />
                      <input
                        type="password"
                        placeholder="Create New Password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                      />
                      <img
                        src="images/Checkmark-icon.svg"
                        alt=""
                        className="checkmark_icon"
                      />
                    </div>
                    <div className="input-container">
                      <img
                        src="images/paasword-icon.svg"
                        alt=""
                        className="icon"
                      />
                      <input
                        type="password"
                        placeholder="Confirm Your Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </div>
                    <div className="login_now_btn">
                      <input
                        type="submit"
                        value={isLoading ? "Processing..." : "Submit"}
                        disabled={isLoading}
                      />
                      <div className="forgot_wepper">
                        <p>
                          Already have account?{" "}
                          <a href="/login">Login Now</a>
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

export default ResetPassword;
