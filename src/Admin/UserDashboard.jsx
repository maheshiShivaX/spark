import AdminLayout from "./AdminLayout";

const UserDashboard = () => {
    return (

        <AdminLayout  >


            <div className="dashboard_add_quotation_wepper">

                <div className="add_quotation_color_sec">
                    <div className="recent_quote_hedding">
                        <h4>Recent Quote</h4>
                        <a href="#">View All</a>
                    </div>
                    <div className="Add_quotation_wepper_main">
                        <div className="Add_quotation_wepper">
                            <div className="Add_quotation_content">
                                <div className="hedding_Add_quotation">
                                    <h2>E Lite® Pads – 32 x32– 3 inch</h2>
                                    <p>Categories: AC Pads, Accessories</p>
                                </div>
                                <div className="Add_quotation_img_data">
                                    <img src="images/add-pro.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="remove_wepper_main">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                                    <div className="remove_wepper remove_wepper_line">
                                        <h4>Remove Item</h4>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                                    <div className="remove_wepper">
                                        <div className="select_wepper qty_add">
                                            <p>Qty :</p>
                                            <select id="cars">
                                                <option value="2" selected> 2</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Add_quotation_wepper_main">
                        <div className="Add_quotation_wepper">
                            <div className="Add_quotation_content">
                                <div className="hedding_Add_quotation">
                                    <h2>E Lite® Pads – 32 x32– 3 inch</h2>
                                    <p>Categories: AC Pads, Accessories</p>
                                </div>
                                <div className="Add_quotation_img_data">
                                    <img src="images/add-pro.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="remove_wepper_main">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-6 col-12 p-0">
                                    <div className="remove_wepper remove_wepper_line">
                                        <h4>Remove Item</h4>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-6 col-12 p-0">
                                    <div className="remove_wepper">
                                        <div className="select_wepper qty_add">
                                            <p>Qty :</p>
                                            <select id="cars">
                                                <option value="2" selected> 2</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Add_quotation_wepper_main">
                        <div className="Add_quotation_wepper">
                            <div className="Add_quotation_content">
                                <div className="hedding_Add_quotation">
                                    <h2>E Lite® Pads – 32 x32– 3 inch</h2>
                                    <p>Categories: AC Pads, Accessories</p>
                                </div>
                                <div className="Add_quotation_img_data">
                                    <img src="images/add-pro.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="remove_wepper_main">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-6 col-12 p-0">
                                    <div className="remove_wepper remove_wepper_line">
                                        <h4>Remove Item</h4>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-6 col-12 p-0">
                                    <div className="remove_wepper">
                                        <div className="select_wepper qty_add">
                                            <p>Qty :</p>
                                            <select id="cars">
                                                <option value="2" selected> 2</option>
                                                <option value="1"> 1</option>
                                                <option value="2"> 2</option>
                                                <option value="3"> 3</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard_btn_wepper">
                        <a href="#">Add More Products</a>
                        <a href="#">Edit Recent Quote</a>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default UserDashboard;