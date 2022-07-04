import React, { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

import "./App.css";

const getLocalStorage = () => {
let list = localStorage.getItem("list");
if (list) {
  return list = JSON.parse(localStorage.getItem("list"));
} else {
  return [];
}

};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: true, type: "", msg: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const removeAlert = () => {
    setAlert({ show: false, type: "", msg: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({ show: "true", type: "warning", msg: "Please type the item" });
    } else if (name && isEditing) {
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
      setAlert({ show: true, type: "primary", msg: "Item has been changed" });
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      setAlert({ show: true, type: "success", msg: "Item has been added" });
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
    setAlert({ show: "true", type: "danger", msg: "Item has been removed" });
  };
  const clearList = () => {
    setList([]);
    setAlert({ show: true, type: "danger", msg: "List has been deleted" });
  };

  return (
    <div className="App">
      <div className="container">
        {alert.show && (
          <Alert {...alert} list={list} removeAlert={removeAlert} />
        )}
        <div className="App-section shadow-lg p-3 mb-3 bg-body rounded">
          <h1 className="text-primary">Shopping list</h1>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row justify-content-center pt-2 pb-3">
              <div className="col-8">
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
                onClick={clearList}
              >
                Clear list
              </button>
            </div>
          )}
        </div>
        <footer className="App-footer text-center">
          This project is{" "}
          <a href="https://github.com/KaterinaSlezakova/shopping-list">
            open-sourced on <FaGithub />
          </a>{" "}
          and{" "}
          <a href="https://shopping-list-bud.netlify.app/">
            hosted on <SiNetlify />
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
