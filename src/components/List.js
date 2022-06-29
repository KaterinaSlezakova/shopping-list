import React from "react";

export default function List({ items, removeItem }) {
  return (
    <div className="shopping-list">
      {items.map((item) => {
        const { id, name } = item;
        return (
          <div className="shopping-item" key={id}>
            <h4>{name}</h4>
            <button
              className="btn btn-outline-danger btn-sm"
              OnClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
