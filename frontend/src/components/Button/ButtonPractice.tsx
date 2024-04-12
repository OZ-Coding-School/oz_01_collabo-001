import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "disabled";
  size: "sm" | "md" | "lg";
  children: ReactNode;
};

// variant에 따른 스타일 정의
const variantStyles = {
  primary: css`
    background-color: #007bff;
    color: #ffffff;
  `,
  secondary: css`
    background-color: #6c757d;
    color: #ffffff;
  `,
  disabled: css`
    background-color: #e0e0e0;
    color: #a0a0a0;
  `,
};

// size에 따른 스타일 정의
const sizeStyles = {
  sm: css`
    padding: 8px 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 10px 16px;
    font-size: 16px;
  `,
  lg: css`
    padding: 12px 24px;
    font-size: 18px;
  `,
};

// StyledButton 컴포넌트 정의
const StyledButton = styled.button<ButtonProps>`
  ${({ variant }) => variantStyles[variant]}
  ${({ size }) => sizeStyles[size]}
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`; // Button 컴포넌트 정의
const ButtonPractice: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default ButtonPractice;
