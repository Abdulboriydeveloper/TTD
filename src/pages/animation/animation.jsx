import React, {useState, useEffect} from 'react'
import './animation.scss';
import Ttd from "../../assets/img/ttd.png"
import Aos from 'aos';
import 'aos/dist/aos.css'

function Animation() {
    useEffect(() =>{
        Aos.init();
    })
  return (
    <>
    <section  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="500" 
     data-aos-easing="ease-in-sine">
        <img src={Ttd} alt="" />
        <div 
             className="glass">
             <div className="inner">
                <div className="liquid">

                </div>
             </div>
        </div>
    </section>
    </>
  );
}

export default Animation;