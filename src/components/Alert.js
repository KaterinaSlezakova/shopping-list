import React, { useEffect } from "react";

export default function Alert({ msg, type, closeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`alert alert-${type} text-center`} role="alert">
      {msg}
    </div>
  );
}
