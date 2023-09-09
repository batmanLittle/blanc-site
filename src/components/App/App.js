import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
