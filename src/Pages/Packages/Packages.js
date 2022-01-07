import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package'

const Packages = () => {
    const [packages,setPackages]=useState([])
    useEffect(()=>{
         fetch('http://localhost:4000/packages')
         .then(res=>res.json())
         .then(data=>setPackages(data))
    },[])
    return (
        <div>
            <Row>
              {
                  packages.map(packaged=><Package package={packaged}></Package>)
              }
            </Row>
        </div>
    );
};

export default Packages;