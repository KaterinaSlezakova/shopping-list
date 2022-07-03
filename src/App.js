import React, { useState } from "react";

import "./App.css";
import List from "./components/List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const editItem = (id) => {
    const unicItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(unicItem.title);
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
                  value={name}
                  autoFocus="on"
                  placeholder="Type an item..."
                  onChange={(e) => setName(e.target.value)}
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
              <List list={list} removeItem={removeItem} editItem={editItem} />
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
