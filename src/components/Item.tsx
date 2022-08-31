import React from "react";
import { FaCheck, FaTrash, FaEdit } from "react-icons/fa";
import { ACTIONS } from "../actions";

export default function Item({ item, dispatch }) {
  return (
    <div className="Item pb-2 d-flex justify-content-center">
      <div className="row">
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
            className="btn btn-warning btn-sm"
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_ITEM, payload: { id: item.id } })
            }
          >
            <FaTrash />
          </button>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() =>
              dispatch({
                type: ACTIONS.EDIT_ITEM,
                payload: { id: item.id },
              })
            }
          >
            <FaEdit />
          </button>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() =>
              dispatch({
                type: ACTIONS.TOGGLE_ITEM,
                payload: { id: item.id },
              })
            }
          >
            <FaCheck />
          </button>
        </div>
      </div>
    </div>
  );
}
