import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function List({ list, removeItem, editItem }) {
  return (
    <div>
      {list.map((item) => {
        const { id, title } = item;
        return (
          <ul className="list-group pb-2" key={id}>
            <li className="list-group-item border-0 d-flex justify-content-between align-items-center">
              <p>{title}</p>
              <div className="btn-container">
                <button type="button" className="btn btn-outline-danger btn-sm me-3" onClick={() => removeItem(id)}>
                  <FaTrash />
                </button>
                <button type="button" className="btn btn-outline-warning btn-sm" onClick={() => editItem(id)}>
                  <FaEdit />
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
    //       <div className="shopping-container " key={id}>
    //         <div className="shopping-item d-inline-flex justify-content-start">
    //           <h4>{name}</h4>
    //         </div>
    //         <span className="btn-container justify-content-between align-item-end">
    //           <button
    //             type="button"
    //             className="btn btn-outline-danger btn-sm"
    //             OnClick={() => removeItem(id)}
    //           >
    //             Remove
    //           </button>
    //         </span>
    //         <span
    //           className="btn-container justify-content-between
    //         align-item-end"
    //         >
    //           <button type="button" class="btn btn-outline-warning btn-sm">
    //             Edit
    //           </button>
    //         </span>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
