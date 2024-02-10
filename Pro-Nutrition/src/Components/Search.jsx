import React from "react";

export default function Search(props){
  return(
    <div className="search">
      <h3>Search</h3>
      <input onChange={e=>{props.handleSearch(e)}} className="input-type" type="search" placeholder="Search your favourite food"></input>
    </div>
  )
}