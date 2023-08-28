import React from 'react'
import './footer.scss';
import Logo from "../../assets/img/logoWhite.png"
import TgIcon from "../../assets/img/tg.png";
import InstaIcon from "../../assets/img/insta.png";
import FacebookIcon from "../../assets/img/facebook.png";
import PhoneIcon from "../../assets/img/Phone.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container px-0">
        <div class="row mb-5">
            <div class="col-md-3 logoFooter">
              <a href="#" class="footer-site-logo"><img src={Logo} alt="" /></a>
              <span>
                <img src={TgIcon} alt="" />
                <img src={InstaIcon} alt="" />
                <img src={FacebookIcon} alt="" />
              </span>
            </div>
            <div class="col-md-2 ml-auto firstCalFooter">
              <h3>Карта сайта</h3>
              <ul class="list-unstyled links linksFirstCal">
                <li><a href="#">О компании</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Фотогалерея</a></li>
                <li><a href="#">Акции</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </div>
            <div class="col-md-2 ml-auto firstCalFooter">
              <h3>Услуги</h3>
              <ul class="list-unstyled links linksFirstCal">
                <li><a href="#">УЗД</a></li>
                <li><a href="#">ЛОР</a></li>
                <li><a href="#">Гинеколог</a></li>
                <li><a href="#">Уролог</a></li>
                <li><a href="#">МСКТ</a></li>
              </ul>
            </div>
            <div class="col-md-2 ml-auto firstCalFooter">
              <h3>Наши контакты</h3>
                <ul class="list-unstyled links linksFirstCal">
                <li>
                  <span><img src={PhoneIcon} alt="" /></span>
                  <a className='contactTxt' href="#">+9987171207939</a>
                </li>
                <li>
                  <span><img src={TgIcon} alt="" /></span>
                  <a className='contactTxt' href="#">@ttduzbot</a>
                </li>
                <li>
                  <span><img src={InstaIcon} alt="" /></span>
                  <a className='contactTxt' href="#">@ttdclinic</a>
                </li>
                <li>
                  <span><img src={FacebookIcon} alt="" /></span>
                  <a className='contactTxt' href="#">TTD_clinic</a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
