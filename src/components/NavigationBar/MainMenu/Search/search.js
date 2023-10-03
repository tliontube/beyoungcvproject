import React from "react";
import "./search.css"
function Search(){
    return(
        <div className="search__input--Parent">
            <input className="search__Input" type="text" placeholder="Search entire store here..."/>
            <button className="search__Input--Button">Search</button>
        </div>
    )
}
export default Search;