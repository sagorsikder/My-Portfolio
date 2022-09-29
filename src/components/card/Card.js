import React from 'react';
import Cards from '../cards/Cards';


const Card = ({click}) => {
    // fake data
 const arr= [{
    img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
   title:'Biology',
    details:'The first native name for Bengali was Gauda-bhasa in 16th century. In the 19th century, it was known as Vanga-bhasa or Bangala-bhasa. In the 21st century, it is known as Bangla-bhasa.',
    time:30,
    id:1
 },

    {
        img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
       title:'English',
        details:'English is an Indo-European language and belongs to the West Germanic group of the Germanic languages. Old English originated from a Germanic tribal and linguistic continuum along the Frisian North Sea coast, whose languages gradually evolved into the Anglic languages in the British Isles, and into the Frisian ',
        time:40,
        id:2
     },
    
     {
            img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
           title:'Math',
            details:'Mathematics  is an area of knowledge that includes such topics as numbers (arithmetic and number theory), formulas and related structures (algebra) ',
            time:20,
            id:3
         },
        
        {
                img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
               title:'Physics',
                details:'Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force. Physics is one of the most fundamental scientific disciplines',
                time:50 ,
                id:4
        },
            
          {
                    img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
                   title:'Chemestry',
                    details:'Chemistry is the scientific study of the properties and behavior of matter. It is a natural science that covers the elements that make up matter to the compounds composed of atoms, molecules and ions: their composition',
                    time:50,
                    id:5
         },
             
         {
            img:'https://scrc.siu.edu/_common/images/new-images/rb3.jpg' ,
           title:'Biology',
            details:'Biology is the scientific study of life. It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field. For instance, all organisms are made up of cells that process ',
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