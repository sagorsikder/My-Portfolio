import React from 'react';
import { jsPDF } from "jspdf";
import resume from '../../image/resume.jpg'
import myImg from '../../image/first.png'

const Home = () => {
    const download=()=>{

        const doc = new jsPDF('landscape','px','a4','false');
        doc.addImage(resume,'jpg',65,20,500,400);
        doc.save("resume.pdf");
    }
    return (
      
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://th.bing.com/th/id/R.b88ab6c576125c6faa68d2eb8c9680b6?rik=W4a7fobkyWiK3Q&pid=ImgRaw&r=0")` }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className='w-1/2'>
         <img alt='my img' src={myImg} className="max-w-sm   rounded-lg shadow-xl " />
         </div>
          <div className='w-1/2'>
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