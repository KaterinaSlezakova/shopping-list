import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { ListContext } from "./Form";

export default function Item({ setList, editItem }) {
  const list = useContext(ListContext);

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  
  };
  return (
    <div className="Item">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <div className="row pb-2 justify-content-center" key={id}>
            <div className="col-5">
              <p>{title}</p>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm "
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-outline-warning btn-sm"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
