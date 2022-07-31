import React, { useEffect } from "react";

export default function Alert({ alertMsg, alertType, items, closeAlert }) {

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [items]);

  return (
    <div className={`alert alert-${alertType} text-center`} role="alert">
      {alertMsg}
    </div>
  );
}
