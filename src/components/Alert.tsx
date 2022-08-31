import React, { useEffect } from "react";

export default function Alert({ alertMsg, alertType, closeAlert, isEditing }) {
  useEffect(() => {
    if (!isEditing) {
      const timeout = setTimeout(() => {
        closeAlert();
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className={`alert alert-${alertType} text-center`} role="alert">
      {alertMsg}
    </div>
  );
}
