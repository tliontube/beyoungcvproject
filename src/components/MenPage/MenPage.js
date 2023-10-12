import React, { useEffect, useState } from "react";
import "./MenPage.css";
function ManPage() {
  const [results, setResults] = useState([]); // Use state to store the results
  const projectId = "f104bi07c490";

  async function fetchData() {
    const dynamicApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"gender":"Men"}`;
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
    <section className="ManPage__Parent--section">
      <section className="ManPage__Result--section">
        {results.map((result, index) => (
          <div className="ManPage__Content--section" key={index}>
            <section className="ManPage--img__section">
              <img
                className="ManPage_Result--img"
                src={result.displayImage}
                alt={result.name}
              />
            </section>
            <section className="ManPage_Result--product_info--section">
              <h3>{result.name}</h3>
              <p>{result.subCategory}</p>
              <h3>
                <span className="Man__Price">Rs : {result.price}</span>
              </h3>
            </section>
          </div>
        ))}
      </section>
    </section>
  );
}

export default ManPage;
