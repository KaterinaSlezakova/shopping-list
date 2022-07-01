import React from "react";

export default function List({ items, removeItem }) {
  return (
    <div className="shopping-list">
      {items.map((item) => {
        const { id, name } = item;
        return (
          <div className="shopping-container " key={id}>
            <div className="shopping-item d-inline-flex justify-content-start">
              <h4>{name}</h4>
            </div>

            <span className="btn-container d-inline-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                OnClick={() => removeItem(id)}
              >
                Remove
              </button>
              <button type="button" class="btn btn-outline-warning btn-sm">
                Edit
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
