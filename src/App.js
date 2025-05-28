import React from 'react';
import './App.css';

import SignInPage from './SignIn';
import SignUp from './SignUp';
import MainPage from './mainPage';

function App() {
  return (
    <div className="App">
      <SignInPage />
      <SignUp/>
      <MainPage/>
    </div>
  );
}

export default App;
