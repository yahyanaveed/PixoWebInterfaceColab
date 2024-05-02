// Dashboard.js
import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import { useNavigate, Link } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import NavBar from './components/NavBar';

const Projects = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.get('/getprojects');
        setDashboardData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Access token expired, try refreshing tokens
          try {
            await ApiService.refresh_tokens();
            // Retry fetching dashboard data
            const refreshedResponse = await ApiService.get('/getprojects');
            setDashboardData(refreshedResponse.data);
          } catch (refreshError) {
            localStorage.setItem('loggedOutFromSystem', 'true');
            // Refresh token also expired, redirect to homepage
            navigate('/login');
          }
        } else {
          // Other API error, handle accordingly
        }
      }
    };

    fetchData();
  }, [navigate]);

  if (!dashboardData) {
    return <PageLoader/>;
  }

  console.log('dashboardData: ', dashboardData);
  const dataFetched = dashboardData?.projects;

  return (
    <>
    <NavBar/>
    <div className="w-full h-full pt-6 md:pt-12 flex flex-col justify-center items-center">
      <div className="font-semibold text-xl text-gray-600 mb-2 mt-24 md:mb-8">Projects</div>
      {dataFetched.length > 0 && dataFetched.map((el, i) => {
      return (<div key={`el_${i}`} className="bg-white w-full mx-2 md:mx-4 my-4 border mx-auto shadow-md rounded-xl font-light transition-all flex justify-between items-center" style={{ maxWidth: '640px' }}>
      <Link to={`/conversations/${el.projectid}`}>
      <h3 className="font-normal text-gray-600 p-4 md:p-8 hover:font-semibold transition-all">{el.projectname}</h3></Link> <div className="mr-8"><Link to={`/settings/${el.projectid}`}><i className="fa-solid fa-gear text-gray-300"/></Link></div></div>
      )
    })}
      {/* Render dashboard content here */}
    </div>
    </>
  );
};

export default Projects;
