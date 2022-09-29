import React from 'react';
import Cards from '../cards/Cards';


const Card = ({click}) => {
 const arr= [{
    img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
   title:'Biology',
    details:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nulla?',
    time:30,
    id:1
 },

    {
        img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
       title:'Bangla',
        details:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nulla?',
        time:40,
        id:2
     },
    
     {
            img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
           title:'English',
            details:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nulla?',
            time:20,
            id:3
         },
        
        {
                img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
               title:'Physics',
                details:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nulla?',
                time:50 ,
                id:4
        },
            
          {
                    img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
                   title:'Chemestry',
                    details:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nulla?',
                    time:50,
                    id:5
         },
             
         {
            img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
           title:'Chemestry',
            details:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nulla?',
            time:30,
            id:6
        }
       
                
                                        
    ];
    return (
        <div>
        
         
           <div className='row p-5'>
            {
                arr.map(n=><Cards key={n.id} img={n.img} title={n.title} details={n.details} time={n.time} click={click}></Cards> )
            }
           </div>
        
  

        </div>
    );
};

export default Card;