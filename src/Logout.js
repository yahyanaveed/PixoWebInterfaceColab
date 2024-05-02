// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear locally stored tokens
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return <div className="font-light w-full h-screen bg-gray-100 text-gray-600 flex text-center justify-center align-center">Logging out...</div>;
};

export default Logout;
