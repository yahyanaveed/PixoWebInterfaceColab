// Dashboard.js
import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import { useNavigate, useParams } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import NavBar from './components/NavBar';
import ChatBox from './components/ChatBox';
import LeftMenu from './components/LeftMenu';

const Conversations = ({ match }) => {

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

    
  


  const [conversationData, setConversationData] = useState(null);
  const [convoId, setConvId] = useState(-1);
  // const [formData, setFormData] = useState({
  //   from_date: '',
  //   to_date: '',
  //   skip: '0',
  //   limit: '50',
  //   convoid: '',
  //   projectid: '7',
  //   customerid: '',
  // });
  const navigate = useNavigate(); 
  let { id } = useParams();
  console.log('match: ', match);
  
  const [paginationNumber, setPaginationNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    const x = parseInt(paginationNumber) + 20;
    try {
      setIsLoading(true);
      const response = await ApiService.get(`/conversation?skip=${paginationNumber*20}&limit=${x}&projectid=${id}`); //${convoId > -1 ? `&convoid=${convoId}`:''}
      setIsLoading(false);
      setConversationData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Access token expired, try refreshing tokens
        try {
          await ApiService.refresh_tokens();
          // Retry fetching dashboard data
          const refreshedResponse = await ApiService.get(`/conversation?skip=0&limit=50&projectid=${id}`);
          setIsLoading(false);
          setConversationData(refreshedResponse.data);
        } catch (refreshError) {
          localStorage.setItem('loggedOutFromSystem', 'true');
          setIsLoading(false);
          // Refresh token also expired, redirect to homepage
          navigate('/login');
        }
      } else {
        // Other API error, handle accordingly
      }
    }
  };

  useEffect(() => {
    fetchData();
    
    setConvId(-1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, paginationNumber]);

  if (!conversationData) {
    return <PageLoader/>;
  }

  console.log('conversationData: ', conversationData);
  const dataFetched = conversationData.conversations;


  const initiateChat = (id) => {
    setConvId(id);
    setToggle(!toggle);
    // return id;
  };
  return (
    <>


    





<NavBar callback={callBack} showBurgerButton={true}/>
    <div className="flex flex-row w-full">
        {screenWidth >= 1024 &&
        <div className={`w-full lg:w-72 ${( screenWidth < 1024) ? 'hidden':'' }`}>
            <LeftMenu isLoading={isLoading} convoId={convoId} paginationNumber={paginationNumber} setPaginationNumber={setPaginationNumber} totalConversations={conversationData?.totalConversations} chatData={conversationData?.conversations} callback={initiateChat}/>

        </div>}
        {( screenWidth < 1024 && toggle ) && <LeftMenu convoId={convoId} isLoading={isLoading} paginationNumber={paginationNumber} setPaginationNumber={setPaginationNumber} totalConversations={conversationData?.totalConversations} chatData={conversationData?.conversations} callback={initiateChat}/>}
        {(( screenWidth < 1024 && !toggle) || screenWidth >= 1024 ) && <div className="w-full flex flex-col lg:w-full special_left_padding">

            {convoId > -1 && <ChatBox chatsFetched={dataFetched} convoId={convoId} projectId={id} callback={fetchData} />}
            {convoId === -1 && <div className='flex justify-center items-center w-full h-screen font-light'>Select a conversation to continue.</div> }
        </div>}
        
      </div>














      {/* {dataFetched?.length > 0 && dataFetched.map((el, i) => {
      return (<div key={`el_${i}`} className="bg-white w-full mx-2 md:mx-4 my-4 border mx-auto shadow rounded-xl hover:shadow-md font-light transition-all flex justify-between items-center" style={{ maxWidth: '640px' }}>
      <Link to={`/conversations/${el.projectid}`}>
      <h3 className="font-normal text-gray-600 p-4 md:p-8">{el.projectname}</h3></Link> <div className="mr-8"><Link to={`/settings/${el.projectid}`}><i className="fa-solid fa-gear text-gray-300"/></Link></div></div>
      )
    })} */}
    
    </>
  );
};

export default Conversations;
