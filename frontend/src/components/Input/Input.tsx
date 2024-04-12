// Input.tsx 파일

import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

// Input 요소의 속성을 상속받아서 사용할 수 있도록 InputProps 타입 정의
type InputProps = InputHTMLAttributes<HTMLInputElement>;

// 스타일드 컴포넌트로 Input 스타일 정의
const InputWrapper = styled.input`
  padding: 10px 20px;
	min-width: 300px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

// Input 컴포넌트 정의 (타입 지정)
const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <InputWrapper {...rest} />;
};

export default Input;
