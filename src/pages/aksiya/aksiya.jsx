import React from 'react'
import './aksiya.scss';
import TopImg from "../../assets/img/aksiyaImg.png";
import ImgAksiya from "../../assets/img/aksiya2.png"

function Aksiya() {
    const data =[
        {
            image: ImgAksiya,
            aksiya: "Акция",
            aksiya_name: "УЗД щитовидной железы бесплатно",
            aksiya_time: "Каждый день с 15.00 до 7.00"
        },
        {
            image: ImgAksiya,
            aksiya: "Акция",
            aksiya_name: "Общий анализ крови + глюкоза бесплатно",
            aksiya_time: "Каждый день с 15.00 до 7.00"
        },
        {
            image: ImgAksiya,
            aksiya: "Акция",
            aksiya_name: "10% скидка каждое воскресенье",
            aksiya_time: "Каждый день с 15.00 до 7.00"
        },
    ]

  return (
    <>
        <div className='aksiyaPage'>
            <div className="aksiyaPageTop">
                <div className="container-xl px-0">
                    <div className="aksiya_top_row row">
                        <div className="top_content">
                            <h1>Акции <br /> <b>скидки и бонусы</b></h1>
                            <p>Радуем наших любимых пациентов вкусными ценами, скидками и бонусами</p>
                        </div>
                        <img src={TopImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="aksiyaContent">
                <div className="container-xl">
                    <div className="aksiyaRow row">
                        {data.map((item, i) => {
                            return(
                                <div className="col">
                                    <h2>{item.aksiya}</h2>
                                    <img src={item.image} alt="" />
                                    <div className="col_content">
                                        <h1>{item.aksiya}</h1>
                                        <h3>{item.aksiya_name}</h3>
                                        <p>{item.aksiya_time}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Aksiya;
