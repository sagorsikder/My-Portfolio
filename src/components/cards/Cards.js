import React from 'react';
import './cards.css'

const cards = () => {
    return (
   
       <div className="col-4">
             <div className="card">
            <div className="card-body">
            <img className='img-fluid w-100 img-edit rounded' src="https://th.bing.com/th/id/R.5f4e4af4664a8b40288c9c1a382b1187?rik=8q3YGs4NKDNQ4A&riu=http%3a%2f%2fwww.jeanneschinto.com%2fuploads%2f3%2f1%2f1%2f8%2f31182983%2fimg-2840_orig.jpg&ehk=UaFftvK3B6JV3yZBVDIj5ghdkQvv7fQpWvoAx98XKzg%3d&risl=&pid=ImgRaw&r=0" alt="" />
             <h5 className="card-title">Bangla</h5>
             <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse odit libero vero distinctio est cumque dignissimos reiciendis temporibus atque voluptatem?
             </p>
             <p>
                Time Required : 30
             </p>
             <a href="#" className="btn btn-primary">add</a>
      </div>
    </div>
  </div>
       
    );
};

export default cards;