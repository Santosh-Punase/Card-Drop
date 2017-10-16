import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from './components/Comps';
import './card.css'
const CardsPage = (props) => {
  return(
    <div >
      <div class="card" >
  

    {/*<!--Card image-->
  
    <!--Card content-->
    */}
    <div class="cardcontainer">
      
        <h4 class="card-title"><b>Name</b></h4>
 
        <p class="card-text">
          <span class="glyphicon glyphicon-earphone"></span> 123-456789</p>
        <p class="card-text">
          <span class="glyphicon glyphicon-envelope"></span> abc@gmail.com</p>
        <p class="card-text">
            <span class="glyphicon glyphicon-map-marker"></span> current location</p>
        <p class="card-text">
            <span class="glyphicon glyphicon-home"></span> Address</p>
         
        <a href="#" class="btn btn-primary">Request Card</a>
        <a href="#" class="btn btn-primary">Delete Card</a>
    </div>

</div>
    </div>
  )
};

export default CardsPage;