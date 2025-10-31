import React, { useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";
import { ToastContainer, ToastMessage, CloseButton } from "./Toast.styles";

interface ToastProps {
  toast: any;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return <CheckCircle size={20} />;
      case "error":
        return <XCircle size={20} />;
      case "warning":
        return <AlertTriangle size={20} />;
      case "info":
        return <Info size={20} />;
      default:
        return <Info size={20} />;
    }
  };

  return (
    <ToastContainer type={toast.type}>
      {getIcon()}
      <ToastMessage>{toast.message}</ToastMessage>
      <CloseButton onClick={() => onClose(toast.id)}>
        <X size={16} />
      </CloseButton>
    </ToastContainer>
  );
};

export default Toast;
