import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = { id: new Date().getTime().toString(), name: item };
    setList([...list, newItem]);
    setItem("");
  };

  return (
    <div className="App">
      <section className="App-section">
        <h1 className="text-primary">Shopping list</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                value={item}
                placeholder="Type an item.."
                onChange={(e) => setItem(e.target.value)}
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </form>
        {list.length > 0 && (
          <div className="item-container">
            <List items={list} removeItem={removeItem} />
            <button className="btn btn-danger text-center">Clear all</button>
          </div>
        )}
      </section>
      <footer className="App-footer text-center">
        This project is open-sourced on Github.
      </footer>
    </div>
  );
}

export default App;
