import styled, { css } from "styled-components";
import { StyledButtonProps } from "./types";

const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, color 0.3s;

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 4px 8px;
      font-size: 12px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      padding: 12px 24px;
      font-size: 16px;
    `}

  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: #1976d2;
      color: #fff;

      &:hover:not(:disabled) {
        background-color: #1565c0;
      }

      &:active:not(:disabled) {
        background-color: #0d47a1;
      }
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: #e0e0e0;
      color: rgba(0, 0, 0, 0.87);

      &:hover:not(:disabled) {
        background-color: #bdbdbd;
      }

      &:active:not(:disabled) {
        background-color: #9e9e9e;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

export default StyledButton;
