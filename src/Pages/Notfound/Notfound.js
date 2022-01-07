import React from 'react';
import nothing from '../../images/error-g2b692221b_1280.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <>
        <div className="text-center">
           <img src={nothing}  alt="Not Found" className="img-fluid d-block mx-auto mt-4 w-50 h-auto" /><br/>
           <Link to="/">
               <Button variant="danger">Please Go Back</Button>
           </Link>
           
           
        </div>
         
         
        </>
    );
};

export default Notfound;