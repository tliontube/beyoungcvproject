import React, { useEffect, useState } from "react";
import { fetchData } from "../SearchResult/SearchApi/SearchApi";

function SearchResult() {
  const baseUrl = "https://academics.newtonschool.co/";
  const projectId = "f104bi07c490";
  const [searchResults, setSearchResults] = useState([]);


  function fetchData(searchTerm) {
    const dynamicApi = `${baseUrl}api/v1/ecommerce/clothes/products?={"name":"${searchTerm}"}`;

    fetch(dynamicApi, {
      headers: {
        projectId: projectId,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    if (searchTerm) {
        
    }
  }, [searchTerm]);
  return (
    <section className="Parent__SearchResult--section">
      <section className="Search_Result--img__section">
        <img />
      </section>
      <section className="Search_Result--product_info--section">
        <h3></h3>
        <p></p>
        <h3>
          <span></span>
          <span></span>
        </h3>
      </section>
    </section>
  );
}

export default SearchResult;
