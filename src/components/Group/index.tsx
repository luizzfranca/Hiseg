import { TouchableOpacityProps } from "react-native";
import { Container, TitleButton } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
  isActive: boolean;
};

export function Group({name, isActive, ...rest}: Props) {
  return (
    <Container {...rest}
    style={{
      backgroundColor: isActive ? "#00875F" : "#29292E",
      // Outros estilos conforme necessário
    }}
    >
      <TitleButton>{name}</TitleButton>
    </Container>
  );
}
