import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-primary">shopping list</h1>
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
      </header>
    </div>
  );
}

export default App;
