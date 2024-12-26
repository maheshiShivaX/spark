import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { endpoints, Image_BASE_URL } from '../../_config';
import { get } from '../../_services/apiService';
import ReactImageMagnify from 'react-image-magnify';
const ProductDetails = () => {
    const [showClubMembership, setShowClubMembership] = useState(false);


    const [productData, setProductData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(1);
    const params=useParams();
console.log(params);
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
    console.log('productdata', productData);


    useEffect(() => {
        GetProductDetailById(params.id);
    }, []);

    const handleVerticalClick = (index) => {
        setCurrentIndex(index);
    };


    return (
        <div>

            {/* Club Member Ship */}

            <section className={`club_membership_show ${showClubMembership ? 'open' : ''}`}
                style={{ right: showClubMembership ? '0' : '-100%' }}>
                <div className="d-flex align-items-start book_appointment_inner">
                    <div className="nav flex-column nav-pills left_side_wepper" id="v-pills-tab" role="tablist"
                        aria-orientation="vertical">
                        <div className="one_line"></div>
                        {/* <!-- <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                    aria-selected="true">Get Quotation <i className="fa-solid fa-chevron-right"></i></button> --> */}
                        <a href="#" className="nav-link"> Get Quotation <i className="fa-solid fa-chevron-right"></i></a>

                        <div className="one_line"></div>
                        <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                            aria-selected="false">Club Membership <i className="fa-solid fa-chevron-right"></i></button>
                        <div className="one_line"></div>
                        {/* <!-- <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                    aria-selected="false">Contact Us <i className="fa-solid fa-chevron-right"></i></button> --> */}
                        <a href="#" className="nav-link"> Contact Us <i className="fa-solid fa-chevron-right"></i></a>
                        <div className="one_line"></div>

                        <button className="nav-link club_membership_btn" id="club_membership-tab" data-bs-toggle="pill"
                            data-bs-target="#club_membership" type="button" role="tab" aria-controls="club_membership"
                            aria-selected="false"> <img src="images/club-taz-white.svg" alt="" /> Club Membership</button>

                        <div className="club_membership_text">
                            <p>Uncover the Power of Savings with a <br /> Club Membership!</p>
                        </div>


                        <div className="Reach_hedding">
                            <h2>Reach Us -</h2>

                            <ul>
                                <li><i className="fa-solid fa-location-dot"></i> 14 Inverness Drive East G-120 Englewood, <br /> CO
                                    80112
                                </li>
                                <li><i className="fa-regular fa-envelope"></i>help@sparks-hvac.com
                                    80112
                                </li>
                                <li><i className="fa-solid fa-phone"></i>303-521-4037
                                </li>
                                <li><i className="fa-regular fa-clock"></i>Mon - Fri (09.00 am - 10.00 pm)
                                </li>
                            </ul>
                        </div>
                        <div className="book_appointment_logo">
                            <img src="images/logo-white.png" alt="" />
                        </div>
                    </div>

                    <div className="tab-content" id="v-pills-tabContent">
                        {/* <!-- <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                    aria-labelledby="v-pills-home-tab" tabindex="0">A</div> --> */}
                        <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel"
                            aria-labelledby="v-pills-profile-tab" tabIndex="0">
                            <div className="from_hedding">
                                <h2>Club Membership</h2>
                            </div>
                            <div className="close_btn" onClick={() => setShowClubMembership(false)}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                            <form action="">
                                <div className="row form_data">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="message">First Name*</label>
                                            <input type="text" name="fname" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="message">Last Name*</label>
                                            <input type="text" name="fname" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Street Address</label>
                                            <input type="text" name="fname" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="Landmark">Landmark</label>
                                            <input type="tel" name="fname" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="City">City</label>
                                            <input type="tel" name="fname" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="State">State</label>
                                            <input type="tel" name="fname" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="Zipcode">Zipcode</label>
                                            <input type="tel" name="fname" id="" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="Email Address">Email Address</label>
                                            <input type="email" name="fname" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="Phone Number">Phone Number</label>
                                            <input type="number" name="fname" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="message">How did you hear about us?</label>
                                            <select name="cars" id="cars">
                                                <option value="Add New AC">Add New AC</option>
                                                <option value="AC">AC</option>
                                                <option value="AC1">AC1</option>
                                                <option value="AC2">AC2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="note_wepper club_member_ship_image_uplode">
                                        <div className="uplod_data">
                                            <p>Upload Signature Image</p>
                                            <label className="filelabel">

                                                <span className="title">
                                                    Choose Image
                                                </span>
                                                <input className="FileUpload1" id="FileInput" name="booking_attachment"
                                                    type="file" />

                                                <i className="fa fa-paperclip">
                                                </i>
                                            </label>
                                        </div>
                                        <a href="#">Get Membership Now</a>
                                        <hr />
                                        <strong>Uncover the Power of Savings with a Club Membership!</strong>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>




            {/* Club Member Ship End */}

            {productData?.map((item, i) => {
                // {productData?.map((item, i) => {
                return (
                    <section className="same_space" key={i}>
                        <div className="container">
                            <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="product_details_img_book">
                                        <div className="product_details_img_inner">
                                            {/* <img src="images/product-detalis.png" alt="" className="w-100" /> */}

                                           

                                            <div className="product_details_img_right_side">
                                                {item?.productImageDtos?.slice(0, 3).map((pic, l) => (
                                                    <div className={`img_book ${i === currentIndex ? 'slick-current' : ''}`}
                                                    key={i}
                                                    onClick={() => handleVerticalClick(l)}>
                                                        <img src={`${Image_BASE_URL}${pic?.imgPath}`} alt={`Image ${l + 1}`} className="" width={100} />
                                                    </div>
                                                ))}
                                                {/* <img src="images/product-detalis-right.png" alt="" />
                                                <img src="images/product-detalis-right.png" alt="" /> */}
                                            </div>
                                            {item?.productImageDtos?.[currentIndex] && (
                                                    <ReactImageMagnify
                                                        {...{
                                                            smallImage: {
                                                                alt: 'Product Image',
                                                                isFluidWidth: true,
                                                                src: `${Image_BASE_URL}${item?.productImageDtos[currentIndex]?.imgPath}`,
                                                            },
                                                            largeImage: {
                                                                src: `${Image_BASE_URL}${item?.productImageDtos[currentIndex]?.imgPath}`,
                                                                width: 1500,
                                                                height: 1100,
                                                            },
                                                            enlargedImageContainerStyle: {
                                                                zIndex: 2000,
                                                                backgroundColor: '#fff',
                                                            },
                                                            enlargedImageContainerDimensions: {
                                                                width: '130%',
                                                                height: '130%',
                                                            },
                                                            isHintEnabled: false,
                                                        }}
                                                    />
                                                )}
                                        </div>

                                        {/* <div className="image_wrep_main d-flex">
                                            <div className="imge_wepper d-sm-block d-none col-sm-2">
                                                {item?.productImageDtos?.slice(0, 5).map((pic, l) => (
                                                    <div
                                                        className={`img_book ${i === currentIndex ? 'slick-current' : ''}`}
                                                        key={i}
                                                        onClick={() => handleVerticalClick(l)}>
                                                        <img src={`${Image_BASE_URL}${pic?.imgPath}`} alt={`Image ${l + 1}`} className="" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="col-sm-10 col-12">
                                                {item?.productImageDtos?.[currentIndex] && (
                                                    <ReactImageMagnify
                                                        {...{
                                                            smallImage: {
                                                                alt: 'Product Image',
                                                                isFluidWidth: true,
                                                                src: `${Image_BASE_URL}${item?.productImageDtos[currentIndex]?.imgPath}`,
                                                            },
                                                            largeImage: {
                                                                src: `${Image_BASE_URL}${item?.productImageDtos[currentIndex]?.imgPath}`,
                                                                width: 1500,
                                                                height: 1100,
                                                            },
                                                            enlargedImageContainerStyle: {
                                                                zIndex: 2000,
                                                                backgroundColor: '#fff',
                                                            },
                                                            enlargedImageContainerDimensions: {
                                                                width: '130%',
                                                                height: '130%',
                                                            },
                                                            isHintEnabled: false,
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">                    
                                                    <div className="product_detalis_content">
                                        <h2>{item.displayName}</h2>
                                        <span>Categories: {item.categoryName}, {item.productSubCategoryName}</span>
                                        <div className="product_model">
                                            <p><strong>Product Model :</strong> {item.modelName}</p>
                                            <p><strong>Product Code: EL-</strong>  {item.productCode}</p>
                                        </div>
                                        <div className="description_wepper">
                                            <h3>Description:</h3>
                                            <p>{item.displayDesc}</p>
                                        </div>
                                        {/* <div className="description_wepper">
                                        <h3>Dimensions:</h3>
                                        <div className="dimensions_wepper">
                                            <div className="dimensions_inner">
                                                <li>Thickness (in) 3</li>
                                                <li>Widht (in) 32</li>
                                            </div>
                                            <div className="dimensions_inner">
                                                <li>Length (in) 32</li>
                                                <li>Weight (lbs) 21</li>
                                            </div>
                                        </div>

                                    </div> */}
                                        <hr />
                                        <div className="whats_wepper">
                                            <div className="whats_inner">
                                                <h2>Whats Included</h2>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </div>
                                            <p>{item.inculdeItem}</p>
                                            <hr />
                                        </div>
                                        <div className="whats_wepper">
                                            <div className="whats_inner">
                                                <h2>Warrenty</h2>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </div>
                                            <p>{item.warrenty}</p>
                                            <hr />
                                        </div>
                                        <div className="whats_wepper">
                                            <div className="whats_inner">
                                                <h2>Specifications</h2>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </div>
                                            <div className="description_wepper dimensions">
                                                <div className="dimensions_wepper">
                                                    <div className="dimensions_inner">
                                                        {item.productSpecificationDtos?.map((spec, j) => {
                                                            return (
                                                                <p key={j} >{spec.specificationDisplayName} – {spec.description}</p>
                                                            )
                                                        })}
                                                        {/* <p>Load (lbs) – 1160</p>
                                                    <p>Material – Polypropylene</p>
                                                    <p>Temperature Range (F) – -48 to 180</p> */}
                                                    </div>
                                                    {/* <div className="dimensions_inner">
                                                    <p>Material – Polypropylene</p>
                                                    <p>Temperature Range (F) – -48 to 180</p>
                                                </div> */}
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="add_quotation_btn">
                                            <Link to="/add-quotation">Add Product to Quotation <img src="images/right-arrow.svg" alt="" /></Link>
                                            <img src="images/get-member-ship.svg" className="club_membership_click " alt="" onClick={() => setShowClubMembership(true)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}





        </div>
    )
}

export default ProductDetails;