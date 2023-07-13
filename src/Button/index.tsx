import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}>
        {label}
    </button>
  );
};

export default Button;