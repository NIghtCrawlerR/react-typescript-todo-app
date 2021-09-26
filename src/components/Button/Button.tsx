import React from "react";

interface ButtonType {
  children: React.ReactNode;
  onClick: () => void
}

const Button: React.FC<ButtonType> = ({ children, onClick }) => {
  return <button type="button" onClick={onClick}>{children}</button>;
};

export default Button;
