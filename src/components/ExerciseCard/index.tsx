import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  ContainerTitle,
  Content,
  ExerciseImage,
  Name,
  Series,
} from "./styles";
import { ExerciseDTO } from "../../dtos/ExerciseDTO";
import exerciseImage from "../../assets/background.png";
import { api } from "../../services/api";

type Props = TouchableOpacityProps & {
  data?: ExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
        <ExerciseImage
           source={{
            uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}`,
          }}
          resizeMode="cover"
          alt="imagemexercicio"
        />
        <ContainerTitle>
          <Name>
          {data.name}
          </Name>
          <Series>
          {data.series} x {data.repetitions} repetições
          </Series>
        </ContainerTitle>
      </Content>
    </Container>
  );
}
