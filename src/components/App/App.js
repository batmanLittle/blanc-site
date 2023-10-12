import "./App.css";
import React from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import ScrollBlock from "../ScrollBlock/ScrollBlock";

import Footer from "../Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
      <ScrollBlock />
    </div>
  );
}

export default App;
