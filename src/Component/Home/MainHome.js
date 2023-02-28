import React from 'react';
import Contact from '../Contact/Contact';
import useTitle from '../Hooks/useTitle';
import Projects from '../Projects/Projects';
import Home from './Home';

const MainHome = () => {
    return (
        <div>
            <Home></Home>
            <Projects></Projects>
            <Contact></Contact>
            {useTitle('Sagor hosen')}
        </div>
    );
};

export default MainHome;