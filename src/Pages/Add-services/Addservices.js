import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { useForm } from "react-hook-form";
import './Addservices.css'

const Addservices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
      console.log(data);
      
      axios.post('http://localhost:4000/packages', data)
        .then(res=>{
           if(res.data.insertedId){
               alert('succesfully added')
           }
        })
      
    } 
    return (
      <Row className="align-items-center">
    < Col sm={1} lg={4}></Col>
    <Col id="col" className="bg-danger mt-5 p-3" sm={1} lg={4}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">প্যকেজের নাম লিখুন </label>
      <input id="name" {...register("name") }/>
      <label htmlFor="meta">কোনো বর্ণনা থাকলে দিন</label> 
      <input id="meta" {...register("description")} /> 
      <label htmlFor="picture">ছবির লিঙ্ক প্রদান করুন</label> 
      <input id="picture" {...register("img")} /> 
      
     
      <label htmlFor="room">মূল্য</label>
      <input id="room"{...register("price")} />
      <input  type="submit" />
    </form> 
    </Col>
    <Col sm={1} lg={4}></Col>
  </Row>
    
      
    );
};

export default Addservices;