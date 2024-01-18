import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)``;

export const Content = styled.View`
  align-items: center;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;
  gap: 10px;
`;

export const ExerciseImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 6px;
`;

export const ContainerTitle = styled.View``;

export const Name = styled.Text`
  color: white;
`;

export const Series = styled.Text`
  color: white;
`;
