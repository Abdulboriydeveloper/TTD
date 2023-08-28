import React from 'react'
import './App.css';
import { PiPhone } from 'react-icons/pi'; 
import PhoneIcon from "./assets/img/перезвон.png"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/navbar";
import Footer from "./pages/footer/footer";
import Home from "./pages/home/home"

function App() {
  return (
    <div className="App">
      <div className="fixed-icon-container">
        <img className="rotate-icon" src={PhoneIcon} alt='phone'/>
      </div>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route exact path='/' element = {< Home />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
