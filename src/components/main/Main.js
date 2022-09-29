import React, {  useState } from 'react';
import Card from '../card/Card';
import Header from '../Header/Header';
import './main.css';


const Main = () => {

    
   
   
    const [time,setTotal]=useState(0)
    const [breakTime,setBreakTime] = useState(0)
      
    const click=(value)=>{
        let newValue = parseFloat(value)
      let  total = time+newValue;
        setTotal(total)
        
    }

    const breakTimeLoad=(time)=>{

        setBreakTime(time);
    }

 
     
    
    return (
        <div className='row '>
            <div className="display-page ps-3 col-9 container rounded">

            <Header></Header>

            <Card click={click}></Card>
            </div>
            <div className="display-count col-3 bg-warning container position-sticky pt-4">
        <div className="profile d-flex">
            <img className='rounded-circle w-25 me-2 h-20 img-fluid' src="https://th.bing.com/th/id/R.d40592e743968de76e68de6788915b78?rik=TDOsUXv7jeuZUA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2f015.jpg&ehk=d0D7svDznQs8cJmz6n0GmeemmmATSz4xoV9aTTxCWMg%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div>
                <h5>Sagor Sikder</h5>
                <p>Dhaka,Bangladesh</p>
            </div>
        </div>
        <div className="activity mt-5">
            <h5 >Add A Break</h5>
            <div className='break-time rounded p-2'>
        <button onClick={()=>breakTimeLoad(10)} className='rounded-circle m-1 p-1   btn btn-primary'>10m</button>
        <button  onClick={()=>breakTimeLoad(20)} className='rounded-circle m-1 p-1 btn btn-primary'>10m</button>
        <button  onClick={()=>breakTimeLoad(30)} className='rounded-circle m-1 p-1  btn btn-primary'>10m</button>
        <button onClick={()=>breakTimeLoad(40)}  className='rounded-circle m-1 p-1   btn btn-primary'>10m</button>
        
        
       
            </div>
        </div>
        <div className='exercise-details mt-5'>
          <h5>  Exercise Details</h5>
          <h6>Exercise time  <span className='ms-3'>{time} minute</span></h6>
          <h6>Break Time <span className='ms-3'>{breakTime} minute</span></h6>
          <button className='btn btn-primary mt-5'>Activity Completed</button>
         
          
          </div>
            </div>
        </div>
    );
};

export default Main;