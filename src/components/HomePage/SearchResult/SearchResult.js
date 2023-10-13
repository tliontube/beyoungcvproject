import React from "react";
import "./SearchResult.css";
function SearchResult({ searchResults}) {
  return (
    <section className="WoManPage__Parent--section">
    <section className="WoManPage__Result--section">
      {searchResults.map((result, index) => (
        <div className="WoManPage__Content--section" key={index}>
          <section className="ManPage--img__section">
            <img
              className="WoManPage_Result--img"
              src={result.displayImage}
              alt={result.name}
            />
          </section>
          <section className="WoManPage_Result--product_info--section">
            <h3>{result.name}</h3>
            <p>{result.subCategory}</p>
            <h3>
              <span className="Woman__Price">Rs : {result.price}</span>
            </h3>
          </section>
        </div>
      ))}
    </section>
  </section>
  );
}

export default SearchResult;

{/* <section className="Parent__SearchResult--section">
{searchResults && searchResults.map((result, index) => (
  <div key={index}>
    <section className="Search_Result--img__section">
      <img className="Search_Result--img" src={result.displayImage} alt={result.name} />
    </section>
    <section className="Search_Result--product_info--section">
      <h3>{result.name}</h3>
      <p>{result.subCategory}</p>
      <h3>
        <span>{result.price}</span>
      </h3>
    </section>
  </div>
))}
</section> */}