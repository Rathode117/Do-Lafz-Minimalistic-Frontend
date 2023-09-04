import Poems from './Poems';
import PoemSidebar from './PoemSidebar';
import './styles.css';
function Home(){

  return(
  <>
    <div className='homepage'>
        <Poems loc = "fromhome"/>
        <PoemSidebar/>
    </div> 
  </>

  );

}
export default Home;