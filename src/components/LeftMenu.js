/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */

const LeftMenu = ({ chatData, convoId = -1, isLoading = false, callback, setPaginationNumber, paginationNumber = 0, totalConversations = 0 }) => {
  console.log('totalConversations: ', totalConversations);
    const chatList = chatData;
    const showChatsList = () =>  {
      if(!chatList || chatList?.length < 1) return;
        let l = chatList.map((item, index) => 
        (<li>
        <button  disabled={isLoading} style={{ maxWidth: '290px', width: '290px' }} onClick={()=> { if(callback) callback(item.convoID); }} href="#" key={index} className={` px-6 text-gray-700 hover:text-indigo-600 ${item.convoID === convoId ? 'bg-gray-50' : ''} hover:bg-gray-100 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600">{item?.convoHistory[0]?.human_data?.data?.content[0] || '-'}</span>
          <span className="truncate">{item?.convoHistory[0]?.human_data?.data?.content || ''}</span>
        </button>
      </li>)

     );
    
    return l;
};

const PaginationComponent = () => {
  let numberOfPages = parseInt(totalConversations / 20);
  if (totalConversations % 20 > 0)
    numberOfPages += 1;
    var indents = [];
    for (var i = 0; i < numberOfPages; i++) {
    indents.push(<option value={i}>{i+1}</option>);
    }

  return (
  <select name="convo_page_no" value={paginationNumber} disabled={isLoading} id="convo_page_no" className="border mx-2 rounded p-1 border-gray-200 bg-white text-gray-600 rounded p-2" onChange={e => setPaginationNumber(e.target.value)}>
    {indents}
  </select>);
};
      return (
        <div className="relative md:fixed lg:inset-y-0 lg:z-50 lg:flex w-full lg:w-72 lg:flex-col  bg-white" style={{ marginTop: '73px' }}>
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r  border-gray-200 bg-white ">
       
            <div className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7 truncate">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                  
                  <li>
                      <a href="/projects" className="bg-gray-50 px-6 text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg className="h-6 w-6 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        « Projects
                      </a>
                    </li>
                    <li className="hidden">
                      <a href="#" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" fill="none"viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
      
                        Settings
                      </a>
                    </li>
                    <li className="hidden">
                      <a href="#" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                        Files
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                        Files
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="#" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                        </svg>
                        Reports
                      </a>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400 px-4">Your chats</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1 ">
                    {showChatsList()}
                    {/* <li>
                      <a href="#" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600">T</span>
                        <span className="truncate">Tailwind Labs</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600">W</span>
                        <span className="truncate">Workcation</span>
                      </a>
                    </li> */}
                    
                  </ul>
                  
                  { totalConversations > 20 ? <div className="flex justify-center text-center items-center text-sm my-4">Page <PaginationComponent/> of {Math.ceil(totalConversations/20)} </div> : <></> }
                </li>
                <li className="-mx-6 mt-auto hidden">
                  <div href="#" className="flex justify-center items-center gap-x-12 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">you@example.com</span>
                    <span className="font-xs" style={{ color: '#2461E6'}} aria-hidden="true"><a href="/logout">Logout</a></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
};

export default LeftMenu;
