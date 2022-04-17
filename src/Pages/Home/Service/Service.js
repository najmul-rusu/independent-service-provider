import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import Benefit from './Benefit/Benefit';

const Service = ({ service }) => {
    const { name, price, benefits } = service;
    return (
        <div className=''>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <h4 className='text-center'>{name}</h4>
                        <div className=''>
                            <h1 className='text-center'>${price}<span className='fs-6 text-muted'>/mo</span></h1>

                        </div>
                        {
                            benefits.map(benefit =>
                                <Benefit benefit={benefit}>
                                </Benefit>)
                        }
                    </Card.Body>
                    <div className='mx-auto'>
                        <Button className="text-white">Become A Member</Button>
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;