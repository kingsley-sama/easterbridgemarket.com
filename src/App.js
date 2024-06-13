import React, { useState } from 'react';
import { BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
function App() {

  return (
    <div className='App'>
      <Router >
        <Routes>
        </Routes>
        <div className='background'>
          <h1>Welcome To <br/>EasterBridgeMarket.com</h1>
        </div>
      </Router>
    </div>
  );
}

export default App;
