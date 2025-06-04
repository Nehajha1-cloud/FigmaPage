import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from './SignUp';
import SignInPage from './SignIn';
import MainPage from './mainPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
