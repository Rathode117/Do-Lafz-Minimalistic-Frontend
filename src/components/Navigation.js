import {NavLink, Link} from 'react-router-dom';  //NavLink is used to navigate the application,it also has some other functionalities discussed later. 
import './styles.css';  //importing for styling
import TopImg from '../images/TopImg.png';

function Navigation(){
  return(
      /*The NavLink has activeClassName attribute that gives the class "active" to the route we are currently on.
      the to attribute is used fir addressing.
      */

    <>
   <div className='mydiv' >
   <div className='divloginnav'>
   <ul className='loginnav'>
        <li className='navitem'><Link className="loginitem" to="/login">login</Link></li> 
        <li className='navitem'><Link className="loginitem" to="/signup">signUp</Link></li>
      </ul>
   </div>
   <img className='TopImg' src={TopImg} alt="toplogo"/>
      <ul className='nav'>
        <li className='navitem'><NavLink className="item" activeClassName="active" to="/">Home</NavLink></li> 
        <li className='navitem'><NavLink className="item" activeClassName="active" to="/poems">Poems</NavLink></li>
        <li className='navitem'><NavLink className="item" activeClassName="active" to= "/write">Write</NavLink></li>
      </ul>
      <div className="horizontal-line"></div>
    </div>
    </>
   
  );


}

export default Navigation;