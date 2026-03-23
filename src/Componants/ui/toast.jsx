import React from "react";

export function Toast({ children, ...props }) {
  return (
    <div className={`toast show ${props.className || ""}`} {...props}>
      {children}
    </div>
  );
}

export function ToastTitle({ children }) {
  return <strong>{children}</strong>;
}

export function ToastDescription({ children }) {
  return <div>{children}</div>;
}

export function ToastClose({ onClick }) {
  return (
    <button
      type="button"
      className="btn-close btn-close-white me-2 m-auto"
      aria-label="Close"
      onClick={onClick}
    ></button>
  );
}

export function ToastViewport() {
  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 9999 }}
    />
  );
}

export function ToastProvider({ children }) {
  return <>{children}</>;
}
