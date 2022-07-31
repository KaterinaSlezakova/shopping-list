import React, { useState, useReducer } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { reducer } from "./reducer";
import Item from "./components/Item";
import Alert from "./components/Alert";

import "./App.css";

export const ACTIONS = {
  ADD_ITEM: "add item",
  DELETE_ITEM: "delete item",
  TOGGLE_ITEM: "toggle item",
  CLEAR_ALL: "clear list",
  CLOSE_ALERT: "close alert",
  NO_VALUE: "no value",
};
const defaultState = {
  items: [],
  showAlert: false,
  alertType: "",
  alertMsg: "",
};

export default function App() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {
        id: new Date().getTime().toString(),
        complete: false,
        name
      };
      dispatch({ type: ACTIONS.ADD_ITEM, payload: newItem });
      setName("");
    } else {
      dispatch({ type: ACTIONS.NO_VALUE });
    }
  };
  const closeAlert = () => {
    dispatch({ type: ACTIONS.CLOSE_ALERT });
  };

  return (
    <div className="App">
      <div className="container">
        {state.showAlert && <Alert items={state} closeAlert={closeAlert} />}
        <div className="App-section shadow-lg mb-3 bg-body rounded">
          <Header />
          <form onSubmit={handleSubmit}>
            <div className="d-flex row justify-content-center pt-2 pb-3">
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
            </div>
          </form>
          <div className="item-container">
            {state.items.map((item) => {
              return <Item dispatch={dispatch} key={item.id} item={item} />;
            })}
            {state.items.length > 0 && (
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
