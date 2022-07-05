import React, { useEffect } from "react";

export default function Alert({ list, msg, type, setAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [list]);

  const removeAlert = () => {
    setAlert({ show: false, type: "", msg: "" });
  };

  return (
    <div className={`alert alert-${type} text-center`} role="alert">
      {msg}
    </div>
  );
}
