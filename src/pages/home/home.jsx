import React from 'react'
import './home.scss';
import homeImg from "../../assets/img/Group362.png"

function Home() {
  return (
    <div className="home1">
      <div className="container px-0">
        <div class="row">
          <div class="col px-0 col1">
            <div className='col1_content'>
              <h1>Высокотехнологичная <b>лаборатория</b></h1>
              <p>СОВРЕМЕННАЯ АВТОМАТИЗИРОВАННАЯ ЛАБОРАТОРИЯ</p>
              <button className='homeBtn'>Оборудование</button>
            </div>
          </div>
          <div class="col px-0 col2">
            <img src={homeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
