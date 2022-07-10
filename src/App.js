import React, { useState, useContext } from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Alert from "./components/Alert";
import { ListContext } from "./components/Form";

import "./App.css";

function App() {
  const list = useContext(ListContext);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // if (!name) {
  //   //   // setAlert({ show: true, type: "warning", msg: "Please type the item" });
  //   // } else if (name && isEditing) {
  //   //   setList(
  //   //     list.map((item) => {
  //   //       if (item.id === editId) {
  //   //         return { ...item, title: name };
  //   //       }
  //   //       return item;
  //   //     })
  //   //   );
  //   //   setEditId(null);
  //   //   setIsEditing(false);
  //   //   // setAlert({ show: true, type: "primary", msg: "Item has been changed" });
  //   //   setName("");
  //   } else {
  //     const newItem = { id: new Date().getTime().toString(), title: name };
  //     setList([...list, newItem]);
  //     // setAlert({ show: true, type: "success", msg: "Item has been added" });
  //     setName("");
  //   }
  // };

  // const editItem = (id) => {
  //   const unicItem = list.find((item) => item.id === id);
  //   setIsEditing(true);
  //   setEditId(id);
  //   setName(unicItem.title);
  // };

  // const clearList = () => {
  //   setList([]);
  //   // setAlert({ show: true, type: "danger", msg: "List has been deleted" });
  // };

  return (
    <div className="App">
      <div className="container">
        {alert.show && <Alert {...alert} list={list} setAlert={setAlert} />}
        <div className="App-section shadow-lg mb-3 bg-body rounded">
          <Header />
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
