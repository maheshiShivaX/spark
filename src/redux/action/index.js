import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_ITEM, TOGGLE_CART, GET_ALL_CART_DATA } from "./actionTypes";
import { API_URL, baseurl, endpoints } from '../../_config';
import { useState } from "react";
import { get, post } from "../../_services/apiService";
import { toast } from "react-toastify";

export const get_cart_Data = () => async (dispatch) => {
   

        const localCartData = JSON.parse(localStorage.getItem('lcart')) || [];
        dispatch({ type: GET_ALL_CART_DATA, payload: localCartData });
    }


// const getProductDetailById = async (productId) => {
//     const secretKey = CryptoJS.enc.Utf8.parse("uitsufdytuiysdifdsfdsfdhgtyuijkj");
//     const iv = CryptoJS.enc.Utf8.parse("1234567890123456");
//     try {
//         const response = await axios.get(`${baseurl}${API_URL?.GetProductDetailById}?pProductDetailId=${productId}`);

//         const encryptedData = response.data?.data;
//         if (!encryptedData || typeof encryptedData !== 'string' || encryptedData.trim() === '') {
//             throw new Error("Invalid or empty encrypted data format");
//         }

//         const result = decryptString(encryptedData, secretKey, iv);

//         const parsedData = JSON.parse(result);

//         if (parsedData) {
//             return parsedData[0];
//         } else {
//             throw new Error("Product not found");
//         }
//     } catch (error) {
//         // console.error('Error fetching product data:', error);
//         throw error;
//     }
// };


// export const buyNow = (formData) => async (dispatch) => {
//     const SJloginId = localStorage.getItem('lloginId');
//     const SJjwtToken = localStorage.getItem('SJjwtToken');
//     const existingItemDetails = JSON.parse(localStorage.getItem('itemDetail')) || [];
//     const existingCartItemDetails = JSON.parse(localStorage.getItem('cartItemDetail')) || [];

//     if (existingItemDetails.length > 0 || existingCartItemDetails.length > 0) {
//         localStorage.removeItem('cartItemDetail');
//         localStorage.removeItem('itemDetail');
//     }

//     if (SJloginId) {
//         try {
//             const existingItemDetails = JSON.parse(localStorage.getItem('itemDetail')) || [];

//             // Add the new formData to the existing array
//             existingItemDetails.push(formData);

//             // Store the updated array back into localStorage
//             localStorage.setItem('itemDetail', JSON.stringify(existingItemDetails));

//         } catch (error) {
//             toast.error("An error occurred. Please try again.");
//         }
//     } else {
//         const existingItemDetails = JSON.parse(localStorage.getItem('itemDetail')) || [];

//         // Add the new formData to the existing array
//         existingItemDetails.push(formData);

//         // Store the updated array back into localStorage
//         localStorage.setItem('itemDetail', JSON.stringify(existingItemDetails));
//     }
// };

export const addToCart = (formData) => async (dispatch) => {

//alert('loginid' + loginId);
    {
        try {


            const response = await get(endpoints.GetProductDetailById+"?pProductDetailId=" +formData.productId );//  getProductDetailById(formData.productId);
        if(response.isSuccess===200)
                        {
                console.log('data', response.data);
                const productDetails =response.data[0];


                const localCartData = JSON.parse(localStorage.getItem('lcart')) || [];

                const existingItem = localCartData.find(item => item.productId === productDetails.productId);


                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    localCartData.push({ ...productDetails, quantity: 1 });
                }

                localStorage.setItem('lcart', JSON.stringify(localCartData));
                dispatch({ type: ADD_TO_CART, payload: { ...productDetails, quantity: 1 } });
                toast.success("Item added to local cart successfully");


            }
      
       
        } catch (error) {
            toast.error("Error occurred while fetching product details.");
        }
    }
};

export const saveorder = (formData) => async (dispatch) => {
    const loginId = localStorage.getItem('loginId');
//alert('loginid' + loginId);
    {
        try {


            if ( formData.loginId>0) {

                const responsecart = await post(endpoints.SaveProductOrder, formData)
                if (responsecart.isSuccess === 200) {
                    localStorage.setItem("CartData", '');
                }
                localStorage.setItem("CartData", '');
            }
      
       
        } catch (error) {
            toast.error("Error occurred while fetching product details.");
        }
    }
};



/*if save only cart data in localstorage */

// export const addToCart = (formData) => async (dispatch) => {
//     const loginId = localStorage.getItem('loginId');

//     if (loginId) {
//         try {
//             const response = await axios.post(`${baseurl}${API_URL?.SaveCartDetail}`, formData, {
//                 headers: { 'Content-Type': 'application/json' },
//             });
//             if (response.status === 200) {
//                 dispatch({ type: ADD_TO_CART, payload: response.data.data });
//             } else {
//                 toast.error("Failed to add item to cart");
//             }
//         } catch (error) {
//             console.error('Error adding to cart:', error);
//             toast.error("An error occurred. Please try again.");
//         }
//     } else {
//         const localCartData = JSON.parse(localStorage.getItem('cart')) || [];
//         const existingItem = localCartData.find(item => item.productId === formData.productId);

//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             localCartData.push({ ...formData, quantity: 1 });
//         }

//         localStorage.setItem('cart', JSON.stringify(localCartData));
//         // toast.success("Item added to local cart successfully");
//         dispatch({ type: ADD_TO_CART, payload: { ...formData, quantity: 1 } });
//     }
// };


/*if in array single data push in with login id */

// export const syncCartAfterLogin = () => async (dispatch) => {
//     const cartData = JSON.parse(localStorage.getItem('cart')) || [];
//     const loginId = localStorage.getItem('loginId');

