import styled from "styled-components/native";

import { TextInputProps } from "react-native";

export type Props = TextInputProps & {
  onChangeText?: (text: string) => void;
  value?: string;
  title?: string;
  errorMessage?: string;
};

export const Container = styled.TextInput<Props>`
  width: 90%;
  height: 56px;
  background-color: #1f1e25;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  margin-top: 5px;
  padding: 16px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 4px;
`;
