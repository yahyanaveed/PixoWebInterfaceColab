import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox';
import LeftMenu from './LeftMenu';

const HomePage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(screenWidth > 1023);
  
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    if(screenWidth < 1024 && toggle)
    setToggle(false);
  };

  useEffect(() => {

    console.log('toggle: ', toggle);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  


  const callBack = () => {
  //   console.log('screenWidth: ', screenWidth);
  //   if(screenWidth < 1024)
  //   setToggle(!toggle);
  // else if(screenWidth > 1023)
  //   setToggle(true);
  
    setToggle(!toggle);
    console.log('toggle:- ', toggle);
  }


    return (
      <div className="flex flex-row w-full h-screen">
        {screenWidth >= 1024 &&
        <div className={`w-full lg:w-72 h-screen ${( screenWidth < 1024) ? 'hidden':'' }`}>
            <LeftMenu/>

        </div>}
        {( screenWidth < 1024 && toggle ) && <LeftMenu/>}
        <div className="w-full flex flex-col lg:w-full h-screen special_left_padding">
          <div className="h-12 shadow-lg fixed w-full bg-white flex justify-between flex-row">
            <div className="flex lg:hidden ml-4 mt-1"><button className="hover:bg-gray-100 py-1 px-2 rounded-md" onClick={callBack}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button></div>
          <div className="lg:ml-4 lg:mr-auto lg:justify-start ml-auto mr-4 justify-end mt-1 text-gray-700 align-end group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path></svg>400</div>
          </div>
            <ChatBox/>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  