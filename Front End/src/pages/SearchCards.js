import React from 'react';
import Container from 'muicss/lib/react/container';

import Button from 'muicss/lib/react/button';
//import Button from 'react-bootstrap/lib/Button';
import CardPicked from './PickedCards';
import Card from './MyCards';


class Maincontent extends React.Component {
  render() {
    return (
    <div >
      <Container  >
        <Button className="mui-btn mui-btn--primary" size="large">
        <span class="glyphicon glyphicon-search"></span> Search nearby cards</Button>
        <br/>
        <div >
         < Card />
          <br/>
         < Card />
        </div>
      </Container>
    </div>
    );
  }
}

export default Maincontent;