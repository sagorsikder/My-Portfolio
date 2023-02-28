import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const ProjectDetails = () => {
    useTitle('project details')
    const {name,details,img1,img2,img3,img4,details1,details2,client,server,live} = useLoaderData()
    
   
    return (
        <div className='bg-blue-800'>
            <div  className='w-3/4 mx-auto  pt-12 py-5'>
            <h1 className='text-center font-bold text-blue-200 text-4xl'>{name} </h1>
            <p className='text-center font-semibold text-blue-100  my-3'>{details}</p>
            </div>
            <div  className='w-5/6 mx-auto' >
                <div className='flex justify-between'>
                    <img className='w-[45%] block' src={img1} alt="" />
                    <img className='w-[45%] block'  src={img2} alt="" />
                </div>
                <p className='py-7 font-semibold text-white border my-5 p-3'>{details1}</p>
                <div className='flex justify-between'>
                    <img className='w-[45%] block'  src={img3} alt="" />
                    <img className='w-[45%] block'  src={img4} alt="" />
                </div>
                <p className='py-7 font-semibold text-white border my-5 p-3'>{details2}</p>
           <div className='py-5 border my-5 p-3'>
            <p className='text-white'><span className='font-semibold'>Client side repository:</span> {client}</p>
            <p className='text-white'><span className='font-semibold'>Server side repository:</span> {server}</p>
            <p className='text-white'><span className='font-semibold'>Live site:</span> {live}</p>
           </div>
            </div>
            
        </div>
    );
};

export default ProjectDetails;