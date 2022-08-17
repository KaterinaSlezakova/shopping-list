import React, { useState, useReducer, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { reducer } from "./reducer";
import Item from "./components/Item";
import Alert from "./components/Alert";
import { ACTIONS } from "./actions";
import { defaultState } from "./defaultState";

import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state.items));
  }, [state.items]);

  const closeAlert = () => {
    dispatch({ type: ACTIONS.CLOSE_ALERT });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: ACTIONS.NO_VALUE });
    }
    if (state.isEditing) {
      dispatch({ type: ACTIONS.SAVE_EDITED_ITEM, payload: { name } });
      setName("");
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        complete: false,
        name,
      };
      dispatch({ type: ACTIONS.ADD_ITEM, payload: { newItem } });
      setName("");
    }
  };
  return (
    <div className="App">
      <div className="container">
        {state.showAlert && (
          <Alert
            alertType={state.alertType}
            alertMsg={state.alertMsg}
            closeAlert={closeAlert}
          />
        )}
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
            {Object.values(state.items).map((item) => {
              return <Item dispatch={dispatch} item={item} key={item.id} />;
            })}
            {Object.values(state.items).length > 0 && (
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
