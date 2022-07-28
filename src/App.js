import React, { useState, useReducer } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import List from "./components/List";
import { reducer } from "./reducer";
import Item from "./components/Item";

import "./App.css";

export const ACTIONS = {
  ADD_ITEM: "add item",
  DELETE_ITEM: "delete item",
  TOGGLE_ITEM: "toggle item",
  CLEAR_ALL: "clear list",
};

export default function App() {
  const [name, setName] = useState("");
  const [items, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: ACTIONS.ADD_ITEM, payload: { name: name } });
      setName("");
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="App-section shadow-lg mb-3 bg-body rounded">
          <Header />
          <form onSubmit={handleSubmit}>
            <div className="d-flex row justify-content-center pt-2 pb-3">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  autoFocus="on"
                  placeholder="Type an item..."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </form>
          <div className="item-container">
            {items.map((item) => {
              return <Item dispatch={dispatch} key={item.id} item={item} />;
            })}
            {items.length > 0 && (
              <button
                type="button"
                className="btn btn-danger d-grid gap-2 col-8 mx-auto mt-3"
                onClick={() => dispatch({ type: ACTIONS.CLEAR_ALL })}
              >
                Clear list
              </button>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
