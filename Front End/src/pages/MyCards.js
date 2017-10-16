import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from './components/Comps';
import './card.css'

import Button from 'muicss/lib/react/button';

const CardsPage = (props) => {
  return(
    <div >
      <div class="card" >  
    {/*<!--Card image-->
  
    <!--Card content-->
    */}
    <div class="cardcontainer">      
        <h4 class="card-title"><b id="name">{window.userName}</b></h4> 
        <p class="card-text">
          <span id="phone" class="glyphicon glyphicon-earphone"></span> {window.userPhone}</p>
          
        <p class="card-text">
          <span id="detail" ></span> {window.userDetail}</p>
        {/*
        <p class="card-text">
          <span id="email" class="glyphicon glyphicon-envelope"></span> abc@gmail.com</p>
        */}
        <p class="card-text">
            <span id="location" class="glyphicon glyphicon-map-marker"></span> current location</p>
        {/*
        <p class="card-text">
            <span class="glyphicon glyphicon-home"></span> Address</p>
        */}
        <span > Drop 
        <Button id="btn1" style={{margin :"10px"}} className="mui-btn mui-btn--primary">5 min</Button>
        <Button id="btn2" className="mui-btn mui-btn--primary">1 year</Button>
        </span>
    </div>

    </div>
    </div>
  )
};

export default CardsPage;