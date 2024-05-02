// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'; // Make sure the import path is correct
import Login from './Login';
import Logout from './Logout';
import Projects from './Projects';
import Conversations from './Conversations';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
          <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/projects' element={<Projects/>}/>
            <Route path="/conversations/:id" element={<Conversations/>} />
            <Route path="/settings/:id" element={<Conversations/>} />
          </Route>

        {/* <ProtectedRoute path="/dashboard" element={<Dashboard />} /> */}
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;