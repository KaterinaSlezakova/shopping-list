import React from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-section shadow-lg mb-3 bg-body rounded">
          <Header />
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
