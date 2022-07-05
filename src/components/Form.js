import React, { useState } from "react";
import List from "./List";

export default function Form() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return "Please type an item";
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (editId === item.id) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setIsEditing(false);
      setEditId(null);
      setName("");
    } else {
      const definedList = { id: new Date().getTime().toString(), title: name };
      setList([...list, definedList]);
      setName("");
    }
  };
  const editItem = (id) => {
    const changedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(changedItem.title);
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-row justify-content-center pt-2 pb-3">
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              value={name}
              autoFocus="on"
              placeholder="Type an item..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary">
              {!isEditing ? "Add" : "Edit"}
            </button>
          </div>
        </div>
      </form>
      <List list={list} setList={setList} editItem={editItem} />
    </div>
  );
}
