import React from 'react';

const Expert = (props) => {
    const { name, img, expertise } = props.expert;
    const expertStyle = {
        borderRadius: '10px'
    }
    return (
        <div className='col-12 col-sm-6 col-lg-3'>
            <img style={expertStyle} src={img} alt="" />
            <h4>{name}</h4>
            <h5 className='text-danger'>{expertise}</h5>
        </div>
    );
};

export default Expert;