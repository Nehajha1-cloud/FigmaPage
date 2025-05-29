import React from 'react';
import './App.css';

import {Routes, Route } from 'react-router-dom';
import SignInPage from './SignIn';
import SignUp from './SignUp';
import MainPage from './mainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
       <MainPage />
  </div>
  );
}

export default App;
