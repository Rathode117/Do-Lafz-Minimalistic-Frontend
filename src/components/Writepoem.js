import { useState } from "react";
import loginavatar from '../images/loginavatar.jpg';
import './styles.css';

function Writepoem(){

  const [input,setinput] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setinput(values=>({...values,[name]:value}));

  }
  return(
    <>
    <div className="divloginform">
      <form className="loginform" onSubmit={handleSubmit} >
        <input className="inputfields" onChange={handleChange} type="text" name="poemname"  placeholder="Poem Name"/>
        <input  className="inputfields" onChange={handleChange} type="text" name="poemauthor" placeholder="Author"></input>
        <br/>
        <textarea
        onChange={handleChange}
        name="poem"
        placeholder="Write here..."
        rows={20}
        cols={60}
      />
      <br/>
        <input className="submitbutton" type="submit" />
      </form>
    </div>
   



    </>
  );

}
export default Writepoem;