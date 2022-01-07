import React from 'react';
import { Card, Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = (props) => {
  const{name,description,img,price,_id}=props.package
    return (
    
        <>
          <Col lg={3}>
          <Card className='p-3'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Title>{price}</Card.Title>
          <Link to={`/booking/${_id}`}>
          <Button>Buy This Package</Button>
          </Link>
          
          <h4>{_id}</h4>
        </Card.Body>
      </Card>
             
          </Col>  
        </>
    );
};

export default Package;