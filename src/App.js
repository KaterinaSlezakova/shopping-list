import React, { useState } from "react";

import "./App.css";
import List from "./components/List";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, name: item };
          }
          return item;
        })
      );
      setItem("");
      setEditId(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), name: item };
      setList([...list, newItem]);
      setItem("");
    }
  };

  const editItem = (id) => {
    const unicItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setItem(unicItem.name);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="App-section shadow-lg p-3 mb-5 bg-body rounded">
          <h1 className="text-primary">Shopping list</h1>
          <form onSubmit={handleSubmit}>
            <div className="row  pt-2 pb-3">
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  value={item}
                  autoFocus="on"
                  placeholder="Type an item..."
                  onChange={(e) => setItem(e.target.value)}
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-primary">
                  {!isEditing ? "Add" : "Edit"}
                </button>
              </div>
            </div>
          </form>
          {list.length > 0 && (
            <div className="item-container">
              <List items={list} removeItem={removeItem} editItem={editItem} />
              <button
                type="button"
                className="btn btn-danger d-grid gap-2 col-8 mx-auto mt-3"
                onClick={() => setList([])}
              >
                Clear list
              </button>
            </div>
          )}
        </div>
        <footer className="App-footer text-center">
          This project is open-sourced on Github.
        </footer>
      </div>
    </div>
  );
}

export default App;
