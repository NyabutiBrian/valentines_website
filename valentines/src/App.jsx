import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { StrictMode } from "react";
import Welcome from './pages/Welcome';
import Landing from './pages/Landing';
import Yes from './pages/Yes';
import No from './pages/No';

import { inject } from '@vercel/analytics';
 
inject();

function App() {

  return (
    <>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            <Route path="/" element={ <Welcome /> } />
            <Route path="/home" element={ <Landing /> } />
            <Route path="/yes" element={ <Yes /> } />
            <Route path="/no" element={ <No /> } />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </>
  )
}

export default App
