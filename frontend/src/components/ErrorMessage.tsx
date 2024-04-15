import React from "react";
import styled from "styled-components";

interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessageWrapper = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  text-align: left;
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  console.log(`ErrorMessage: message=${message}`);
  return <ErrorMessageWrapper>{message}</ErrorMessageWrapper>;
};

export default ErrorMessage;
