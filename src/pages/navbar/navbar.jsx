import './navbar.scss';
import Logo from "../../assets/img/logo1.png";
import LogoNav from "../../assets/img/logo2.png";
import TgLogo from "../../assets/img/Vectortg.png";
import InstaLogo from "../../assets/img/Vectorinsta.png";
function Navbar () {


return(
    <>
        {/* Navbar */}
        <div className='navWrap'>
            <div className="container px-0">
                <div class="content">
                    <a class="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                    <div className='addresNav'>
                        <h5>Клиника лабораторных исследований</h5>
                        <p>г. Ташкент, Чиланзарский ул. Чапаната, 6/2 (ориентир: метро Мирзо Улугбека)</p>
                    </div>
                    <div className='contactNav'>
                        <p>График работы: 24/7</p>
                        <p>Горячая линия: +998712079394</p>
                        <p className=''>Социальные сети:
                            <span>
                                <img src={TgLogo} alt="" />
                                <img className='px-1' src={InstaLogo} alt="" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-0">
                        <a class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" href="#"><img src={LogoNav} alt="" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">О компании </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Услуги</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Фотогалерея</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Контакты</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Акции</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">RU</a>
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