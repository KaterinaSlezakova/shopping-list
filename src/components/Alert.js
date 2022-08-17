import React, { useEffect } from "react";

<<<<<<< HEAD
export default function Alert({ msg, type, closeAlert }) {
=======
export default function Alert({ alertMsg, alertType, closeAlert }) {


>>>>>>> new-branch
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
