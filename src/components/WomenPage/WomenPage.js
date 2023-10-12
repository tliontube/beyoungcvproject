import { useState, useEffect } from "react";
import React from "react";
import "./WomenPage.css"
function WomenPage(){
    const [results, setResults] = useState([]); // Use state to store the results
    const projectId = "f104bi07c490";
  
    async function fetchData() {
      const dynamicApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"gender":"WoMen"}`;
      try {
        const response = await fetch(dynamicApi, {
          headers: {
            projectId: projectId,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setResults(data.data); // Update the state with fetched data
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []); // Ensure the useEffect runs only once
  
    return (
      <section className="WoManPage__Parent--section">
      <section className="WoManPage__Result--section">
        {results.map((result, index) => (
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

export default WomenPage;