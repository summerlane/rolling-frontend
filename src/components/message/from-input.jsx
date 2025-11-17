import React from "react";
import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import {
  FormInputStyle,
  ErrorMessage,
  FormField,
} from "@/pages/message-page.jsx";

const ErrorOverrideStyle = css`
  border-color: ${colors.error};

  &:focus {
    border-color: ${colors.error};
  }
`;
const StyledInput = styled.input`
  ${() => FormInputStyle}
  ${(props) => props.$hasError && ErrorOverrideStyle}
`;

export default function FromInput({
  id,
  name,
  placeholder,
  hasError,
  errorMessage,
  onBlur,
  onChange,
  value,
}) {
  return (
    <FormField>
      <StyledInput
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        $hasError={hasError}
      />
      {/* 에러 메시지 표시 */}
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormField>
  );
}
