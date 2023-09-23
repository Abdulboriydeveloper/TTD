import React from 'react'
import './usluga.scss';
import ImgUsluga from "../../assets/img/usluga2.png";
import Pricelist from "../../component/priceList";
import UslugaImg1 from "../../assets/img/uslugaImg1.png";
import UslugaImg2 from "../../assets/img/uslugaImg2.png";
import UslugaImg3 from "../../assets/img/uslugaImg3.png";
import Doc1 from "../../assets/img/doc1.png";
import Doc2 from "../../assets/img/doc2.png";
import Doc3 from "../../assets/img/doc3.png";
function Usluga() {

    const data = [
        {
            image: UslugaImg1,
            usluga_name: "Лабораторная диагностикаВиктория",
            caption: "Лабораторная диагностика",
        },
        {
            image: UslugaImg2,
            usluga_name: "Ультразвуковая диагностика",
            caption: "уЗД (УЛЬТРАЗВУКОВАЯ ДИАГНОСТИКА)- ЭТО НЕИНВАЗИВНЫЙ МЕТОД ОБСЛЕДОВАНИЯ ЧЕЛОВЕЧЕСКОГО ОРГАНИЗМА НА ОСНОВЕ ИСПОЛЬЗОВАНИЯ ВЫСОКОЧАСТОТНЫХ ЗВУКОВЫХ ВОЛН.",
        },
        {
            image: UslugaImg3,
            usluga_name: "Мультиспиральная компьютерная томография",
            caption: "Мультиспиральная компьютерная томография (МСКТ) – является самым современным методом для проведения визуальной диагностики структурных изменений внутренних тканей и органов и функциональных систем организма.",
        },
        {
            image: UslugaImg1,
            usluga_name: "Электрокардиография",
            caption: "Электрокардиогра́фия (ЭКГ) — методика регистрации и исследования электрических полей, образующихся при работе сердца.",
        },
        {
            image: UslugaImg2,
            usluga_name: "Спирометрия, спирография",
            caption: "Спирометрия, спирография — метод исследования функции внешнего дыхания, включающий в себя измерение объёмных и скоростных показателей дыхания.",
        },
        {
            image: UslugaImg3,
            usluga_name: "Кольпоскоптия",
            caption: "Кольпоскопия — диагностический осмотр входа во влагалище, стенок влагалища и влагалищной части шейки матки при помощи кольпоскопа — специального прибора, представляющего собой бинокуляр и осветительный прибор.",
        },
        {
            image: UslugaImg1,
            usluga_name: "Магнитотерапия",
            caption: "Магнитотерапия — это популярный физиотерапевтический прием, основанный на влиянии низкочастотных магнитных полей переменного или постоянного действия на проблемную зону организма.",
        },
        {
            image: UslugaImg2,
            usluga_name: "Гистероскопия",
            caption: "Гистероскопия — метод обследования матки при помощи гистероскопа (тип эндоскопического оборудования), который позволяет провести диагностику и лечебные манипуляции (по показаниям).",
        }
    ]

    const docData = [
        {
            image: Doc1,
            name: "Бабаджанов Алишер Фахрутдинович",
            caption: "Дермато-венеролог врач высшей категории ",
        },
        {
            image: Doc2,
            name: "Мирсодикова Дурдона Фахритдиновна",
            caption: "Пренвентив интегратив гинеколог",
        },
        {
            image: Doc3,
            name: "Гиргин Эльвира Серьяновна",
            caption: "Дерматовенеролог",
        },
        {
            image: Doc2,
            name: "Джураева Мадина Одилжановна",
            caption: "Врач Узи",
        },
        {
            image: Doc3,
            name: "Ходжаева Юлдузхон Рустамовна",
            caption: "Гинеколог",
        },
        {
            image: Doc1,
            name: "Рахимова Зиёда Равшановна",
            caption: "Аллерголог",
        },
        {
            image: Doc1,
            name: "Матгазиева Дилфуза Хусановна",
            caption: "Превентив Кардиотерапевт",
        },
        {
            image: Doc2,
            name: "Абдумажитова Феруза Шамсиевна",
            caption: "Кардиолог",
        },
        {
            image: Doc3,
            name: "Недзведская Юлия Вячеславовна",
            caption: "Пульманолог-Аллерголог",
        },
        {
            image: Doc1,
            name: "Бабаджанов Алишер Фахрутдинович",
            caption: "Дермато-венеролог врач высшей категории ",
        },
        {
            image: Doc2,
            name: "Мирсодикова Дурдона Фахритдиновна",
            caption: "Пренвентив интегратив гинеколог",
        },
        {
            image: Doc3,
            name: "Гиргин Эльвира Серьяновна",
            caption: "Дерматовенеролог",
        },
        {
            image: Doc2,
            name: "Джураева Мадина Одилжановна",
            caption: "Врач Узи",
        },
        {
            image: Doc3,
            name: "Ходжаева Юлдузхон Рустамовна",
            caption: "Гинеколог",
        },
        {
            image: Doc1,
            name: "Рахимова Зиёда Равшановна",
            caption: "Аллерголог",
        },
        {
            image: Doc1,
            name: "Матгазиева Дилфуза Хусановна",
            caption: "Превентив Кардиотерапевт",
        },
        {
            image: Doc2,
            name: "Абдумажитова Феруза Шамсиевна",
            caption: "Кардиолог",
        },
        {
            image: Doc3,
            name: "Недзведская Юлия Вячеславовна",
            caption: "Пульманолог-Аллерголог",
        }
    ]

  return (
    <>
        <div className='uslugaPage'>
            <div className="uslugaPageTop">
                <div className="container-xl px-0">
                    <div className="rowUslugaTop">
                        <div className="contentUsluga">
                            <p>Ваше здоровье - <br /> <b>наш приоритет</b></p>
                            <h6>Мы используем только лучшее оборудование и современные методы обработки анализов </h6>
                        </div>
                        <div className="imgUsluga">
                            <img src={ImgUsluga} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* /////// */}
            <Pricelist/>

            {/* ///////// */}
            <div className="allUslugaWrapper">
                <div className="container-xl px-0 allUsluga">
                    <p className='uslugaTitile'>Все <b>услуги</b></p>
                    <div className="usluga_cards">
                        <div className='slide_card row'>
                            {data.map((slide, i) => {
                                return (
                                    
                                        <div className="col-5">
                                            <img
                                                className="d-block w-100"
                                                src={slide.image}
                                                alt="slide"
                                            />
                                            <div className="card_content">
                                                <h6>{slide.usluga_name}</h6>
                                                <p>{slide.caption}</p>
                                            </div>
                                        </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="ourDocWrap">
                    <div className="container-xl">
                        <div className="ourDoctors">
                            <p className='docTitle'>Наши <b>врачи</b></p>
                            <div className="doc_cards">
                                <div className="doc_cards_row row">
                                    {docData.map((slide, i) => {
                                        return (
                                            <div className="col-4">
                                                <img
                                                    className="d-block w-100"
                                                    src={slide.image}
                                                    alt="slide"
                                                />
                                                <div className="card_content">
                                                    <h6>{slide.caption}</h6>
                                                    <p>{slide.name}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Usluga;
