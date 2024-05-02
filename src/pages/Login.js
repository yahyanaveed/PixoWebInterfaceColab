/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken"
import Button from "../components/Button";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loadingState, setLoadingState] = useState(false);

  const wronglogin = () => toast('Incorrect login credentials.', {
    style: {
      backgroundColor: '#e23650',
      color: '#ffffff',
    },
  });
  const errorlogin = () => toast('Error while logging-in.', {
    style: {
      backgroundColor: '#e23650',
      color: '#ffffff',
    },
  });

  const handleSubmit = (username, password) => {
    //reqres registered sample user
    // const loginPayload = {
    //   username: 'dev_team',
    //   password: 'iurnf(/T3!!',
    //   scope: '',
    //   client_id: '',
    //   client_secret: '',
    //   grant_type: '',
    // }
    const params = new URLSearchParams();
    const un = document.getElementsByName('username')[0]?.value?.length > 0 ? document.getElementsByName('username')[0].value : '-';
    const pw = document.getElementsByName('password')[0]?.value?.length > 0 ? document.getElementsByName('password')[0].value : '-';
  
    params.append('username', un);
    params.append('password', pw);
    params.append('scope', '');
    params.append('client_id', '');
    params.append('client_secret', '');
    params.append('grant_type', '');

    setLoadingState(true);
    axios.post("http://165.227.141.46:8000/token", params,
    { headers: { 'content-type': 'application/x-www-form-urlencoded' }})
      .then(response => {
        //get token from response
        console.log('response: ', response);
        if(response.data)
        {

        
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        
        setLoadingState(false);
        
        //redirect user to dashboard
        navigate("/dashboard");
        } else {
          errorlogin();
          setLoadingState(false);
        }
      })
      .catch(err => { wronglogin(); console.log(err); 
        setLoadingState(false);
      });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const [username, password] = event.target.children;
        handleSubmit(username, password);
      }}
    > 
    <Toaster/>

       <div className="container mx-auto p-8 h-screen flex flex-col items-center justify-center ">
        <div className="max-w-md w-full h-screen mx-auto flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center mb-12 font-thin">PixoWeb</h1>

            <div className="bg-white w-full rounded-lg overflow-hidden p-6 shadow-2xl">
                <div className="p-8">
                        <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-600">Email</label>

                            <input disabled={loadingState} type="text" name="username" id="username" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                        </div>
                
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

                            <input disabled={loadingState} type="text" id="password" name="password" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                        </div>

                        <Button stateButton={!loadingState ? 'default': 'loading'} labelButton="Login" labelLoading="Logging-in" customStyle="mt-10 p-3 "/>
          
                </div>
                
                <div className="flex hidden justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                    <a href="#" className="font-medium text-indigo-500">Create account</a>

                    <a href="#" className="text-gray-600">Forgot password?</a>
                </div>
            </div>
            <div className="text-gray-600 text-xs mt-4"><input disabled={loadingState}    type="checkbox"/> Stay logged-in for 30 days?</div>
        </div>
    </div>
    </form>
  );
}
export default Login;