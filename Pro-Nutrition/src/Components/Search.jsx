import React from "react";
import "./Search.css"

export default function Search(porps){
    return (
        <div className="search">
            <h3>Search</h3>
            <input onChange={e=>{props.handleSearch(e)}}className="input-type" type="search" />
        </div>
    )
}