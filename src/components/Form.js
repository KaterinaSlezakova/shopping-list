import React, { useState, createContext } from "react";
import List from "./List";

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem("list")));
//   } else {
//     return [];
//   }
// };
export const ListContext = createContext();

export default function Form() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("list", JSON.stringify(list));
  // }, [list]);

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
      <ListContext.Provider value={list}>
        <form onSubmit={handleSubmit}>
          <div className="d-flex row justify-content-center pt-2 pb-3">
            <div className="col-9">
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
        <List setList={setList} editItem={editItem} />
      </ListContext.Provider>
    </div>
  );
}
