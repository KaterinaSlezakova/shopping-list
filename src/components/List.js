import React, { useContext } from "react";
import Item from "./Item.js";
import { ListContext } from "./Form.js";

export default function List({ setList, editItem }) {
  const list = useContext(ListContext);

  return (
    <div className="List">
      {list.length > 0 && (
        <div className="item-container">
          <Item setList={setList} editItem={editItem} />
          <button
            type="button"
            className="btn btn-danger d-grid gap-2 col-8 mx-auto mt-3"
            onClick={() => setList([])}
          >
            Clear list
          </button>
        </div>
      )}
    </div>
  );
}
