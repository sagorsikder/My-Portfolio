import React from 'react';
import useTitle from '../Hooks/useTitle';
import resaleWebsite from '../../image/old-is-gold.PNG';
import brightPhotography from '../../image/bright-photography.PNG';
import doctorsPortal from '../../image/doctors-portal.PNG';
import Project from './Project';

const Projects = () => {
    useTitle('projects')
    const projects = [
        {
            id:1,
            name:'Old-is-gold',
            img:resaleWebsite,
            details:'You can easily buy or sell any used bike with this website.'
         },
        {
            id:2,
            name:'Bright Photography',
            img:brightPhotography,
            details:'You can easily hire the best photographer from this website.'
         },
        {
            id:3,
            name:'Doctors Portal',
            img:doctorsPortal,
            details:'Patients can easily make an appointment from this website.'
            
         }
    ]
    return (
        <div className='mt-0 pb-5 w-full' style={{ backgroundImage: `url('https://th.bing.com/th/id/R.5973b28b64645abb85bf02a23becba7b?rik=VJExa5dGpPq4XQ&pid=ImgRaw&r=0')` }}>
            <div className='w-3/4 mx-auto  pt-12 mb-5'>
            <h1 className='text-center font-bold text-blue-300 text-4xl'>Latest Projects </h1>
            <p className='text-center font-semibold text-blue-200  my-3'>Recently I was building some latest projects for Life's easy purpose.Made with React, MongoDB(implement CRUD operation),React bootstrap, Tailwind, DaisyUI, and Firebase. Today I will introduce with you these projects.</p>
            </div>

            <div className='w-[90%] mx-auto grid gap-4 lg:grid-cols-3 md:grid-cols-2 mb-5'>
                {
                    projects.map(project=><Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;