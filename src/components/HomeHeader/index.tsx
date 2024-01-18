import React from "react";

import {
  Container,
  UserPhoto,
  ContainerName,
  TextHello,
  TextName,
  Content,
  ContainerButton,
} from "./styles";
import { ButtonIcon } from "../ButtonIcon";
import { useAuth } from "../../hooks/useAuth";

import userImage from "../../assets/user.png";

export function HomeHeader() {

  const { user, signOut } = useAuth();
  return (
    <Container>
      <Content>
        <UserPhoto
          source={userImage}
          resizeMode="contain"
        />

        <ContainerName>
          <TextHello>Olá,</TextHello>
          <TextName>{user.name}</TextName>
        </ContainerName>
        <ContainerButton>
          <ButtonIcon icon="data-usage" onPress={signOut} />
        </ContainerButton>
      </Content>
    </Container>
  );
}
