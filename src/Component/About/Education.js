import React from 'react';

const Education = () => {
    return (
        <div className='w-[90%] mt-6 mx-auto '>
            <h1 className="text-5xl font-bold text-blue-700">Education</h1>
            <div className="divider h-[2px] bg-blue-700 mb-6"></div> 
            <div className='flex justify-between'>
                <div className='mb-4'>
                    <h1 className='text-3xl font-semibold '> City University</h1>
                    <p className='font-semibold'> BSc. in Computer Science Engineering</p>
                    <p className='font-semibold'> o CGPA :- 3.13</p>
                </div>
                <div>
                    <h1 className='font-semibold'>Savar, Dhaka</h1>
                    <p>2018 – 2022</p>
                </div>
            </div>

            <div className='flex justify-between'>
            <div className='mb-4'>
            <h1 className='text-3xl font-semibold '> Basail Emdad Hamida Degree Collage</h1>
            <p className='font-semibold'> HSC</p>
            <p className='font-semibold'> o GPA – 3.50</p>
                </div>
                <div>
                <h1 className='font-semibold'> Basail, Tangail</h1>
                    <p>2016 – 2018</p>
                </div>
            </div>

            <div className='flex justify-between'>
            <div className='mb-4'>
            <h1 className='text-3xl font-semibold '> Kawaljani Nawsheria High School</h1>
            <p className='font-semibold'> SSC</p>
            <p className='font-semibold'> o GPA – 4.33</p>
                </div>
                <div>
                <h1 className='font-semibold'> Kawaljani, Basail, Tangail</h1>
                    <p className='text-right'>2014 – 2016</p>
                </div>
            </div>

       
        </div>
    );
};

export default Education;