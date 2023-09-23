import React from 'react'
import './contact.scss';
import Map from './mapContact'
import PhoneIcon from "../../assets/img/phoneIcon.png";
import LocationIcon from "../../assets/img/locationIcon.png";

function Contact() {
    const call_data = [
        {
            call_center_name: "Общий колл-центр",
            number:"+9987171207939"
        },
        {
            call_center_name: "Филлиал Чиланзар",
            number:"+998900135679"
        },
        {
            call_center_name: "Филлиал Юнусабад",
            number:"+998994459977"
        },
        {
            call_center_name: "Филлиал Мирзо Улугбек",
            number:"+998900135679"
        },
        {
            call_center_name: "Филлиал Ц1",
            number:"+998712333231"
        },
        {
            call_center_name: "Филлиал Сергели",
            number:"+998900548687"
        },
    ]

    const location_data = [
        {
            location_name: "Общий колл-центр",
            location:"г. Ташкент, Чиланзарский ул. Чапаната, 6/2 (ориентир: метро Мирзо Улугбека)"
        },
        {
            location_name: "Филлиал Ц1",
            location:"г. Ташкент, ул. Садика Азимова, 49 А (ориентир: центр Травматологии и ортопедии)"
        },
        {
            location_name: "Филлиал Мирзо Улугбек",
            location:"г. Ташкент, Мирзо Улугбекский район, ул. Буюк Ипак Йули, 139"
        },
        {
            location_name: "Филлиал Юнусабад",
            location:"г. Ташкент, Юнусабадский р., ул. Амира Темура, 2-квартал, 32а"
        },
        {
            location_name: "Филлиал Сергели",
            location:"г. Ташкент, Сергелийский р., 8-квартал, дом 2"
        },
    ]

  return (
    <>
        <div className='contactPage'>
            <div className="container-xl px-0">
                <h1>Наши <b>контакты</b></h1>
                <div className="aloqa">
                    <h2>Связаться с нами</h2>
                    <div className="aloqaRow row">
                        {call_data.map((item, i) => {
                            return(
                                <div className="col-3">
                                    <img src={PhoneIcon} alt="" />
                                    <div className="num_div">
                                        <p>{item.call_center_name}</p>
                                        <h4>{item.number}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="lokatsya">
                    <h2>Локации</h2>
                    <div className="locationRow row">
                        {location_data.map((item, i) => {
                            return(
                                <div className="col-4">
                                    <div className="locationDiv">
                                        <img src={LocationIcon} alt="" />
                                        <p>{item.location_name}</p>
                                    </div>
                                    <h4>{item.location}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="contactMap">
                <Map/>
            </div>
        </div>
    </>
  );
}

export default Contact;
