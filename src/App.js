import React, {Suspense, useState, useEffect} from 'react'
import './App.css';
import { PiPhone } from 'react-icons/pi'; 
import PhoneIcon from "./assets/img/перезвон.png"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/navbar";
import Footer from "./pages/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about"
import Usluga from "./pages/usluga/usluga";
import Fotogallery from "./pages/fotogallery/fotogallery";
import Aksiya from "./pages/aksiya/aksiya";
import Contact from "./pages/contact/contact";
import Animation from "./pages/animation/animation";


function App() {
  const [loader, setLoader] = useState(true)

  return (
    <>
      {
        loader?
          <div className="App">
            <div className="fixed-icon-container">
              <img className="rotate-icon" src={PhoneIcon} alt='phone'/>
            </div>
            <BrowserRouter>
              <Navbar />
                <Suspense fallback={< Animation />}>
                  <Routes>
                      <Route exact path='/' element = {< Home />}></Route>
                      <Route exact path='/about' element = {< About />}></Route>
                      <Route exact path='/usluga' element = {< Usluga />}></Route>
                      <Route exact path='/gallery' element = {< Fotogallery />}></Route>
                      <Route exact path='/aksiya' element = {< Aksiya />}></Route>
                      <Route exact path='/contact' element = {< Contact />}></Route>
                  </Routes>
                </Suspense>
                <Footer />
            </BrowserRouter>
          </div> : <><Animation /></>
      }
    </>
  );
}

export default App;
