import React from 'react';
import aboutImg from '../../Images/nhRusu.png'
import './About.css'

const About = () => {
    return (
        <div className='container d-flex '>
            <div>
                <img className='about-img' src={aboutImg} alt="" />
            </div>
            <div>
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, omnis cum cumque minus magni nemo nulla beatae dolores vel nisi voluptatibus mollitia, eveniet voluptas, illum culpa laudantium ea saepe. Quidem accusantium, quasi cupiditate obcaecati impedit nisi tenetur, culpa quaerat nesciunt placeat iure dolor magni! Recusandae in, iure explicabo similique expedita optio commodi itaque voluptates harum cumque architecto ipsam, voluptatem soluta, nesciunt quod sunt eos dolores rerum necessitatibus quibusdam temporibus debitis nemo. Dolor, temporibus aspernatur nostrum illo enim autem mollitia cumque dicta eos nam distinctio nulla sit necessitatibus dolores, omnis repellat doloremque nobis obcaecati fuga. Sunt, mollitia! Porro magni veritatis enim!</p>
                
            </div>
        </div>
    );
};

export default About;