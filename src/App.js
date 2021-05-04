import React from 'react';
import AuthContextProvider from './context/AuthContext';
import  Routes  from './Routes';

const App = () => {

  

  return (
    <div>
      <AuthContextProvider>
        <Routes/>
      </AuthContextProvider>
      
    </div>
  );
};

export default App;