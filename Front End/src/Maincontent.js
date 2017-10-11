import React from 'react';
import Container from 'muicss/lib/react/container';
import Button from 'react-bootstrap/lib/Button';


{/*import './userpage.css';
*/}
const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


class Maincontent extends React.Component {
  render() {
    return (
      <Container className="mui--z1" >
         
         <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>
    <span class="glyphicon glyphicon-search"></span> Search nearby cards</Button>
    
  </div>
        
      </Container>
    );
  }
}

export default Maincontent;