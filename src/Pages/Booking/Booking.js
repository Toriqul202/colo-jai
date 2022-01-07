import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import './Booking.css'

const Booking = () => {
    
   
    const [book,setBook]=useState({})
    const {id}=useParams()
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:4000/confirming',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('succesfully Booked')
            }
         })
    } ;
    useEffect(()=>{
      fetch(`http://localhost:4000/packages/${id}`)
      .then(res=>res.json())
      .then(data=>setBook(data))
    },[])
   
    return (
        <div>
            <Container>
            <Row className='mt-5 d-flex align-items-center'>
                <Col className='d-flex align-items-center' lg={4}>
                <Card>
                    
                    <Card.Body>
                      
                           <img src={book.img} className='img-fluid' height="200px"alt="" />
                        
                 
                        <Card.Title> <h4>{book.name}</h4>   </Card.Title>
                        <Card.Title><h4>price:{book.price}</h4></Card.Title>
                       
                        
                    </Card.Body>
               </Card>
                </Col>
                <Col lg={8}>
               <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Enter Your Email' {...register("name")} />
                        <input placeholder='Enter Your Number' {...register("number")} />
                        <input placeholder='Enter Journey Date' {...register("date")} />
                        <input type="text" name="image" id="img" {...register(`${book.img}`)} />
                        <input type="submit" value="Book Now" />
                </form>
                </Col>
            </Row>
            </Container>
          
        </div>
       
);

  
};


export default Booking;

