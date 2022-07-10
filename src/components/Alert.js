import React, { useContext, useEffect } from "react";
import { ListContext } from "./Form";

export default function Alert({ msg, type, removeAlert }) {
  const list = useContext(ListContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div className={`alert alert-${type} text-center`} role="alert">
      {msg}
    </div>
  );
}
