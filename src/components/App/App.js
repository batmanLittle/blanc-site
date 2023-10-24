import "./App.css";
import React from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import ScrollBlock from "../ScrollBlock/ScrollBlock";

import Footer from "../Footer/Footer";
function App() {
  const refVanishBlock = React.useRef();
  // const refGreenBlock = React.useRef();
  // const refBlueBlock = React.useRef();

  const [scrollGreen, setScrollGreen] = React.useState(false);
  const [scrollBlue, setScrollBlue] = React.useState(false);
  const [scrollLilac, setScrollLilac] = React.useState(false);

  return (
    <div className="App">
      <Header />

      <Main
        ref={refVanishBlock}
        setScrollGreen={setScrollGreen}
        setScrollBlue={setScrollBlue}
        setScrollLilac={setScrollLilac}
      />

      <Footer />
      <ScrollBlock
        scrollGreen={scrollGreen}
        ref={refVanishBlock}
        scrollBlue={scrollBlue}
        scrollLilac={scrollLilac}
      />
    </div>
  );
}

export default App;
