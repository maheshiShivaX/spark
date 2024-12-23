import CryptoJS from 'crypto-js';
import axiosInstance, { baseurl, API_URL } from '../_config';
import axios from 'axios';
import toast from 'react-hot-toast';


const secretKey = CryptoJS.enc.Utf8.parse("uitsufdytuiysdifdsfdsfdhgtyuijkj");
const iv = CryptoJS.enc.Utf8.parse("1234567890123456");

export const decryptString = (encryptedData, key, iv) => {
    const decrypteData = CryptoJS.AES.decrypt(
        { ciphertext: CryptoJS.enc.Base64.parse(encryptedData) },
        key,
        {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        }
    );

    const result = decrypteData.toString(CryptoJS.enc.Utf8);
    return result;
};

export const decryptData = (encryptedData) => {
    const decrypteData = CryptoJS.AES.decrypt(
        { ciphertext: CryptoJS.enc.Base64.parse(encryptedData) },
        secretKey,
        {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        }
    );

    const result = JSON.parse(decrypteData.toString(CryptoJS.enc.Utf8));
    return result;
};





export const getProductDataById = async () => {
 
    const SJproductId = localStorage.getItem("lpId");
    try {
        const response = await axios.get(`${baseurl}${API_URL.GetProductDetailById}?pProductDetailId=${SJproductId}`);

        const encryptedData = response.data?.data;

        if (!encryptedData || typeof encryptedData !== 'string' || encryptedData.trim() === '') {
            throw new Error("Invalid or empty encrypted data format");
        }

        const result = decryptString(encryptedData, secretKey, iv);

        const parsedData = JSON.parse(result);

        if (response.status === 200 && response.data.isSuccess === 200) {
            return parsedData;
        } else {
            throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        throw new Error(error.response?.data?.message || "Please try again later.");
    }
};

export const getProductRatingByProductId = async () => {
    const SJproductId = localStorage.getItem("SJproductId");
    try {
        const response = await axios.get(`${baseurl}${API_URL?.GetProductRatingByProductId}?pProductId=${SJproductId}`);
        if (response.status === 200 && response.data.isSuccess === 200) {
            return response.data.data;
        } else {
            throw new Error("Failed to rating data.");
        }
    } catch (error) {
        throw new Error(error.response?.data?.message || "Please try again later.");
    }
};

export const saveProductRating = async (formData) => {

    try {
        const response = await axios.post(`${baseurl}${API_URL?.SaveProductRating}`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            if (response.data.isSuccess === 200) {
                toast.success("Thank you for your feedback! Your rating has been submitted successfully.");
                return response.data;
            } else {
                toast.error("You've already submitted a rating for this product.");
            }
        } else {
            toast.error("Failed to add the product. Please check your network connection or try again later.");
        }
    } catch (error) {
        toast.error("Please try again later.");
    }
};

export const getProductSpecificationData = async () => {
    const SJjwtToken = localStorage.getItem('SJjwtToken');

    if (!SJjwtToken) {
        throw new Error("Authorization token is missing.");
    }

    try {
        const response = await axios.get(`${baseurl}${API_URL.GetProductSpecificationAll}`, {
            headers: {
                Authorization: `Bearer ${SJjwtToken}`,
            }
        });

        // If the response is successful, return the response data
        if (response.status === 200 && response.data.isSuccess === 200) {
            return response.data.data;
        } else {
            throw new Error("Failed to fetch product specification data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        throw new Error(error.response?.data?.message || "Please try again later.");
    }
};

export const getCategoryData = async () => {

    try {
        const response = await axiosInstance.get(API_URL.getProductCategory);

        if (response.status === 200 && response.data.isSuccess === 200) {
            return response.data.data;
        } else {
            throw new Error("Failed to fetch product Category data.");
        }
    } catch (error) {
        // Handle errors, either from axios or from invalid responses
        throw new Error(error.response?.data?.message || "Please try again later.");
    }
};

export const getUserAddressByLoginId = async () => {
    const SJjwtToken = localStorage.getItem('SJjwtToken');
    const SJloginId = localStorage.getItem("SJloginId");

    if (SJloginId) {
        try {
            const response = await axios.get(`${baseurl}${API_URL?.GetUserAddressByLoginId}?pLoginId=${SJloginId}`, {
                headers: {
                    'Authorization': `Bearer ${SJjwtToken}`,
                },
            });

            const encryptedData = response.data?.data;
            if (!encryptedData || typeof encryptedData !== 'string' || encryptedData.trim() === '') {
                throw new Error("Invalid or empty encrypted data format");
            }

            const result = decryptString(encryptedData, secretKey, iv);

            const parsedData = JSON.parse(result);

            if (response.status === 200 && response.data.isSuccess === 200) {
                return parsedData;
            } else {
                throw new Error("Failed to fetch product Category data.");
            }
        } catch (error) {
            throw new Error(error.response?.data?.message || "Please try again later.");
        }
    }
};

