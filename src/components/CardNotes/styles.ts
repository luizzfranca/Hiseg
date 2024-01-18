import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: #1f1e25;
  border-radius: 5px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;



export const NotesName = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #fdfcfe;
  margin-left: 16px;
  
`;

export const ButtonRemove = styled.TouchableOpacity`
  background-color: #e23c44;
  height: 56px;
  width: 56px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: 3px;
`;

export const ButtonEdit = styled.TouchableOpacity`
  background-color: #00875F;
  height: 56px;
  width: 56px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonRemove = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const TextButtonEdit = styled.Text`
  color: #fff;
  font-size: 24px;
`;
