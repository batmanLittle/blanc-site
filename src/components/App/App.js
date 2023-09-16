import "./App.css";
import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Footer from "../Footer/Footer";
function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // lerp: 1,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <div className="App">
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                </>
              }
            />
          </Routes>
          <div data-scroll-container ref={containerRef}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Main />
                  </>
                }
              />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
