import { createBrowserRouter, createRoutesFromElements,
  Route, RouterProvider} from 'react-router-dom';      //importing all the required components.
import Home from './components/Home';
import Root from './components/Root';
import Poems from './components/Poems';
import Login from './components/login';
import Signup from './components/Signup';
import Writepoem from './components/Writepoem';




function App() {

  const myrouter = createBrowserRouter(      //Main Router Function
    createRoutesFromElements(                
      /*Now we nest all the other routes inside of the "/" route, also the <Root/> component consists of all the elements
       that you want to have on all Pages, eg Navigation and Footer.
       The Next routes are to the Pages of your Application
       NOTE - the index is the Landing page of your Application.
       NOTE - Do not Create your homepage on App.js , else you will get errors "You cannot render a <Router> inside another <Router>""
       */
      <Route path = "/" element = {<Root/>}>  
        <Route index element = {<Home/>}/>    
        <Route path ="/poems" element = {<Poems loc = "fromnavigation"/>}/>
        <Route  path = "/write" element = {<Writepoem/>}/>
        <Route  path = "/login" element = {<Login/>}/>
        <Route  path = "/signup" element = {<Signup/>}/>
      </Route>      
    )
  )

  return (
    <>
    <RouterProvider router = {myrouter}/>
    </>      //All data router objects are passed to this component to render your app.
  );
}



export default App;
