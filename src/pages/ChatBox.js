
function ChatBox() {
    return (
      <div className="w-full h-auto text-start text-left">
      <div className="flex flex-col flex-grow w-full h-screen  bg-white overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="my-4">&nbsp;</div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
        
        <div className="bg-gray-300 p-4">
          <input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"/>
        </div>
      </div>
      </div>
    );
  }
  
  export default ChatBox;
