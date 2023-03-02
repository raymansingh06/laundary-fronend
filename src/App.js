
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './componants/login-registertion/login/login';
import Registration from './componants/login-registertion/registration/registeration';
// import ForgotPassword from './componants/login-registertion/forgotPassword/forgotpwd';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Registration />}/>
         
          <Route path='/forgotpassword' element={<ForgotPassword/>}/> 
         
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}  

export default App;

