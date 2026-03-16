import React, { useEffect } from "react";

interface AlertProps {
  alertMsg: string;
  alertType: string;
  closeAlert: () => void;
  isEditing: boolean;
}
export default function Alert({ alertMsg, alertType, closeAlert, isEditing }: AlertProps) {
  useEffect(() => {
    if (!isEditing) {
      const timeout = setTimeout(() => {
        closeAlert();
      }, 4000);
      return () => clearTimeout(timeout);
    }
  },[isEditing, closeAlert]);

  return (
    <div className={`alert alert-${alertType} text-center`} role="alert">
      {alertMsg}
    </div>
  );
}
