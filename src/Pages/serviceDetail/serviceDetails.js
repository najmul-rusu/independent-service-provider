import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='container'>
            <h2>Service Detail Page: {serviceId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;