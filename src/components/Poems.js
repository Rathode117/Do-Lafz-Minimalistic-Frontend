import { useEffect, useState } from 'react';
import './styles.css';


function Poems(props){
  const [poem, setPoem] = useState([{}]);
  const mypoem = [{
    id:1,
    name:"First Poem",
    author: "not me",
    poem: "This is the first poem."
  }, {
    id:2,
     name:"second Poem",
    author: "definitely not me",
    poem: "This is the second poem"}
  
  ];

  useEffect(
    ()=>{setPoem(mypoem)}
  ,[]);
  // console.log(poem);

 
  const Allpoems = poem.map(
    (element)=>{
      return (
        <>
          <div className='poempage1'>
          <h1 style={{ margin:0}}>{element.name}</h1>
          <h5 style={{ margin:0}}>-{element.author}</h5>
          <h3>
           {element.poem}
          </h3>
          </div>
        </>
      );
    }
  )
 
  return (
    <>
    <div className={props.loc}>
    {Allpoems}
    </div>
      

    </>

    
  );


}

export default Poems;