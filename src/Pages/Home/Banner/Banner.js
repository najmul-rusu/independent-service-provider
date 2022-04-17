import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css'
import topBanner01 from '../../../Images/top-banner-01.png'
import topBanner02 from '../../../Images/top-banner-02.png'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src={topBanner01}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-bg mx-auto'>
                        <p>Yoga Center of LUVFIT</p>
                        <h3>Get Fit. Get on with Life.</h3>
                        <Button>JOIN US</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src={topBanner02}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-bg mx-auto'>
                    <p>Get fit don’t quit.</p>
                        <h3>Healthy mind in a healthy body.</h3>
                        <Button>JOIN US</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;