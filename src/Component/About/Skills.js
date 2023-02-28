import React from 'react';

const Skills = () => {
    return (
        <div className='w-[90%] mt-[60px] mx-auto '>
             <h1 className="text-5xl font-bold text-blue-700">Skills</h1>
             <div className="divider h-[2px] bg-blue-700 mb-8"></div>  

            <div className='lg:flex justify-between mt-3'>
                <h1 className='text-3xl font-semibold w-1/4'>FrontEnd</h1>
                <div className='font-semibold w-3/4'>
                    <span className='btn btn-success'>Html</span>
                    <span className='btn btn-success'>Css</span>
                    <span className='btn btn-success'>Javascript</span>
                    <span className='btn btn-success'>Es6</span>
                    <span className='btn btn-success'>Bootstrap</span>
                    <span className='btn btn-success'>Tailwind</span>
                    <span className='btn btn-success'>DaisyUI</span>
                    <span className='btn btn-success'>React</span>
                </div>
            </div>

            <div className='lg:flex justify-between my-5'>
                <h1 className='text-3xl font-semibold w-1/4'>BackEnd</h1>
                <div className='font-semibold w-3/4'>
                    <span className='btn btn-success'>Node.js</span>
                    <span className='btn btn-success'>  Express.js</span>
                    <span className='btn btn-success'>MongoDB</span>
                    <span className='btn btn-success'>Firebase</span>
                </div>
            </div>

            <div className='lg:flex justify-between'>
                <h1 className='text-3xl font-semibold w-1/4 '>Tools</h1>
                <div className='font-semibold w-3/4'>
                    <span className='btn btn-success'>Vs code</span>
                    <span className='btn btn-success'>GitHub</span>
                    <span className='btn btn-success'>NPM</span>
                    <span className='btn btn-success'>Dev tools</span>
                    <span className='btn btn-success'>Netlify</span>
                    <span className='btn btn-success'>Vercel</span>
                    <span className='btn btn-success'>Jwt</span>
                    <span className='btn btn-success'>Stride</span>
                    <span className='btn btn-success'>Canva</span>
                    <span className='btn btn-success'>ImgBB</span>
                </div>
            </div>

             <h1 className='text-5xl mt-[80px] text-blue-700 font-bold'>Contact with me</h1>
             <div className="divider h-[2px] bg-blue-700 mb-8"></div>  
        </div>
    );
};

export default Skills;