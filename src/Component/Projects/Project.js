import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {id,name,img,details} = project;
   
    return (
        <div className="card shadow-xl">
  <figure><img alt='projectImage' src={img}  /></figure>
  <div className="card-body rounded-none pb-0 bg-blue-800" >
    <h2 className="card-title  text-blue-100 ">{name}</h2>
    <p className=' text-blue-100 '>{details}</p>
    <div className="card-actions pb-2 justify-end">
     <Link to={`/project/${id}`}> <button  className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Project;