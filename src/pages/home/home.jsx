import React, {useState, useEffect} from 'react'
import StarRatings from 'react-star-ratings';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Map from "../map/map";
import './home.scss';
import PriceList from "../../component/priceList"
import homeImg from "../../assets/img/Group362.png";
import SearchIcon from "../../assets/img/searchIcon.png";
import CardImg from "../../assets/img/card.png";
import DiscountImg from "../../assets/img/discountImg.png";
import DocImg from "../../assets/img/док.png";
import DocImg2 from "../../assets/img/док2.png";
import ClinicImg from "../../assets/img/ттдфотка.png";
import NewsCard from "../../assets/img/news5.png";
import NewsCard2 from "../../assets/img/news6.png";
import Dddd from "../../assets/img/dddd.png";
import Dddd2 from "../../assets/img/dddd2.png";
import TtdFoto2 from "../../assets/img/ттдфотка2.png";
import ModalImg from "../../assets/img/pose_8.png";

function Home() {

  const settings = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 3.5,
    speed: 500,
    dots: false,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                rows: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2,
            }
        },
        {
          breakpoint: 390,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 2,
              // slidesPerRow: 2
          }
      }
    ],
    afterChange: function (index) {
        console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
    }
};

const data = [
    {
        image: "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
        name: "Тереньтьева Виктория",
        rating: 5,
        caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
        image: "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
        name: "Тереньтьева Виктория",
        rating: 4,
        caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
        image: "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
        name: "Тереньтьева Виктория",
        rating: 5,
        caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
        image: "https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo",
        name: "Тереньтьева Виктория",
        rating: 4,
        caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
        image: "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
        name: "Тереньтьева Виктория",
        rating: 5,
        caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
      image: "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
      name: "Тереньтьева Виктория",
      rating: 4,
      caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
      image: "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
      name: "Тереньтьева Виктория",
      rating: 5,
      caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
      image: "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
      name: "Тереньтьева Виктория",
      rating: 4,
      caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
      image: "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
      name: "Тереньтьева Виктория",
      rating: 4,
      caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
      image: "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
      name: "Тереньтьева Виктория",
      rating: 5,
      caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
      image: "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
      name: "Тереньтьева Виктория",

      rating: 5,
      caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    },
    {
      image: "https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs",
      name: "Тереньтьева Виктория",
      rating: 5,
      caption: "Очень понравилось качество обслуживания, хочу выразить отдельную благодарность администрации лаборатории",
    }
]

const [tel, setTel] = useState('');
const [show4, setShow4] = useState(false);

const closeModal4 = () => {
  setShow4(false)
}
const saveModal4 = (e) => {
  e.stopPropagation();
}


