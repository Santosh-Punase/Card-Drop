import React from 'react';
import Container from 'muicss/lib/react/container';

import Button from 'muicss/lib/react/button';
import Card from './MyCards';


const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


class ManageCards extends React.Component {

  constructor(props){
    super(props); 
    this.state = {
      cards:[]
    }
    this.getPickedCards();
  }

 
  getPickedCards = function(){
    var that = this;
    var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://carddrop.herokuapp.com/api/pickedCards/" + window.userId, true);
		xhr.setRequestHeader("Content-Type","application/json");
		xhr.setRequestHeader("Access-Control-Allow-Origin","*");		
		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) {
					var res = xhr.responseText;
					var Jres = JSON.parse(res);
          var iCards = [];
          for(var i = 0; i < Jres.length; ++i) {
            var element = Jres[i]["dropperUser"];
              iCards.push(element);
          }

          that.setState({cards : iCards});
				}
			}
		}
		xhr.send(null);
	
  }

  render() {
    
    return (
      <div >
       <Container >
          <h2><b>My Cards</b></h2>
             < Card />  
         <hr style={{width:"90%"}}/>
         <h2><b>Picked Cards</b></h2>
         <div>{
          this.state.cards.map((element) => {
           
          return <div class="card" >  
            <div class="cardcontainer">
             <h4 class="card-title"><b id="name">{element.name}</b></h4>
              <p class="card-text">
                <span id="phone" class="glyphicon glyphicon-earphone"></span> {element.phone} 
              </p>
              <p class="card-text">
                <span id="detail" ></span> {element.detail}
              </p>
              <p class="card-text" >
                <span id="location" class="glyphicon glyphicon-map-marker"></span> Dropped location
              </p>
              <Button id="btn2" className="mui-btn mui-btn--primary">Delete Card</Button>
           </div>  
         </div>
         })}
         
         </div>
       </Container >
      </div>
    );
  }
}

export default ManageCards;