import React from 'react';
import Container from 'muicss/lib/react/container';

import Button from 'react-bootstrap/lib/Button';
import Card from './MyCards';
import CardPicked from './PickedCards';


const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


class ManageCards extends React.Component {
  render() {
    return (
      <div >
       <Container >
          <h2><b>My Cards</b></h2>
             < Card />  
          < hr style={{width:"90%"}}/>
         <h2><b>Picked Cards</b></h2>
            < CardPicked />
       </Container >
      </div>
    );
  }
}

export default ManageCards;