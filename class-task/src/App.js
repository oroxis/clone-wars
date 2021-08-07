import './App.css';
import {
  Switch,
  Route,
  Link,
  NavLink,
  Router,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from './class/header/Header';
import Contact from './class/Contact';
import Shop from './class/Login';
import Product from './class/About';



function App() {
  const [state, setState] = useState(0)
  return (
    <div className="App">
      <header className="App-header"> 
       <Link to="/">HOME</Link> <br />  
        <Link to="/about">ABOUT</Link> <br />
        <Link to="/contact">CONTACT</Link>  <br />
        <Link to="/login">LOGIN</Link>  <br />
      </header>
      {/* <nav> 
     
        
        
      </nav> <br />
      <button onClick={() => setState(state + 1)}>Click</button>
      {state} */}
      
      <Switch>

      <Route path="/contact">
          <Contact/>
      </Route>

      <Route path="/product">
          <Product/>
      </Route>

      <Route path="/">
          <Shop/>
      </Route>

      </Switch>

    </div>
  );
}

export default App;