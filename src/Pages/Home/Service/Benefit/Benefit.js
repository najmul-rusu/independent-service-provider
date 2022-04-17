import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const Benefit = (props) => {
    return (
        <p className='d-flex'>
            <CheckCircleIcon className='mx-2 text-success' style={{width: '15px'}}></CheckCircleIcon>
            {props.benefit}
        </p>
    );
};

export default Benefit;