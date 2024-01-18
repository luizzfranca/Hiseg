import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  margin-top: 50px;

  background-color: #121214;
  width: 90%;
  height: 40px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
`;
