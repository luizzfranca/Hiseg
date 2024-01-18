import { Container, Props } from "./style";

export function InputNotes({ onChangeText, value }: Props) {
  return (
    <Container
      value={value}
      onChangeText={onChangeText}
      placeholder="Digite sua anotação"
      placeholderTextColor="#6B6B6B"
    />
  );
}
