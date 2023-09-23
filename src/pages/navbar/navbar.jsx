import './navbar.scss';
import { useState, useEffect } from 'react';
import Logo from "../../assets/img/logo1.png";
import LogoNav from "../../assets/img/logo2.png";
import LogoMobile from "../../assets/img/logoMobile.png";
import TgLogo from "../../assets/img/Vectortg.png";
import InstaLogo from "../../assets/img/Vectorinsta.png";
import { useTranslation } from 'react-i18next';
function Navbar () {
    const { t , i18n} = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    const [fixed, setFixed] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 95) {
                setFixed(true) 
            } else{
                setFixed(false)
            }
        })
    }, [])

return(
    <>
        {/* Navbar */}
        <div className='navWrap'>
            <div className="container-xl px-0">
                <div class="content">
                    <a class="navbar-brand" href="/"><img src={Logo} alt="" /></a>
                    <div className='addresNav'>
                        <h5>Клиника лабораторных исследований</h5>
                        <p>г. Ташкент, Чиланзарский ул. Чапаната, 6/2 (ориентир: метро Мирзо Улугбека)</p>
                    </div>
                    <div className='contactNav'>
                        <p>График работы: 24/7</p>
                        <p>Горячая линия: <a href="tel+998712079394">+998712079394</a></p>
                        <p className=''>Социальные сети:
                            <span>
                                <a href="https://t.me/ttduzbot"><img src={TgLogo} alt="" /></a>
                                <a href="#"><img className='px-1' src={InstaLogo} alt="" /></a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
                <nav class={fixed ? "fixedNav navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-light bg-light"} >
                    <div className="container-xl px-0">
                        <a class="navbar-toggler px-0"  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" href="/">
                            <img className='px-0' src={LogoMobile} alt="" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">О компании </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/usluga">Услуги</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/gallery">Фотогалерея</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/aksiya">Акции</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact">Контакты</a>
                                </li>
                                <li class="nav-item">
                                    <select className='language'
                                        // onChange={handleLanguageChange}
                                        >
                                        <option value='ru'>Ru</option>
                                        {/* <option value='en'>En</option> */}
                                        <option value='oz'>Uz</option>
                                        {/* <option value='uz'>Уз</option> */}
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
        {/* Navbar */}
    </>
)
}

export default Navbar;