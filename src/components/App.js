import "../styles/App.css";
import React, { useState } from "react";
import Nav from "./NavigationBar/Nav";
import Footer from "../components/HomePage/Footer/Footer";
// import SearchResult from "./HomePage/SearchResult/SearchResult";

function App() {
  return (
    <div className="App">
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
