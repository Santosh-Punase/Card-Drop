import React from 'react';
import Container from 'muicss/lib/react/container';

import Button from 'muicss/lib/react/button';
//import Button from 'react-bootstrap/lib/Button';
import CardPicked from './PickedCards';
import Card from './MyCards';


const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


class Maincontent extends React.Component {
  render() {
    return (
    <div className="container">
      <Container  >
        <Button className="mui-btn mui-btn--primary" size="large">
        <span class="glyphicon glyphicon-search"></span> Search nearby cards</Button>
      </Container>
      <br/>
      <div >
      < Card />
      <br/>
      < Card />
      </div>
    </div>
    );
  }
}

export default Maincontent;