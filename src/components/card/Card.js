import React from 'react';
import Cards from '../cards/Cards';


const Card = () => {
 const arr= [1,
        2,
        3,
        4,
        5,
        6
    ];
    return (
        <div>
         
         
           <div className='row p-5'>
            {
                arr.map(n=><Cards name={n}></Cards> )
            }
           </div>
        
  

        </div>
    );
};

export default Card;