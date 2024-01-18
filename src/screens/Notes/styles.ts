
import { Platform } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #121214;
  padding: 10px;
`;

export const Title = styled.Text`
  color: white;
  top: 60px;
  margin-left: 9px;
  font-size: 17px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: #00875f;
  height: 54px;
  width: 54px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  ${Platform.OS === 'android' ? 'top: 125px;' : 'top: 119px;'}
  ${Platform.OS === 'android' ? 'right: 23px;' : 'left: 314px;'}
`;

export const TextButtonAdd = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const TextEmpty = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-top: 80px;
`;
