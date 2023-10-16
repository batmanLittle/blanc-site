import "./App.css";
import React from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import ScrollBlock from "../ScrollBlock/ScrollBlock";

import Footer from "../Footer/Footer";
function App() {
  const refVanishBlock = React.useRef();
  const refGreenBlock = React.useRef();
  // const refBlueBlock = React.useRef();

  const [scrollA, setScrollA] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", function eee() {
      const nefeik = refVanishBlock.current.getBoundingClientRect().top;
      const rect = refGreenBlock.current.getBoundingClientRect().top;
      // const blockBlue = refBlueBlock.current.getBoundingClientRect().top;

      if (nefeik >= rect) {
        setScrollA(true);
      } else {
        setScrollA(false);
      }

      // console.log(blockBlue + "кард-титл");
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <Main ref={refGreenBlock} />

      <Footer />
      <ScrollBlock scrollA={scrollA} ref={refVanishBlock} />
    </div>
  );
}

export default App;
