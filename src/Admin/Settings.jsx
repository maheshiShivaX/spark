import AdminLayout from "./AdminLayout";

const Settings = () => {
    return (
        <div>
            <AdminLayout>
                <div className="settings_profile_weepr">
                    <div className="settings_profile_inner">
                        <div className="profile-card">
                            <div className="profile-image" id="profileImage">
                                <img src="images/setting_pi.png" alt="Profile Picture" id="profilePic" />
                                <label for="fileInput" className="edit-icon">
                                    <img src="images/edit-img.png" alt="Edit Icon" />
                                </label>
                            </div>
                            <input type="file" id="fileInput" accept="image/*" />
                            <div className="profile-name">Jack Adams</div>
                            <div className="profile-role">Admin</div>
                        </div>
                    </div>
                    <div className="personal_Information_wepper">
                        <div className="personal_Information_hedding">
                            <h3>Personal Information</h3>
                            <a href="#"><img src="images/pencil.png" alt="" />Edit</a>
                        </div>

                        <div className="row">
                            <div className="col-lg-8 user_detals_main">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="user_detals">
                                            <p>First Name</p>
                                            <p><strong>Jack</strong></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="user_detals">
                                            <p>Last Name</p>
                                            <p><strong>Adams</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="user_detals">
                                            <p>Email Address</p>
                                            <p><strong>jakeadams123@gmail.com</strong></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="user_detals">
                                            <p>Phone</p>
                                            <p><strong>(213) 555-1234</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="user_about">
                            <p><strong>About</strong></p>
                            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                        </div>
                    </div>
                    <div className="personal_Information_wepper Address_details_dasbord">
                        <div className="personal_Information_hedding">
                            <h3>Address Details</h3>
                            <a href="#"><img src="images/pencil.png" alt="" />Edit</a>
                        </div>

                        <div className="row">
                            <div className="col-lg-8 user_detals_main">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="user_detals">
                                            <p>Country</p>
                                            <p><strong>United States of America</strong></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="user_detals">
                                            <p>City/State</p>
                                            <p><strong>California, USA</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="user_detals">
                                            <p>Postal Code</p>
                                            <p><strong>Postal Code</strong></p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="user_detals">
                                            <p>Tax ID</p>
                                            <p><strong>AS564178969</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </div>
    )
}

export default Settings;