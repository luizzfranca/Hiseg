import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  background-color: #29292e;
  width: 100%;
  height: 100px;
  padding: 3px;
  border-radius: 10px;
`;

export const UserPhoto = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 20px;
`;
export const ContainerName = styled.View`
  
`;
export const TextHello = styled.Text`
  color: white;
`;
export const TextName = styled.Text`
  color: white;
  margin-right: 40px;
`;

export const ContainerButton = styled(TouchableOpacity)`
  margin-left: 100px;
`;
