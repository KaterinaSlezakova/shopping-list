import React from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { ACTIONS } from "../actions";

export default function Item({ item, dispatch }) {
  return (
    <div className="Item">
      <div className="row pb-2 justify-content-center" key={item.id}>
        <div
          className="col-6"
          style={{
            fontWeight: "bold",
            textDecoration: item.complete ? "line-through" : "none",
          }}
        >
          <p>{item.name}</p>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary btn-sm shadow"
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_ITEM, payload: { id: item.id } })
            }
          >
            <FaTrashAlt />
          </button>
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-warning btn-sm shadow"
            onClick={() =>
              dispatch({ type: ACTIONS.TOGGLE_ITEM, payload: { id: item.id } })
            }
          >
            <FaCheck />
          </button>
        </div>
      </div>
    </div>
  );
}
