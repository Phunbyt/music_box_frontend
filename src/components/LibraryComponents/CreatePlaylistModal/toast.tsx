import React, { useEffect } from "react";
import "./toast.css";

const Toast = ({ toast, close }: Record<string, any>) => {
  useEffect(() => {
    if (!toast) return;

  }, [toast]);

  if (!toast) return null;
  return (
    <div className="toastBar">
      {toast}
    </div>
  );
};

export default Toast;
