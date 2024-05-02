
import React, { useEffect, useState } from 'react';
import ApiService from '../ApiService';
import { default as Loader } from "../assets/loader.svg";
// import Button from "./Button";
import toast, { Toaster } from 'react-hot-toast';

const ChatBox = ({ chatsFetched, convoId = -1, projectId = 0, callback }) => {
  
  const [loadingState, setLoadingState] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const emptyField = () => toast('Message field is empty.', {
    style: {
      backgroundColor: '#e23650',
      color: '#ffffff',
    },
  });

  useEffect(() => { setNewMessage('')}, []);

  const findElementIndexByProperty = (data, property, value) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i][property] === value) {
        return i; // Return index if property value matches
      }
    }
    return -1; // Return -1 if element is not found
  };

  
  const handleChange = (e) => {
    const { value } = e.target;
    setNewMessage(value);
  };

  const indexSelected = findElementIndexByProperty(chatsFetched, "convoID", convoId);

  
  const sendMessage = async (e) => {
    e.preventDefault();
    if(newMessage?.length < 1) { emptyField(); return; }
    setLoadingState(true);
    const formData = {
      "convoid": convoId,
      "question": newMessage,
      "projectid": parseInt(projectId),
      "customerid": null,
    };
    try {
      const response = await ApiService.post('/answer', formData);
      console.log('Response:', response);
      
      setLoadingState(false);
      // navigate('/projects');
      // Handle response
      if(callback) callback();
      
    } catch (error) {
      setLoadingState(false);
      console.error('Error:', error);
      // wronglogin();
      // Handle error
    }
  };


  // console.log('Selected index is : ', indexSelected);
    return (
      <div className="w-full h-auto text-start text-left">
      <div className="flex flex-col flex-grow w-full h-screen  bg-white overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="my-8">&nbsp;</div>
          {chatsFetched.length > 0 && chatsFetched[indexSelected]?.convoHistory?.map((el, i) => { return <>
          
            {el?.human_data?.data &&
            <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex text-center items-center text-white justify-center">Me</div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">{el?.human_data?.data.content}</p>
              </div>
              <span className="text-xs text-gray-500 leading-none hidden">2 min ago</span>
            </div>
          </div>
          }
          {el?.ai_data?.data &&
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">{el?.ai_data?.data.content}</p>
              </div>
              <span className="text-xs text-gray-500 leading-none hidden">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex text-center items-center text-white justify-center">AI</div>
          </div>}
          </>;} )}
        </div>
        
        <div className="bg-white-300 p-4 flex">
        <Toaster/>
          <input disabled={loadingState} value={newMessage} className="flex items-center h-10 w-full border-gray-300 border rounded px-3 text-sm" onChange={handleChange} type="text" placeholder="Type your message…"/>
          <button title="Send" tabIndex="0" disabled={loadingState} className={`${loadingState ? 'bg-gray-100' : 'bg-white'} border border-gray-300 px-4 text-gray-600 rounded ml-2`} onClick={sendMessage}>
            {loadingState && <img src={Loader}  alt="loading"/>}
            {!loadingState && <i className="fa-regular fa-paper-plane text-gray-600"/>}
          </button>
        </div>
      </div>
      </div>
    );
  };
  
  export default ChatBox;
