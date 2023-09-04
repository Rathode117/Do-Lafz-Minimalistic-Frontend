import { useState } from "react";
import loginavatar from '../images/loginavatar.jpg';
import './styles.css';

function Login(){

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
      <img className="loginavatar" src={loginavatar} alt="icon" />
      <form className="loginform" onSubmit={handleSubmit} >
        <input className="inputfields" onChange={handleChange} type="text" name="name"  placeholder="Enter Your Name"/>
        <input className="inputfields" onChange={handleChange} type="password" name="password" placeholder="password" />
        <input className="submitbutton" type="submit" />
      </form>
    </div>
   



    </>
  );

}
export default Login;