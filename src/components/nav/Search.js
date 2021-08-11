import React, { useState } from "react";

import './Search.css'
const Search = ({ setQuery }) => {
  const [searchedItem, setSearchedItem] = useState();
  return (
    <div className="main">
      <div className="search">
        <input
          onChange={(e) => setSearchedItem(e.target.value)}
          placeholder = "Enter character name"           
          value = {searchedItem}
          
          
        />
      </div>
      <div className="button">
        <button onClick={() => {setQuery();setSearchedItem('')}}><i className = 'fa fa-refresh fa-2x'></i></button>
        <button onClick={() => {setQuery(searchedItem);}} > <i className= 'fa fa-search fa-2x'></i></button>
      </div>
    </div>
  );
};

export default Search;
