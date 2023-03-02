import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './componants/login-registertion/login/login';
import Registration from './componants/login-registertion/registration/registeration';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Registration />}/>
         
         
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}  

export default App;
