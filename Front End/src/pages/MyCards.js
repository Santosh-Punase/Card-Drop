import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from './components/Comps';
import './card.css'

import Button from 'muicss/lib/react/button';

class CardsPage extends React.Component{
  constructor(props){
		super(props);
    }

  dropCardOne = function() {
    var drop = {
      userId: window.userId,
      expire_code : 0,
      location :[0,0]
    }
    var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://carddrop.herokuapp.com/api/drops", true);
		xhr.setRequestHeader("Content-Type","application/json");
		xhr.setRequestHeader("Access-Control-Allow-Origin","*");		
		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) {
          console.log("dropped");
        }
				}
			}
		xhr.send(JSON.stringify(drop));
  }

  dropCardTwo = function() {
    var drop = {
      userId:window.userId,
      expire_code : 1,
      location :[0,0]
    }
    var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://carddrop.herokuapp.com/api/drops", true);
		xhr.setRequestHeader("Content-Type","application/json");
		xhr.setRequestHeader("Access-Control-Allow-Origin","*");		
		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) {
          console.log("dropped");
        }
				}
			}
		xhr.send(JSON.stringify(drop));
  }


render() {

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
        <div > Drop 
        <Button id="btn1" style={{margin :"10px"}} onClick={this.dropCardOne.bind(this)} className="mui-btn mui-btn--primary" >5 min</Button>
        <Button id="btn2" onClick={this.dropCardTwo.bind(this)} className="mui-btn mui-btn--primary" >1 year</Button>
        </div>
    </div>

    </div>
    </div>
  );
}
}

export default CardsPage;