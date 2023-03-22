import './App.css';
import GetData from './REST';
import { useRef, useState } from 'react';

function App() {
  // Hooks
  const [dropdownvisibility, setdvisibility] = useState(false);
  const dropdownv = useRef(null)

  // Event handlers
  const handleDClick = event => {
    if (dropdownvisibility){
      dropdownv.current.style.visibility = "visible";
      console.log('asdf')
    }
    else {
      dropdownv.current.style.visibility = "hidden";
      console.log('asdaf')
    }
    setdvisibility(!dropdownvisibility);
  }
/*
  return (
    <div>
      <div className="SiteHeading">
        Library Management System
      </div>
      <div className="SearchBar">
        <div className="DropDownMenu">
          <div className="dropdownbtn" onClick={handleDClick}>All</div>
          <div className="dropdowncontent" ref= {dropdownv}>
            <a href="#">Title</a>
            <a href="#">Author</a>
            <a href="#">Genre</a>
          </div>
        </div>
        <input type="text" placeholder="Search...">
        </input>
        <button type="submit" className="searchBTN"><i className="fa fa-search"></i></button>
      </div>
      <GetData/>
    </div>
  );
  */
  return (
    <GetData/>
  );
}

export default App;
