import {
  ButtonEdit,
  ButtonRemove,
  Container,
  NotesName,
  TextButtonEdit,
  TextButtonRemove,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  name: string;
  onRemove: () => void;
  onEdit: any;
};

export function CardNotes({ name, onRemove, onEdit }: Props) {
  return (
    <Container>
      <NotesName>{name}</NotesName>

      <ButtonEdit onPress={onEdit}>
        <TextButtonEdit>
          <Ionicons name="pencil" size={24} color="#FFF" />
        </TextButtonEdit>
      </ButtonEdit>
      <ButtonRemove onPress={onRemove}>
        <TextButtonRemove>
          <Ionicons name="trash" size={24} color="#FFF" />
        </TextButtonRemove>
      </ButtonRemove>
    </Container>
  );
}
