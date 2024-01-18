import React from "react";
import { Container, ErrorMessage, Props } from "./styles";

export function Input({ onChangeText, value, title, errorMessage, ...rest }: Props) {
  const invalid = !!errorMessage;
  return (
    <>
      <Container
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#6B6B6B"
        placeholder={title}
        isInvalid={invalid}
        {...rest}
      />
      {invalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
}
