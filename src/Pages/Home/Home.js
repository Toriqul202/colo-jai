import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from '../../components/Services/Services';
import Slider from '../../components/Slider/Slider';
import Package from '../Package/Package';

const Home = () => {
  const [packages,setPackages]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/packages')
    .then(res=>res.json())
    .then(data=>setPackages(data))
  },[])

  
    return (
        <>
          <Slider/> 
          <Services/> 
          <Container>
           <Row className="g-4">
              {
                packages.slice(0,4).map(packaged=> <Package  package={packaged}></Package>)
              }
            </Row>
          </Container>
          
          
         
          
          
        </>
    );
};

export default Home;