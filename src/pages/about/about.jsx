import React from 'react'
import './about.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AboutTopImg from "../../assets/img/aboutImg2.png";
import AboutImg3 from "../../assets/img/aboutImg3.png";
import Covid from "../../assets/img/covid.png";
import Mikroskop from "../../assets/img/misroskop.png";
import SliderImg from "../../assets/img/news5.png";
import X8 from "../../assets/img/x8.png";
import X3 from "../../assets/img/x3.png";
import Plus240 from "../../assets/img/240plus.png";
import Bs430 from "../../assets/img/bs430.png";
import Acl350 from "../../assets/img/acl350.png";
import Chart from "../../assets/img/aboutChart.png";
import Img18 from "../../assets/img/image18.png";


function About() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 500,
        // autoplay: true,
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
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
            image: SliderImg,
            name: "Анализ Меди и Цинка?",
            rating: 5,
            caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
            image: SliderImg,
            name: "Витамин D?",
            rating: 4,
            caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
            image: SliderImg,
            name: "Что делать, если замучила аллергия?",
            rating: 5,
            caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
            image: SliderImg,
            name: "Анализ Меди и Цинка?",
            rating: 4,
            caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
            image: SliderImg,
            name: "Анализ Меди и Цинка?",
            rating: 5,
            caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
          image: SliderImg,
          name: "Анализ Меди и Цинка?",
          rating: 4,
          caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
          image: SliderImg,
          name: "Что делать, если замучила аллергия?",
          rating: 5,
          caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
          image: SliderImg,
          name: "Анализ Меди и Цинка?",
          rating: 4,
          caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
          image: SliderImg,
          name: "Анализ Меди и Цинка?",
          rating: 4,
          caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
          image: SliderImg,
          name: "Анализ Меди и Цинка?",
          rating: 5,
          caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
          image: SliderImg,
          name: "Анализ Меди и Цинка?",
    
          rating: 5,
          caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        },
        {
          image: SliderImg,
          name: "Анализ Меди и Цинка?",
          rating: 5,
          caption: "Новое исследование показало связь между дефицитом меди и цинка и риском развития сердечно-сосудистых заболеваний. Обратитесь к нам, чтобы проверить свой уровень этих элементов.",
        }
    ]

    const AppaData = [
        {
            image: X8,
            name: "Автоматический иммуноанализатор MAGLUMI X8",
            description: "Особенность： Пропускная способность: Постоянные 240 тестов в час 24 часа в сутки готовый к использованию Спецификация Модуль образца На диске с образцами можно непрерывно загружать до 90 позиций со штрих-кодом Микропипетная технология, объем образца на один тест может быть уменьшен до 2,0 мкл Пакетный, Случайный доступ, доступный канал СТАТ подача реагента Реагентный диск имеет до 90 позиций реагента, температура 2 ° C-12 ° C, со считывателем штрих-кода реагента Обнаружение реагентов в режиме реального времени, отображение оставшегося количества тестов Функция автоматической замены реагентов, применяемая в смотровой системе для массового контроля Система фотометрии Плоская полевая решётка с голографической вогнутостью, технология задней спектроскопии Диапазон длин волн: 340-800 нм, одновременно на 16 длинах волн для обнаружения Стабильная система обнаружения оптических траекторий, широкий линейный диапазон поглощения, высокое разрешение."
        },
        {
            image: Plus240,
            name: "Автоматический биохимический анализатор Biossays 240 Plus",
            description: "Особенность： Пропускная способность: Максимум 600 тестов в час до 2400 тестов в час (четыре модуля вместе взятые) 24 часа работы Время до первого результата: 15 мин Возможность подключения системы автоматизации лаборатории (TLA/LAS) Спецификация Спецификации: Принцип свечения Неферментная хемилюминесценция, высокая чувствительность и длительная стабильность этикетка ABEI, стабильная в растворе кислоты и щелочи Разделение магнитных микробов, быстрое и эффективное Технические характеристики до 300 позиций образца 42 позиции реагентов на борту Конструкция с одной чашкой (до 2912 кювет) Непрерывная загрузка образцов и реагентов, в наличии STAT Режимы работы Случайные, пакетные и STAT"
        },
        {
            image: X3,
            name: "Maglumi X3",
            description: "Особенность： Пропускная способность: Максимум 600 тестов в час до 2400 тестов в час (четыре модуля вместе взятые) 24 часа работы Время до первого результата: 15 мин Возможность подключения системы автоматизации лаборатории (TLA/LAS) Спецификация Спецификации: Принцип свечения Неферментная хемилюминесценция, высокая чувствительность и длительная стабильность этикетка ABEI, стабильная в растворе кислоты и щелочи Разделение магнитных микробов, быстрое и эффективное Технические характеристики до 300 позиций образца 42 позиции реагентов на борту Конструкция с одной чашкой (до 2912 кювет) Непрерывная загрузка образцов и реагентов, в наличии STAT Режимы работы Случайные, пакетные и STAT"
        },
        {
            image: Bs430,
            name: "MINDRAY BS 430",
            description: "Особенность： Пропускная способность: Максимум 600 тестов в час до 2400 тестов в час (четыре модуля вместе взятые) 24 часа работы Время до первого результата: 15 мин Возможность подключения системы автоматизации лаборатории (TLA/LAS) Спецификация Спецификации: Принцип свечения Неферментная хемилюминесценция, высокая чувствительность и длительная стабильность этикетка ABEI, стабильная в растворе кислоты и щелочи Разделение магнитных микробов, быстрое и эффективное Технические характеристики до 300 позиций образца 42 позиции реагентов на борту Конструкция с одной чашкой (до 2912 кювет) Непрерывная загрузка образцов и реагентов, в наличии STAT Режимы работы Случайные, пакетные и STAT"
        },
        {
            image: Acl350,
            name: "ACL TOP 350 CTS",
            description: "Особенность： Пропускная способность: Максимум 600 тестов в час до 2400 тестов в час (четыре модуля вместе взятые) 24 часа работы Время до первого результата: 15 мин Возможность подключения системы автоматизации лаборатории (TLA/LAS) Спецификация Спецификации: Принцип свечения Неферментная хемилюминесценция, высокая чувствительность и длительная стабильность этикетка ABEI, стабильная в растворе кислоты и щелочи Разделение магнитных микробов, быстрое и эффективное Технические характеристики до 300 позиций образца 42 позиции реагентов на борту Конструкция с одной чашкой (до 2912 кювет) Непрерывная загрузка образцов и реагентов, в наличии STAT Режимы работы Случайные, пакетные и STAT"
        },
    ]

  return (
    <>
        <div className='aboutPage'>
            <div className="aboutPageTop">
                <div className="container-xl">
                    <div className="aboutTopRow row">
                        <div className="col topContent">
                            <p>Постоянное развитие - <br /> <b>залог высокого качества</b></p>
                            <h6>Высокие стандарты и требования помогают нам держать планку одной из лучших лабораторий в городе</h6>
                        </div>
                        <div className="col abotTopImg">
                            <img src={AboutTopImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutClinicWrapper">
                <div className="container-xl aboutClinic">
                    <h1 className='aboutClinicTitleMobile'>О <b>Клинике</b></h1>
                    <div className="clinicImg">
                        <img className='chartImg' src={Chart} alt="" />
                        <img className='img1' src={AboutImg3} alt="" />
                        <img className='img2' src={Covid} alt="" />
                        <img className='img3' src={Mikroskop} alt="" />
                        <img className='img18' src={Img18} alt="" />
                    </div>
                    <div className="clinicText">
                        <h1>О <b>Клинике</b></h1>
                        <p>Добро пожаловать на сайт компании "Toshkent Tibbiy Diagnostika", которая предоставляет медицинские услуги в городе Ташкент уже более 9 лет. Мы являемся одним из ведущих медицинских центров в городе и специализируемся на предоставлении диагностических обследований с использованием современного оборудования.</p>
                        <p>Мы гордимся тем, что мы оснастили нашу клинику самым современным оборудованием, которое позволяет нам предоставлять нашим пациентам высококачественную медицинскую помощь. Наша команда состоит из профессионалов своего дела, которые всегда готовы помочь нашим пациентам в любой ситуации.</p>
                        <p>Мы предоставляем широкий спектр диагностических обследований, включая биохимические и иммунологические тесты, ультразвуковое и рентгеновское исследование, а также другие современные методики. Мы также предлагаем консультации квалифицированных специалистов, которые помогут нашим пациентам разобраться в их состоянии здоровья и найти оптимальное решение для их лечения.</p>
                    </div>
                </div>
                <div className="aboutSlider">
                    <h1>Новости</h1>
                    <div className="sliderRow">
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
                                        <p>{slide.caption}</p>
                                    </div>
                                )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
                
                <div className="apparats">
                    <div className="container-xl">
                        <h1>Оборудование</h1>
                        <div className="appRow row">
                            {AppaData.map((item, i) => {
                                return (
                                    <div className='app_card'>
                                        <div className="appCardContent">
                                            <h6>{item.name}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                        <img
                                            className="d-block w-100"
                                            src={item.image}
                                            alt="app"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default About;
