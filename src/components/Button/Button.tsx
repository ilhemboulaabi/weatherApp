import React from "react";
import StyledButton from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  style = {},
  size = "medium",
  disabled = false,
  type= "primary"
}) => {

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <StyledButton
      style={style}
      onClick={handleClick}
      disabled={disabled}
      size={size}
      type={type}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
