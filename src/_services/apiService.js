import axios from 'axios';
import { baseurl, API_BASE_URL } from '../_config';

// Base configuration
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || API_BASE_URL, // 'https://example.com/api', // Use your base URL
    timeout: 550000, // Optional: Set a timeout for requests
});

// Request interceptor for adding headers
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken'); // Replace with your token retrieval logic
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle specific error responses like 401 Unauthorized
        if (error.response?.status === 401) {
            console.error('Unauthorized, logging out...');
            // Add your logout logic here, e.g., clearing tokens, redirecting to login
        }
        return Promise.reject(error);
    }
);

// Generic GET request
export const get = async (url, params = {},  config = {}) => {
    try {

        const token = localStorage.getItem('jwtToken'); // Replace with your token retrieval logic
        console.log(token);
        if (token != null) {

            // Add Authorization header if not already in config
            const updatedConfig = {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${token}`,
                },
            };
        }

        const response = await apiClient.get(url, { params }, config = {});
        return response.data; // Return only the data
    } catch (error) {
        console.error(`GET ${url} failed:`, error);
        throw error;
    }
};

// Generic POST request
export const post = async (url, data = {}, config = {}) => {
    try {

        // Ensure the Authorization header exists
        const token = localStorage.getItem('jwtToken'); // Replace with your token retrieval logic
        console.log(token);
        if (token != null) {

            // Add Authorization header if not already in config
            const updatedConfig = {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${token}`,
                },
            };
        }




        const response = await apiClient.post(url, data, config);
        console.log(response);
        return response.data; // Return only the data
    } catch (error) {
        console.error(`POST ${url} failed:`, error);

        // Handle specific cases of failed authorization
        if (error.response?.status === 401) {
            console.error('Authorization failed. Redirecting to login.');
            // Redirect to login or perform token refresh logic here
        }
        throw error;
    }
};

// Add more methods (PUT, DELETE) if needed
export const put = async (url, data = {}, config = {}) => {
    try {
        const response = await apiClient.put(url, data, config);
        return response.data;
    } catch (error) {
        console.error(`PUT ${url} failed:`, error);
        throw error;
    }
};

export const del = async (url, config = {}) => {
    try {
        const response = await apiClient.delete(url, config);
        return response.data;
    } catch (error) {
        console.error(`DELETE ${url} failed:`, error);
        throw error;
    }
};
