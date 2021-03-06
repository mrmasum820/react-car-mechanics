import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {
            img: mechanic1,
            name: 'Neymar jr.',
            expertise: 'Engine Expert'
        },
        {
            img: mechanic2,
            name: 'Leo Messi',
            expertise: 'Wheel Expert'
        },
        {
            img: mechanic3,
            name: 'C Ronaldo',
            expertise: 'Breaking Expert'
        },
        {
            img: mechanic4,
            name: 'K Mbappe',
            expertise: 'Glassing Expert'
        }
    ]
    return (
        <div id="experts" className='container my-5'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className='row my-5'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;