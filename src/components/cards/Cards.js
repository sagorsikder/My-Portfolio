import React from 'react';
import './cards.css'

const cards = (props) => {
    return (
   
       <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
             <div className="card">
            <div className="card-body">
            <img className='img-fluid w-100 img-edit rounded' src={props.img} alt="" />
             <h5 className="card-title">{props.title}</h5>
             <p className="card-text">
                {props.details}
             </p>
             <p>
                Time Required : {props.time} minute
             </p>
             <button onClick={()=>props.click(props.time) }  className="btn btn-primary">add</button>
      </div>
    </div>
  </div>
       
    );
};

export default cards;