import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/notFound.jpg';

const notFound = () => {
    return (
        <div>
            <img className='img-fluid' src={img} alt="" />
            <br />
            <Link to="/">Go back</Link>
        </div>
    );
};

export default notFound;