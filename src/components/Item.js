import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Item({ list, setList, editItem }) {
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    // setAlert({ show: true, type: "danger", msg: "Item has been removed" });
  };
  return (
    <div className="Item">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <ul className="list-group pb-2" key={id}>
            <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
              <p>{title}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm me-3"
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-sm"
                   onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
