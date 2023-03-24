import './App.css';
import Home from'./Home';
import About from './About';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  // Router will take care of all routes in our program
  // We have a temporary nav bar in place

  // Home.js contains search bar
  return (
    <Router>
      <div className="App">
        <ul className="App-header">  
          <li>  
            <Link to="/">Home</Link>  
          </li>  
          <li>  
            <Link to="/about">About Us</Link>  
          </li>  
          </ul> 
      <Routes>
        <Route exact path='/' element = {< Home/>}></Route>
        <Route exact path='/about' element = {< About/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
