import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function List({ items, removeItem }) {
  return (
    <div>
      {items.map((item) => {
        const { id, name } = item;
        return (
          <ul class="list-group pb-2" key={id}>
            <li class="list-group-item border-0 d-flex justify-content-evenly align-items-center">
              <p>{name}</p>
              <div className="btn-container">
                <button type="button" className="btn btn-danger btn-sm me-3">
                  <FaTrash />
                </button>
                <button type="button" className="btn btn-warning btn-sm">
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
