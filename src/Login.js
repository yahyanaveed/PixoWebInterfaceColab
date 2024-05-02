/* eslint-disable jsx-a11y/anchor-is-valid */
// Example usage in a component
import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import { useNavigate } from 'react-router-dom';
import Button from "./components/Button";
import toast, { Toaster } from 'react-hot-toast';
import { default as Logo } from "./assets/logo.png";


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    grant_type: '',
    scope: '',
    client_id: '',
    client_secret: '',
  });
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState(false);

  const wronglogin = () => toast('Incorrect login credentials.', {
    style: {
      backgroundColor: '#e23650',
      color: '#ffffff',
    },
  });

  const emptyField = () => toast('A field is left blank. Type username and password to login..', {
    style: {
      backgroundColor: '#e23650',
      color: '#ffffff',
    },
  });

  const sessionOut = () => toast('Your session has expired. Please log-in again to continue.', {
    style: {
      backgroundColor: '#e23650',
      color: '#ffffff',
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData?.username?.length < 1 || formData?.password?.length < 1) { emptyField(); return; }
    setLoadingState(true);
    try {
      const response = await ApiService.postFormData('/token', formData);
      console.log('Response:', response);
      
      setLoadingState(false);
      navigate('/projects');
      // Handle response
    } catch (error) {
      setLoadingState(false);
      console.error('Error:', error);
      wronglogin();
      // Handle error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if(localStorage.getItem('loggedOutFromSystem'))
    {
      sessionOut();
      localStorage.removeItem('loggedOutFromSystem');
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="text" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button> */}
      

<div className="container mx-auto p-8 h-screen flex flex-col items-center justify-center ">
 <div className="max-w-md w-full h-screen mx-auto flex flex-col items-center justify-center">
     <h1 className="text-4xl text-center mb-12 font-thin"><img src={Logo} style={{ maxWidth: '200px' }} alt="Pixo" /></h1>

     <div className="bg-white w-full rounded-lg overflow-hidden p-6 shadow-2xl">
         <div className="p-8">
                 <div className="mb-5">
                     <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-600">Email</label>

                     <input onChange={handleChange} disabled={loadingState} type="text" name="username" id="username" className="block w-full p-3 rounded border-gray-200 border focus:outline-none"/>
                 </div>
         
                 <div className="mb-5">
                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

                     <input onChange={handleChange} disabled={loadingState} type="password" id="password" name="password" className="block w-full p-3 rounded border-gray-200 border focus:outline-none"/>
                 </div>

                 <Button stateButton={!loadingState ? 'default': 'loading'} labelButton="Login" labelLoading="Logging-in" customStyle="mt-10 p-3 "/>
   
         </div>
         
         <div className="flex hidden justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
             <a href="#" className="font-medium text-indigo-500">Create account</a>

             <a href="#" className="text-gray-600">Forgot password?</a>
         </div>
     </div>
     <div className="text-gray-600 text-xs mt-4 hidden"><input disabled={loadingState}    type="checkbox"/> Stay logged-in for 30 days?</div>
 </div>
</div>
    <Toaster/>
    </form>
  );
};

export default Login;
