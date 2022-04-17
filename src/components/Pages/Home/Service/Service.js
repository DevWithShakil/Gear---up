import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {id, title, price, img} = service;
    return (
        <div className='product'>
            <img src={img} alt='' width={'400px'} />
            <h3>{title}</h3>
            <p> <strong>Price: {price}</strong></p>
            <button className='button'>Add to cart</button>
        </div>
    );
};

export default Service;