const formatPhone = (val) => {
  const phone = val.replace(/[^\d]/g, '')

  if(val.length > 0) {

  if(phone.length < 3) {
    return phone
  } 
  if(phone.length < 6) {
    return `(${phone.slice(0, 2)})` + ' ' + `${phone.slice(2, 5)}`
  }
  if(phone.length < 8) {
    return `(${phone.slice(0, 2)})` + ' ' + `${phone.slice(2, 5)}` + `- ${phone.slice(5, 7)}`
  }
  if(phone.length < 10) {
    return `(${phone.slice(0, 2)})` + ' ' + `${phone.slice(2, 5)}` + `- ${phone.slice(5, 7)}` + `- ${phone.slice(7, 9)}`
  }
  } else return val
}

  return (
    <>

      {/* /////// First //////// */}

      <div className="home1">
        <div className="container-xl px-0">
          <div class="row">
            <div class="col px-0 col1">
              <div className='col1_content'>
                <h1>Высокотехнологичная <b>лаборатория</b></h1>
                <p>СОВРЕМЕННАЯ АВТОМАТИЗИРОВАННАЯ ЛАБОРАТОРИЯ</p>
                <button className='homeBtn' onClick={setShow4}>Оборудование</button>
              </div>
            </div>
            <div class="col px-0 col2">
              <img src={homeImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {show4 ? <div className="home_modal" onClick={closeModal4}>
            <div className="home_modal_inner" onClick={saveModal4}>
              <>
                <div  className="home_modal_header">
                  {/* <p className="modal_close_icon" onClick={closeModal4}>✕</p> */}
                </div>
                <div className="form-group home_modal_body">
                  <div className="popup-book_item row">
                    <div className="modal_content">
                      <h1>Есть <b>вопросы?</b></h1>
                      <p>Оставьте номер и мы перезвоним!</p>
                      {/* <input type="text" placeholder='+998_99_999_99_99' /> */}
                      <div className="nummmPhone">
                        <p>+998</p>
                        <input
                          name="phoneNumber"
                          type='text'
                          placeholder='99_999_99_99'
                          className="passwordLogin"
                          autoComplete="off"
                          // value={formatPhone(tel)}
                          // onChange={(e) => setTel(e.target.value)}
                          required
                          max='9'
                          maxLength='9'
                          aria-label="Please enter your phone number"
                          id="phone-input"
                        />
                      </div>
                      <button>Перезвоните мне</button>
                    </div>
                    <div className="img_modal">
                      <img src={ModalImg} alt="" />
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div> : null}
        {/* Modaaaaalll */}

      {/* /////// Price //////// */}
      <div className="priceWrap">
        <div className="container-xl price">
          <PriceList/>
        </div>
      </div>

      {/* /////// Usluga //////// */}

      <div className="popular_usluga_wrap">
        <div className="container-xl px-0 popular_usluga">
          <div className="usluga_header_text">
            <p>Популярные <b>услуги</b></p>
          </div>
          <div className="usluga_cards">
            <div className="row">
              <div className="col-6 card">
                <img src={CardImg} alt="" />
                <div className="content_card">
                  <h1>УЗД щитовидной железы</h1>
                  <p>Ультразвуковое исследование сосудов шеи позволяет оценить кровообращение в основных магистралях, питающих головной мозг.</p>
                </div>
              </div>
              <div className="col-6 card">
                <img src={CardImg} alt="" />
                <div className="content_card">
                  <h1>Общий анализ крови</h1>
                  <p>Ультразвуковое исследование сосудов шеи позволяет оценить кровообращение в основных магистралях, питающих головной мозг.</p>
                </div>
              </div>
              <div className="col-6 card">
                <img src={CardImg} alt="" />
                <div className="content_card">
                  <h1>Глюкоза натощак</h1>
                  <p>Ультразвуковое исследование сосудов шеи позволяет оценить кровообращение в основных магистралях, питающих головной мозг.</p>
                </div>
              </div>
              <div className="col-6 card">
                <img src={CardImg} alt="" />
                <div className="content_card">
                  <h1>МСКТ</h1>
                  <p>Ультразвуковое исследование сосудов шеи позволяет оценить кровообращение в основных магистралях, питающих головной мозг.</p>
                </div>
              </div>
            </div>
          </div>
          <button className='uslugaBtn'>Смотреть все услуги</button>
        </div>
      </div>

      {/* /////// Discount //////// */}
      <div className="discountWrap">
        <div className="container-xl px-0 ">
          <h1 className='aksiyaTitle1'>Акция</h1>
          <div className='discount'>
            <img src={DiscountImg} alt="" />
            <div className="discountContent">
              <h1 className='aksiyaTitle2'>Акция</h1>
              <h5>УЗД щитовидной железы бесплатно</h5>
              <p>Каждый день с 15.00 до 7.00</p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </div>

      {/* /////// About ////// */}

      <div className="about">
        <div className="container-xl px-0">

          {/* Top */}

          <div className="topBlock">
            <p className='topBlockTitle'>Наши <b>направления</b></p>
            <div className='topContent'>
              <div className="img2">
                <img src={DocImg2} alt="" />
              </div>
              <div className="buttons">
                <button className='btn1'>ЛОР</button>
                <button>Терапевт</button>
                <button>Гинеколог</button>
                <button className='btn1' >Кардиолог</button>
              </div>
              <div className="img">
                <img src={DocImg} alt="" />
              </div>
              <div className="buttons">
                <button className='btn2'>Эндокринолог</button>
                <button>Уролог</button>
                <button>Невропатолог</button>
                <button className='btn2'>Гепатолог</button>
              </div>
            </div>
            <button className='topBlockBtn'>Подробнее</button>
          </div>

          {/* Questions */}

          <div className="question_block">
            <p>Часто задаваемые <b>вопросы</b></p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Есть ли у нас выезд на забор анализов?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>
                      Многослойная, или по-другому, мультиспиральная компьютерная томография – один из неинвазивных способов диагностики широкого спектра заболеваний нервной, лимфатической, сердечно-сосудистой и других систем.
                      Метод применяют уже больше полувека (с 1992 года), причем число срезов (или слоев) постоянно растет.
                      Аппараты последнего поколения могут создавать до 640 срезов, благодаря чему улучшается визуализация картинок и сокращается время исследования.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    До скольки мы работаем?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>
                      Многослойная, или по-другому, мультиспиральная компьютерная томография – один из неинвазивных способов диагностики широкого спектра заболеваний нервной, лимфатической, сердечно-сосудистой и других систем.
                      Метод применяют уже больше полувека (с 1992 года), причем число срезов (или слоев) постоянно растет.
                      Аппараты последнего поколения могут создавать до 640 срезов, благодаря чему улучшается визуализация картинок и сокращается время исследования.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Есть ли у нас процедурные кабинеты?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>
                      Многослойная, или по-другому, мультиспиральная компьютерная томография – один из неинвазивных способов диагностики широкого спектра заболеваний нервной, лимфатической, сердечно-сосудистой и других систем.
                      Метод применяют уже больше полувека (с 1992 года), причем число срезов (или слоев) постоянно растет.
                      Аппараты последнего поколения могут создавать до 640 срезов, благодаря чему улучшается визуализация картинок и сокращается время исследования.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                    Что такое МСКТ?
                  </button>
                </h2>
                <div id="collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>
                      Многослойная, или по-другому, мультиспиральная компьютерная томография – один из неинвазивных способов диагностики широкого спектра заболеваний нервной, лимфатической, сердечно-сосудистой и других систем.
                      Метод применяют уже больше полувека (с 1992 года), причем число срезов (или слоев) постоянно растет.
                      Аппараты последнего поколения могут создавать до 640 срезов, благодаря чему улучшается визуализация картинок и сокращается время исследования.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* abouttt clinic */}

          <div className="about_clinic">
            <div className="about_clinic_content">
              <p>О <b>Клинике</b></p>
              <div className="about_clinic_img2">
                <img src={TtdFoto2} alt="" />
              </div>
              <h6>
                Добро пожаловать на сайт компании "Toshkent Tibbiy Diagnostika", 
                которая предоставляет медицинские услуги в городе Ташкент уже более 
                9 лет. Мы являемся одним из ведущих медицинских центров в городе и 
                специализируемся на предоставлении диагностических обследований с 
                использованием современного оборудования.
              </h6>
              <button>Подробнее</button>
            </div>
            <div className="about_clinic_img">
              <img src={ClinicImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* //////News////// */}

      <div className="news">
        <div className="container-xl px-0 latest_news">
          <p>Последние <b>новости</b></p>
          <div className="cards_news_wrap">
            <div className="news_card">
              <img src={NewsCard} alt="newsImg" />
              <h1>Что делать, если замучила аллергия?</h1>
              <p>Новый анализ крови на аллергены теперь доступен в нашей лаборатории. Обратитесь к нам, чтобы проверить свою чувствительность к различным веществам.</p>
            </div>
            <div className="news_card">
              <img src={NewsCard2} alt="newsImg" />
              <h1>Анализ Меди и Цинка?</h1>
              <p>Новый анализ крови на аллергены теперь доступен в нашей лаборатории. Обратитесь к нам, чтобы проверить свою чувствительность к различным веществам.</p>
            </div>
            <div className="news_card">
              <img src={NewsCard} alt="newsImg" />
              <h1>Витамин D?</h1>
              <p>Новый анализ крови на аллергены теперь доступен в нашей лаборатории. Обратитесь к нам, чтобы проверить свою чувствительность к различным веществам.</p>
            </div>
          </div>
          <div className="carousel_title">
            <p>Отзывы <b>наших пациентов</b></p>
          </div>
        </div>

        <div className="otziv_client">
          <div className="col">
              <Slider {...settings}>
                {data.map((slide, i) => {
                  return (
                    <div className='slide_card'>
                      <img
                        className="d-block w-100"
                        src={slide.image}
                        alt="slide"
                      />
                      <h6>{slide.name}</h6>
                      <div className="star_box">
                        <StarRatings
                          rating={slide?.rating}
                          starRatedColor="#F3CD03"
                          numberOfStars={5}
                          name='rating'
                        />
                      </div>
                      <p>{slide.caption}</p>
                    </div>
                  )
                })}
              </Slider>
          </div>
        </div>

      </div>

      {/* contact */}
      <div className="contactWrapper">
        <div className="container-xl px-0 contact">
          <h1>Контакты</h1>
          <div className="dddd">
            <img className='img1' src={Dddd} alt="" />
          </div>
          <div className="map">
            <Map/>
          </div>
          <div className="dddd2">
            <img className='img1' src={Dddd2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
