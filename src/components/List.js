import React from "react";
import { ACTIONS } from "../App.js";
import Item from "./Item.js";

export default function List({ items, dispatch }) {
  return (
    <div className="List">
      {items.length > 0 && (
        <div className="item-container">
          <Item {...items} dispatch={dispatch} />
          <button
            type="button"
            className="btn btn-danger d-grid gap-2 col-8 mx-auto mt-3"
            onClick={() => dispatch({ type: ACTIONS.CLEAR_ALL })}
          >
            Clear list
          </button>
        </div>
      )}
    </div>
  );
}
