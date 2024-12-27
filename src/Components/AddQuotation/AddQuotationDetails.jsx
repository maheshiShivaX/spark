import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { get_cart_Data } from '../../redux/action';
import { Image_BASE_URL } from '../../_config';

const AddQuotationDetails = () => {
    const [showAppointmentSidebar, setShowAppointmentSidebar] = useState(false);
    const [activeTab, setActiveTab] = useState('book-appointment');
    const [buyFormData, setBuyFormData] = useState([]);
    const loginId = localStorage.getItem("loginId");

    const cartData = useSelector((state) => state.cartReducer.cart);
    const reduxCartData = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(get_cart_Data());
    }, [dispatch])


    useEffect(() => {

     
            const cartItems = reduxCartData.map(item => ({
                cartItemId: item.cartItemId || 0,
                productId: item.productId || 0,
                loginId: loginId ? Number(loginId) : 0,
                buyStatus: item.buyStatus || 0,
                quantity: item.quantity || 1,
                unitPrice: item.unitPrice || 0,
                totalAmount: item.unitPrice ? item.unitPrice * item.quantity : 0
            }));
            console.log(cartItems);
            setBuyFormData(cartItems);
        
    }, [loginId, reduxCartData])

    const filteredData = reduxCartData.filter(row => row.quantity != null && row.quantity > 0);
    console.log('filteredData', filteredData);


    const onSubmitQuotation = () => {

        localStorage.setItem("CartData", "Y");
        navigate("/login");
    }

    return (

        <div>

            {/* Book Appointment End */}
            <section className="same_space Add_quotation_section">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className="Add_quotation_left_imgdata_Weeper">
                                <img src="images/mobile-bg.png" alt="" />
                                <div className="book_content">
                                    <h2>Book Your Service Provider Now </h2>
                                    <p>We’re a tech company bringing a breath of fresh air to HVAC, ensuring homeowners get the
                                        trusted help they deserve</p>
                                    <h6 onClick={() => setShowAppointmentSidebar(true)}>Book Now <img src="images/right-arrow.svg" alt="" /></h6>
                                </div>
                                {/* <!-- <div className="product_model">
                                    <p>Product Model :  32×32</p>
                                    <p>Product Code: EL- 3232-3</p>
                                    <span>Specifications ></span>
                                </div> --> */}
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                            <div className="add_quotation_color_sec">

                                {filteredData && filteredData.length > 0 ? (
                                    filteredData?.map((item, i) => {
                                        const buyData = buyFormData.find(data => data.cartItemId === item.cartItemId);
                                        return (
                                            <div key={i}>
                                                <div className="Add_quotation_wepper_main">
                                                    <div className="Add_quotation_wepper">
                                                        <div className="Add_quotation_content">
                                                            <div className="select_wepper">
                                                                {item?.displayName}
                                                                <p>Categories: {item?.productSubCategoryName}, {item?.categoryName}</p>
                                                            </div>
                                                            <div className="Add_quotation_img_data">
                                                                {/* <img src="images/add-pro.png" alt="" /> */}
                                                                {item?.productImageDtos && item?.productImageDtos.length > 0 ?
                                                                    item?.productImageDtos.map((image, j) => (
                                                                        image.isHeader ?
                                                                            <img
                                                                                //   onClick={() => onProductDetail(item)}
                                                                                style={{ cursor: 'pointer' }}
                                                                                key={j}
                                                                                src={`${Image_BASE_URL}${image.imgPath}`}
                                                                                alt={`Product Image ${j + 1}`}
                                                                            /> : null
                                                                    ))
                                                                    : ''
                                                                }
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
                                                                        <p>Qty :</p> {item.quantity}
                                                                        {/* <select id="cars">
                                                                            <option > 2</option>
                                                                            <option value="1"> 1</option>
                                                                            <option value="2"> 2</option>
                                                                            <option value="3"> 3</option>
                                                                        </select> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })) : null}


                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <img src="images/taz.svg" alt="" />
                                                <span> Get Club Membership</span>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Cooling - 18 point Air Conditioning clean/safety check</li>
                                                    <li>- Heating - 16 point Furnace clean/safety check</li>
                                                    <li>- Filter check/replace</li>
                                                    <li>- 2 clean and safety checks per year</li>
                                                    <li>- Spring and Fall</li>
                                                    <li>- A year supply of filters</li>
                                                    <li>- (12) - Regular business hours standard service fees are eliminated.
                                                    </li>
                                                    <li>Round</li>
                                                    <li>-the-clock priority assistance for club members, all week.</li>
                                                    <li>- Club members enjoy around 15% discount on standard repair and service
                                                        rates.</li>
                                                    <li>- Exclusive, undisclosed hotline for priority booking.</li>
                                                    <li>- Year-round exclusive deals for club members. Waived first year when
                                                        replacement of system is made then billed annually thereafter until
                                                        Customer
                                                        cancels. Invoice will be sent Customer can cancel at anytime. 30 day
                                                        notice
                                                        required.</li>
                                                </ul>
                                            </div>
                                           
                                        </div>
                                        <div className="add_quotation_btn accordion-body">
                                                <a onClick={onSubmitQuotation} >Get Instant Quote Now </a>
                                            </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


        </div>


    )
}

export default AddQuotationDetails;