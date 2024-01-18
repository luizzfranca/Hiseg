import { Alert, FlatList } from "react-native";
import { CardNotes } from "../../components/CardNotes";
import { InputNotes } from "../../components/InputNotes";
import {
  ButtonAdd,
  Container,
  TextButtonAdd,
  TextEmpty,
  Title,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export function Notes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [notesName, setNotesName] = useState("");
  const [notesEdit, setNotesEdit] = useState(null);

  function handleNoteAdd() {
    if (notes.includes(notesName)) {
      return Alert.alert(
        "Tarefa Igual",
        "Já existe uma Tarefa na lista com esse nome."
      );
    }

    setNotes((prevState) => [...prevState, notesName]);
    setNotesName("");
  }

  function handleNoteRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setNotes((prevState) => prevState.filter((note) => note !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleNoteEdit(name: string) {
    setNotesEdit(name);
    setNotesName(name);
  }

  function handleNoteUpdate() {
    const updatedNotes = notes.map((note) =>
      note === notesEdit ? notesName : note
    );

    setNotes(updatedNotes);
    setNotesName("");
    setNotesEdit(null);
  }

  return (
    <Container>
      <Title>Lista de atividades</Title>
      <InputNotes onChangeText={setNotesName} value={notesName} />
      <ButtonAdd onPress={notesEdit ? handleNoteUpdate : handleNoteAdd}>
        <TextButtonAdd>
          <Ionicons name="add" size={24} color="#FFF" />
        </TextButtonAdd>
      </ButtonAdd>

      <FlatList
        data={notes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardNotes
            key={item}
            name={item}
            onRemove={() => handleNoteRemove(item)}
            onEdit={() => handleNoteEdit(item)} // Passa a função handleNoteEdit para o onEdit
          />
        )}
        ListEmptyComponent={() => (
          <TextEmpty>
            Nenhuma anotação ainda? Adicione uma a sua lista de anotações.
          </TextEmpty>
        )}
      />
    </Container>
  );
}
