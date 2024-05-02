// ApiService.js
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const ApiService = axios.create({
  baseURL: 'http://165.227.141.46:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include access token in headers
ApiService.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token refresh
ApiService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh_token = localStorage.getItem('refresh_token');
      if (refresh_token) {
        try {
          const response = await axios.post('http://165.227.141.46:8000/refresh_token', {
            refresh_token,
          });
          localStorage.setItem('access_token', response.data.access_token);
          originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
          return axios(originalRequest);
        } catch (refreshError) {
          // Handle refresh token error
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

// Function to refresh tokens
ApiService.refresh_tokens = async () => {
  const refresh_token = localStorage.getItem('refresh_token');
  if (refresh_token) {
    try {
      const response = await axios.post('http://165.227.141.46:8000/refresh_token', {
        refresh_token,
      });
      localStorage.setItem('access_token', response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      throw error;
    }
  } else {
    throw new Error('Refresh token not found');
  }
};

// Function to handle 'application/x-www-form-urlencoded' POST requests
ApiService.postFormData = async (url, formData) => {
  try {
    const response = await ApiService.post(url, new URLSearchParams(formData).toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default ApiService;
