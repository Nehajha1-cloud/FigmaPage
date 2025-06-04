import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import SignUp from './SignUp';
import SignInPage from './SignIn';
import MainPage from './mainPage';

export default function App() {
  return (
  <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
  );
}
