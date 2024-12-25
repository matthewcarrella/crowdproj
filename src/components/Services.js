import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Service from './Service';


const Services = () => {
	return <Container>
   
      <Row>
        <Col>
        	<Service/>
        </Col>
        <Col>
        	<Service/>
        </Col>
        <Col>
        	<Service/>
        </Col>
      </Row>
    </Container>
}


export default Services;