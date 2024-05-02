/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { default as Logo } from "../assets/logo.png";
import { default as downArrow } from "../assets/dropdown.svg";
import './PageLoader.css'; // Styles for the loader
import { Link } from 'react-router-dom';

const NavBar = ({ balance = -1, callback, showBurgerButton = false }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {

}, []);


  return (
    <header>
       <nav style={{ zIndex: '1' }} 
          className="
            fixed
            flex flex-nowrap
            items-center
            justify-between
            w-full
            py-1
            md:py-0
            px-4
            text-lg text-gray-700
            bg-white
            border-b
            border-gray-200
            shadow
          "
        >
         <div className="flex">
            <a href="#">
              <img src={Logo} className="logo_navbar" alt="Pixo" />
            </a>
            
            {showBurgerButton && <div className="flex lg:hidden ml-4 mt-1"><button className="hover:bg-gray-100 py-1 px-2 rounded-md" onClick={callback}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button></div>}
          </div>
{/*          
           <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg> */}
         
         <div className="" id="menu">
            {/* <ul
              className="
                pt-4
                text-base text-gray-700
                md:flex
                md:justify-between 
                md:pt-0"
            >
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                  >Features</a
                >
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                  >Pricing</a
                >
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                  >Customers</a
                >
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                  href="#"
                  >Sign Up</a
                >
              </li>
            </ul> */}
            {balance > -1 && 
          <div className="lg:ml-4 lg:mr-auto lg:justify-start ml-auto mr-4 justify-end mt-1 text-gray-700 align-end group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path></svg>{balance || 0}</div>}
             <button className="bg-white-700 hover:bg-gray-100 text-gray-600 font-medium rounded-lg text-sm px-4 py-2 my-0 md:my-1 text-center inline-flex items-center" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} data-dropdown-toggle="dropdown"><span className="rounded-full bg-blue-200 w-12 h-12 md:w-12 md:h-12 text-white flex items-center justify-center text-lg md:text-3xl font-light text-center mr-2">N</span> <img src={downArrow} className={`${isMenuOpen ? 'rotate-180':''} `}style={{ fontSize: '12px', width: '28px' }} alt="More"/></button>

<div className={` ${!isMenuOpen ? 'hidden':'block'} transition-all absolute top-13 right-5 bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow-md my-4`} id="dropdown">
    <div className="px-4 py-3">
    <span className="block text-sm">User Name</span>
    <span className="block text-sm font-medium text-gray-900 truncate"><b>Balance</b> 0.04$</span>
    </div>
    <ul className="py-1" aria-labelledby="dropdown">
    <li>
        <span href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"><Link to={`/logout`}>Sign out</Link></span>
    </li>
    </ul>
</div>
          </div>
      </nav>
    </header>
  );
};

export default NavBar;