import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #121214;
`;

export const Content = styled.View`
  background-color: "#202024";
  padding: 8px;
  margin-top: 90px;
`;

export const ButtonBack = styled(TouchableOpacity)``;

export const ContainerName = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px;
  margin-top: 4px;
  margin-bottom: 8px;
  align-items: center;
`;

export const TextName = styled.Text`
  color: white;
`;

export const ContainerGroup = styled.View`
  display: flex;
`;

export const TextGroup = styled.Text`
  color: white;
`;

export const ContainerImage = styled.View`
  padding: 8px;
`;

export const ContainerBox = styled.View`
  border-radius: 6px;
  margin-bottom: 3px;
  overflow: hidden;
`;

export const ImageExercise = styled.Image`
  width: 100%;
  height: 400px;
`;

export const ContainerBoxSeriesAndRepetitions = styled.View`
  border-radius: 6px;
  padding-bottom: 4px;
  margin-top: 20px;
`;

export const ContainerExerciseAndSeries = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

export const ContentText = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TextSeries = styled.Text`
  color: white;
`;

export const ContentRepetitions = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TextRepetitions = styled.Text`
  color: white;
`;

export const ContainerButton = styled.View`
    margin-left: 40px;
    margin-top: 40px;
`;
