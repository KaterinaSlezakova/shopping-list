import React, { useEffect } from "react";

export default function Alert({ list, removeAlert, msg, type }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div class={`alert alert-${type} text-center`} role="alert">
      {msg}
    </div>
  );
}
