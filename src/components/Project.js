import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Project = () => {
  return (
  	<div style={{marginBottom: "15px"}}>
    	<Card>
      		<Card.Header as="h5">Featured</Card.Header>
      				<Card.Body>
        					<Card.Title>Special title treatment</Card.Title>
        					<Card.Text>
        						With supporting text below as a natural lead-in to additional content.
        					</Card.Text>
        					<Button variant="primary">Go somewhere</Button>
      				</Card.Body>
    	</Card>
    </div>
  );
}

export default Project;