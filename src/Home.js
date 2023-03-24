import React from "react";
import GetData from './REST';
import { useRef, useState } from 'react';

function Home() {
  // Hooks
  // switch between drop down is visible to not visible using useState hook in react
  const [dropdownvisibility, setdvisibility] = useState(false);
  // Always set the text of the search bar to whatever is being typed, react will rerender the component anytime the searchtext changes to make the search bar text seem fluid
  const [searchText, setSearchText] = useState("Search...");
  const [count, setCount] = useState(0);
  // Use the useRef hook to refer to the dropdown button outside of react components
  const dropdownv = useRef(null)
  // Hook 
  const [books, setBooks] = useState([]);
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

  // async functions for handling frontend requests to the backend
  // async function querySearch(search){
  //   const res = await fetch("/query",
  //   {
  //     method: 'GET',
  //   })

  //   console.log(res)
  //   // .json() method parses json back into a javascript object
  //   const data = await res.json()
  //   console.log(data);
  // }
  async function querySearch(search){
    const res = await fetch("/api/query",
    {
      method: 'POST',
      body: JSON.stringify({
        title: search
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    console.log(res)
    // .json() method parses json back into a javascript object
    const data = await res.json()
    console.log("break");
    console.log(data);
    const books = data["books"];
    console.log("books below")
    console.log(books[0]["Title"]);
    setBooks([...books[0]["Title"]]);
  }

  // Handle submit button and send request for that query to the server
  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchText);
    setCount(count + 1);
    // grabs from backend
    querySearch(searchText);
  }

  function handleChange(event) {
    setSearchText(event.target.value)
  }

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
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchText} onChange={handleChange}></input>
          <button type="submit" className="searchBTN" value="submit"><i className="fa fa-search"></i></button>
        </form>
        <div>
        Count = {count}
        </div>
          {books}
      </div>
    </div>
  );

  //      <GetData/>, Include
}

export default Home;

// Form handling does not allow for permanent state change. Use prevent-default so that the form is not submitted automatically and refreshes the page.
//