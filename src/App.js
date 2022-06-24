import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <header className="App-header">
          <h1 className="text-primary">shopping list</h1>
        </header>
        <section className="App-section">
          <form>
            <div className="row">
              <div className="col-4">
                <input type="text" className="form-control" />
              </div>
              <div className="col-2">
                <button className="btn btn-outline-primary">search</button>
              </div>
            </div>
          </form>
        </section>
        <footer className="App-footer">
          This project is open-sourced on Github.
        </footer>
      </div>
    </div>
  );
}

export default App;
