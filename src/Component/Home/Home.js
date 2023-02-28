import React from 'react';
import { jsPDF } from "jspdf";
import resume from '../../image/resume.jpg'
import myImg from '../../image/first.png'
import background from '../../image/background.jpg'
import useTitle from '../Hooks/useTitle';

const Home = () => {

  useTitle('Sagor Hosen')
    const download=()=>{

        const doc = new jsPDF('landscape','px','a4','false');
        doc.addImage(resume,'jpg',65,20,500,400);
        doc.save("resume.pdf");
    }

   
    return (
      
        <div className="hero min-h-screen bg-base-200 mb-0 w-full" style={{ backgroundImage: `url(${background})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
         
         <img alt='my img' src={myImg} className="max-w-sm  rounded-lg shadow-xl " />
       
          <div>
            <h1 className="text-5xl text-blue-300 font-bold"><span  className="text-5xl text-red-500 font-bold">I</span> AM </h1>
            <h1 className="text-5xl text-blue-200 font-bold">Sagor Hosen</h1>
            <h1 className="text-2xl my-2 text-blue-100 font-semibold">Web developer</h1>
            <p className="py-6 text-white font-semibold">I am a web developer and programmer living in Dhaka, Bangladesh. I make web applications, usually with REACT. </p>
            
            <button onClick={download} className='btn bg-secondary btn-outline'>Download resume</button>
          </div>
        </div>
      </div>
         
     
    );
};

export default Home;