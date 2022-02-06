import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, description, price, img } = props.service;
    return (
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h4 className='my-3'>{name}</h4>
            <h5>{price}</h5>
            <p className='mx-3'>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;