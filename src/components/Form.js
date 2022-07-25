import React, { useState, createContext, useReducer } from "react";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import List from "./List";

export const ListContext = createContext();

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem("list")));
//   } else {
//     return [];
//   }
// };

export const ACTIONS = {
  ADD: "add",
  CLEAR: "clear list",
  REMOVE: "remove item",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, newItem(action.payload.name)];
    case ACTIONS.CLEAR:
    // return "clear list";
    case ACTIONS.REMOVE:
    // return "remove item";
    default:
      throw new Error("no matching action type");
  }
};
function newItem(name) {
  return { id: new Date().getTime().toString(), name: name, complete: false };
}

// const defaultState = { list: [], editID: null, isEditing: false };
export default function Form() {
  // const [list, setList] = useState([]);
  // const [editId, setEditId] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  // useEffect(() => {
  //   localStorage.setItem("list", JSON.stringify(list));
  // }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: ACTIONS.ADD, payload: { name: name } });
      setName("");
    }
    // if (!name) {
    //   return console.log("Please type an item");
    // } else if (name && isEditing) {
    //   setList(
    //     list.map((item) => {
    //       if (editId === item.id) {
    //         return { ...item, title: name };
    //       }
    //       return item;
    //     })
    //   );
    //   setIsEditing(false);
    //   setEditId(null);
    //   setName("");
    // } else {
    //   const definedList = { id: new Date().getTime().toString(), title: name };
    //   setList([...list, definedList]);
    //   setName("");
    // }
  };

  const editItem = (id) => {
    const changedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(changedItem.title);
  };

  return (
    <ListContext.Provider value={list}>
      <div className="Form">
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
      </div>{" "}
    </ListContext.Provider>
  );
}
