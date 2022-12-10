import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {


    const form = useRef();




    const handleContactForm=(event)=>{

        event.preventDefault();

        emailjs.sendForm('service_cs6406f', 'template_f6keleo', form.current, 'DKWyI2ooTIfcl_kRd')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully')
      }, (error) => {
          console.log(error.text);
      });
        
    }
    
    return (
        <div>
            <h2 className='text-center text-3xl my-3 py-3 font-semibold text-secondary'>Contact form</h2>
            <form ref={form} onSubmit={handleContactForm} className='w-75  mb-5 mx-auto '>
                
                <div className=" w-full ">
                <label className="label">
                    <span className="label-text font-semibold">What is your name?</span>
                </label>
                <input name='user_name' type="text" placeholder="Type here your name" className="input input-bordered w-full  " />
                </div>
                <div className=" w-full  ">
                <label className="label">
                    <span className="label-text mt-3 font-semibold">What is your email?</span>
                </label>
                <input name='user_email' type="email" placeholder="Type here your email" className="input input-bordered w-full  " />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text mt-3 font-semibold">How I help you?</span>
                    </label> 
                    <textarea name='message' className="textarea w-full textarea-bordered h-24" placeholder="Please tell me details"></textarea>
                    </div>

                    <div className='w-full flex justify-center'><input className='btn btn-primary' type="submit" value="Send Email" /></div>
            </form>
        </div>
    );
};

export default Contact;