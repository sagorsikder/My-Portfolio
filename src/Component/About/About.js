import React from 'react';
import Contact from '../Contact/Contact';
import useTitle from '../Hooks/useTitle';
import Education from './Education';
import Introduce from './Introduce';
import Skills from './Skills';

const About = () => {
    useTitle('about')
    return (
    <div className='bg-base-200'>


        <Introduce></Introduce>
        <Education></Education>
        <Skills></Skills>
        <Contact></Contact>

    </div>
    );
};

export default About;