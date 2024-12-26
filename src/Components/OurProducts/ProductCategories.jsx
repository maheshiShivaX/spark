import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { get } from "../../_services/apiService";
import { endpoints, Image_BASE_URL } from "../../_config";
import { use } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { get_cart_Data, incrQuantity, decrQuantity, addToCart, buyNow } from '../../redux/action';
import { toast } from "react-toastify";

const ProductCategories = () => {
    const loginId= localStorage.getItem('loginId');
    const [openCategory, setOpenCategory] = useState(null);
    const [activeProduct, setActiveProduct] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const dispatch = useDispatch();
    const navigate =useNavigate();


   /// const cartData = useSelector((state) => state.cartReducer.cart) || [];

   // const cartQuantity = cartData.find(cartItem => Number(cartItem.productId) === Number(lpId));

    const initialQuantity = 1;


    // Function to toggle categories
    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
        setActiveProduct(null); // Reset active product when category changes
    };

    // Function to toggle products
    const toggleProduct = (product) => {
        setActiveProduct(product);
    };


    const [productCategoryData, setProductCategoryData] = useState();
    const [productData, setProductData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productDetailById, setProductDetailById] = useState([]);

    const getProductCategorywithsubcategory = async () => {
        try {
            const response = await get(endpoints.GetProductCategorywithsubcategory)
            console.log(response);
            if (response.isSuccess === 200) {
                setProductCategoryData(response.data);
            } else {
                setError("Failed to fetch Service Type");
            }
        } catch (error) {
            setError("Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const getProductDetailBycategorysubcategory = async (categoryId, subcategoryId) => {
        try {
            const response = await get(endpoints.GetProductDetailBycategorysubcategory + "?pCategoryId=" + categoryId + "&pSubCategoryId=" + subcategoryId)
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
    console.log(productData);

    const [formData, setFormData] = useState({
        cartItemId: 0,
        productId: 0,
        loginId: loginId ? Number(loginId) : 0,
        buyStatus: 1,
        quantity: 0,
        isActive: true,
        createdBy: 0,
        unitPrice: 0,
        totalAmount: 0
    });
    
    useEffect(() => {
        getProductCategorywithsubcategory();
        getProductDetailBycategorysubcategory(0, 0);

        if (formData.productId) { // Ensure formData has been set properly
            try {
                dispatch(addToCart(formData));
                console.log(formData, 'formdata12');
            } catch (error) {
                toast.error("Error occurred while adding to cart.");
            }
        }

    }, [formData]);

const onProductDetail=(productId)=>{
    navigate(`/product-detail/${productId}`)
}




const onAddCart = async (item) => {

    setProductDetailById(item);
    console.log('item', item);
    setFormData({
        cartItemId: 0,
        productId: item.productId,
        loginId: loginId ? Number(loginId) : 0,
        buyStatus: 1,
        quantity: initialQuantity,
        isActive: true,
        createdBy: 0,
        unitPrice: item.unitPrice || 0,
        totalAmount: item.unitPrice || 0
    })


   
   // navigate('/add-quotation');
};



    return (
        <section className="same_space">
            <div className="container">
                <div className="our_product_tab_wepper_main row">
                    <div className="nav flex-column nav-pills our_product_tab_wepper col-lg-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <h2>Product categories</h2>

                        {/* Air Conditioners */}


                        {productCategoryData?.map((item, i) => {
                            return (
                                <div key={i}>
                                    {/* Toggle button for category */}
                                    <button className="nav-link" onClick={() => toggleCategory(item.displayName)}>
                                        {item.displayName}
                                        <i
                                            className={`fa-solid fa-chevron-right ${openCategory === item.displayName ? "rotate-icon" : ""}`}
                                        ></i>
                                    </button>

                                    {/* Display subcategories if the category is open */}
                                    {openCategory === item.displayName && (
                                        <ul className="child-dropdown">
                                            {item.subCategoryDtos?.map((element, j) => (
                                                <li key={j} onClick={() => getProductDetailBycategorysubcategory(element.productCategoryId, element.productSubCategoryId)}>
                                                    {element.displayName}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            );
                        })}

                    </div>

                    {/* Product Display */}
                    <div className="tab-content col-lg-9" id="v-pills-tabContent">


                        <>
                            <div className="">
                                <div className="our_product_inner_wepper row">



                                    {productData?.map((item, i) => (
                                        <>

                                            <div className="our_product_inner col-lg-4 col-md-4 col-sm-4">
                                                <div className="air_conditioners_box"><span onClick={()=>onProductDetail(item.productId)}
                                                
                                                data-discover="true">

                                                    {item.productImageDtos?.map((imageitem, j) => (
                                                        imageitem.isHeader ?
                                                            <img src={`${Image_BASE_URL}${imageitem?.imgPath}`} alt="" />
                                                            : null
                                                    ))}

                                                </span></div>
                                                <div className="air_conditioners_bg"><img src="images/air-conditioners.svg" alt="" className="w-100" />
                                                    <div className="air_conditioner_content">
                                                        <h2>{item.displayName}</h2>
                                                        <p>Categories : {item.categoryName}, {item.productSubCategoryName}</p>
                                                        <span><Link to={`/product-detail/${item.productId}`}>More Details &gt;</Link> </span>
                                                        {/* <Link to="/add-quotation" data-discover="true">Add To Quotation</Link> */}
                                                        <button onClick={() => onAddCart(item)} className="add_to_Quotation_btn">Add To Quotation </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}





                                </div>

                            </div>
                        </>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
