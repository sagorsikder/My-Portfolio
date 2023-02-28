import React from 'react';
import sagor from '../../image/sagor-about.png'
import { Link } from 'react-router-dom';

const Introduce = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
       
        <img src={sagor} alt='me' className="max-w-sm rounded-lg shadow-2xl" />
        
    <div>
      <h1 className="text-5xl font-bold">Hi, I am <span className='text-success'>Sagor hosen</span></h1>
      <h1 className="text-5xl font-bold">a web developer</h1>
      <p className="py-6 font-semibold">I have a strong background in computer science engineering and a passion for creating user-friendly and visually appealing websites. I am skilled in a variety of coding languages, including HTML, CSS, Bootstrap, Tailwind, DaisyUI and JavaScript,React, MongoBD, NodeJS, Express.js and have experience working on both the front-end and some back-end of websites.</p>
      <p className="font-semibold">In addition to my technical skills, I am a team player and am comfortable working in a collaborative environment. I am always looking for new challenges and opportunities to learn and grow as a web developer.</p>
      <p className="py-6 font-semibold"> My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.</p>
      <Link to='/projects'><button className="btn btn-primary">Projects</button></Link>
    </div>
  </div>
</div>
    );
};

export default Introduce;