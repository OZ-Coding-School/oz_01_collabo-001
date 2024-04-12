import React from "react";
import styled, { css } from "styled-components";

// 버튼 크기에 대한 타입 정의
type ButtonSize = "sm" | "md" | "lg";

// 버튼 변형에 대한 타입 정의
type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outlinePrimary"
  | "outlineSecondary"
  | "outlineTertiary";

// Button 컴포넌트의 props 타입 정의
interface ButtonProps {
  disabled?: boolean;
  size: ButtonSize;
  variant: ButtonVariant;
  children: React.ReactNode;
}

// 버튼 크기에 따른 스타일 정의
const SIZES: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    --button-font-size: 16px;
    --button-padding: 10px 20px;
    height: 36px;
  `,
  md: css`
    --button-font-size: 18px;
    --button-padding: 10px 40px;
    height: 46px;
  `,
  lg: css`
    --button-font-size: 20px;
    --button-padding: 15px 40px;
    height: 56px;
  `,
};

// 버튼 변형에 따른 스타일 정의
const VARIANTS: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary : css`
    --button-color: #ffffff;
    --button-bg-color: #0067FB;
  `,
  secondary: css`
    --button-color: #ffffff;
    --button-bg-color: #002E71;
  `,
  tertiary: css`
    --button-color: #ffffff;
    --button-bg-color: #FD4E5D;
  `,
  outlinePrimary: css`
    --button-color: #0067FB;
    --button-bg-color: #ffffff;
    --button-solod: 1px solid #0067FB;
  `,
  outlineSecondary: css`
    --button-color: #002E71;
    --button-bg-color: #ffffff;
    --button-solod: 1px solid #002E71;
  `,
  outlineTertiary: css`
    --button-color: #FD4E5D;
    --button-bg-color: #ffffff;
    --button-solod: 1px solid #FD4E5D;
  `,
};

// Button 컴포넌트 정의
const Button: React.FC<ButtonProps> = ({ disabled, size, variant, children, ...props }) => {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

// 스타일드 컴포넌트로 버튼 스타일 정의
const StyledButton = styled.button<{
  sizeStyle: ReturnType<typeof css>;
  variantStyle: ReturnType<typeof css>;
}>`
  ${props => props.sizeStyle}
  ${props => props.variantStyle}

  margin: 0;
  border: none;
  cursor: pointer;
  font-size: var(--button-font-size, 14px);
  padding: var(--button-padding, 10px 20px);
  min-width: 120px;
  border-radius: var(--button-radius, 12px);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0067FB);
  border: var(--button-solod, none);
  display: flex;
  justify-content: center;
  align-items: center;
 

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #0067FB);
  }
`;

export default Button;
