import React from "react";
import styled from "styled-components";

interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessageWrapper = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
`;

/*
  color: red;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;
  -----
  position: absolute;
  color: red;
  top: 100%; 
  left: 0; 
  font-size: 0.75rem; 
  width: 100%;
*/

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  console.log(`ErrorMessage: message=${message}`);
  return <ErrorMessageWrapper>{message}</ErrorMessageWrapper>;
};

export default ErrorMessage;
