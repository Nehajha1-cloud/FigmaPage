import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './SignIn';
import SignUp from './SignUp';
import MainPage from './mainPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </Router>
      <MainPage/>
    </div>
  );
}

export default App;