//     if (loginId && cartData.length > 0) {
//         try {
//             const item = {
//                 productId: cartData[0].productId,
//                 loginId: Number(loginId),
//                 buyStatus: 0, 
//                 quantity: cartData[0].quantity,
//                 isActive: true,
//                 createdBy: 0,
//             };

//             const response = await axios.post(`${baseurl}${API_URL?.SaveBulkCart}`, item, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (response.status === 200) {
//                 localStorage.removeItem('cart'); 
//                 dispatch({ type: ADD_TO_CART, payload: response.data });
//                 toast.success("Local cart synced successfully!");
//             } else {
//                 toast.error("Failed to sync local cart.");
//             }
//         } catch (error) {
//             console.error('Error syncing cart:', error);
//             toast.error("An error occurred while syncing the cart. Please try again.");
//         }
//     } else {
//         // console.log("No loginId or local cart data available to sync.");
//     }
// };

// export const syncCartAfterLogin = () => async (dispatch) => {
//     const cartData = JSON.parse(localStorage.getItem('lcart')) || [];
//     const lloginId = localStorage.getItem('lloginId');
//     const jwtToken = localStorage.getItem('jwtToken');

//     // console.log(jwtToken,"jwttoken")
//     if (lloginId && cartData.length > 0) {
//         try {
//             const items = cartData.map(item => ({
//                 productId: item.productId,
//                 loginId: Number(lloginId),
//                 buyStatus: 0,
//                 quantity: item.quantity,
//                 isActive: true,
//                 createdBy: 0,
//             }));

//             const response = await axios.post(`${baseurl}${API_URL?.SaveBulkCart}`, items, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${jwtToken}`
//                 },
//             });

//             if (response.status === 200) {
//                 localStorage.removeItem('lcart');
//                 dispatch({ type: ADD_TO_CART, payload: response.data });
//             } else {
//                 toast.error("Failed to sync local cart.");
//             }
//         } catch (error) {
//             // console.error('Error syncing cart:', error);
//             toast.error("An error occurred while syncing the cart. Please try again.");
//         }
//     } else {
//         // console.log("No loginId or local cart data available to sync.");
//     }
// };



// export const removeItem = (id) => {
//     return {
//         type: REMOVE_ITEM,
//         payload: id
//     };
// };

// export const deleteItem = (item) => async (dispatch) => {
//     // const { cartReducer: { cart } } = getState();
//     const lloginId = localStorage.getItem('lloginId');
//     const isConfirmed = window.confirm("Are you sure you want to delete this item?");
//     if (!isConfirmed) {
//         return;
//     }
//     if (lloginId) {
//         try {
//             const response = await get(API_URL.DeleteCartDetailByLoginId, {
//                 pCartDetailId: item?.cartItemId,
//                 LoginId: lloginId
//             });
//             if (response.isSuccess === 200) {
//                 dispatch(get_cart_Data());
//             } else {
//                 toast.error("Failed to delete item");
//             }
//         } catch (error) {
//             // console.error('Error deleting item:', error.response || error.message || error);
//         }
//     } else {
//         const localCartData = JSON.parse(localStorage.getItem('lcart')) || [];
//         const updatedCartData = localCartData.filter(cartItem => cartItem.productId !== item.productId);

//         localStorage.setItem('lcart', JSON.stringify(updatedCartData));
//         dispatch(get_cart_Data());
//     }
// };


// export const incrQuantity = (item) => async (dispatch, getState) => {
//     const lloginId = localStorage.getItem('lloginId');
//     if (lloginId) {
//         const formData = {
//             productId: item.productId,
//             loginId: lloginId,
//             buyStatus: 0,
//             quantity: item.quantity + 1,
//             isActive: true,
//             createdBy: 0
//         };

//         try {
//             const response = await post(API_URL.SaveCartDetail, formData);
//             console.log(response);
//             if (response.isSuccess === 200 && response.data.length > 0) {
               
//             } else {
//                 toast.error(response.message);
               
//             }
//             dispatch(get_cart_Data());
//         } catch (error) {

//         }
//     } else {
//         const localCartData = JSON.parse(localStorage.getItem('cart')) || [];
//         const existingItem = localCartData.find(cartItem => cartItem.productId === item.productId);

//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             localCartData.push({ ...item, quantity: 1 });
//         }

//         localStorage.setItem('cart', JSON.stringify(localCartData));
//         dispatch(get_cart_Data());
//     }
// };

// export const decrQuantity = (item) => async (dispatch, getState) => {
//     const lloginId = localStorage.getItem('lloginId');

//     if (lloginId) {
//         const formData = {
//             productId: item.productId,
//             loginId: lloginId,
//             buyStatus: 0,
//             quantity: item.quantity - 1,
//             isActive: true,
//             createdBy: 0
//         };

//         if (formData.quantity == 0 || formData.quantity == null) {
//             dispatch(deleteItem(item));
//             return;
//         }

//         try {
//             const response = await post(API_URL.SaveCartDetail, formData);
//             console.log(response);
//             if (response.isSuccess === 200 && response.data.length > 0) {
               
//             } else {
//                 toast.error(response.message);
               
//             }
//             dispatch(get_cart_Data());
//         } catch (error) {

//         }
//     } else {
//         const localCartData = JSON.parse(localStorage.getItem('cart')) || [];
//         const existingItem = localCartData.find(cartItem => cartItem.productId === item.productId);

//         if (existingItem) {
//             existingItem.quantity -= 1;
//         } 
//         else {
//             localCartData.push({ ...item, quantity: 1 });
//         }

//         localStorage.setItem('cart', JSON.stringify(localCartData));
//         dispatch(get_cart_Data());
//     }
// };