import React from 'react';
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Hero = () => {

	return(
	<div style={{marginTop: "60px", marginBottom: "80px"}}>
    <Container>
          <Row>
          	<Col>
            <h1 className="display-4">Hello, world!</h1>
            </Col>
            <Col>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          	</Col>
          </Row>
        </Container>
     </div>
  );
	
}

export default Hero;