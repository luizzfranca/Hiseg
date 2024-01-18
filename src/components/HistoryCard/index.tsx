import React from "react";
import { HistoryDTO } from "../../dtos/HistoryDTO";
import { Container, Content, TextGroup, TextHour, TextName } from "./styles";

type Props = {
  data: HistoryDTO;
};

export function HistoryCard({ data }: Props) {
  return (
    <Container>
      <Content>
        <TextGroup>{data.group}</TextGroup>
        <TextName numberOfLines={1}>{data.name}</TextName>
      </Content>
    </Container>
  );
}
