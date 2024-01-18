import { Alert, ScrollView } from "react-native";
import {
  ButtonBack,
  Container,
  ContainerBox,
  ContainerBoxSeriesAndRepetitions,
  ContainerButton,
  ContainerExerciseAndSeries,
  ContainerGroup,
  ContainerImage,
  ContainerName,
  Content,
  ContentRepetitions,
  ContentText,
  ImageExercise,
  TextGroup,
  TextName,
  TextRepetitions,
  TextSeries,
} from "./styles";
import { Button } from "../../components/Button";

import exerciseImage from "../../assets/background.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { ExerciseDTO } from "../../dtos/ExerciseDTO";
import { AppError } from "../../utils/AppError";
import { api } from "../../services/api";

type RouteParamsProps = {
  exerciseId: string;
};

export function Exercise() {
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const [isLoading, setIsLoading] = useState(true);
  const [sendingRegister, setSendingRegister] = useState(false);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const route = useRoute();
  const { exerciseId } = route.params as RouteParamsProps;

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/exercises/${exerciseId}`); //esse data eu desestruturei, poderia ser response, para ficar response.data
      setExercise(data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os detalhes do exercício";

      Alert.alert(title);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleExerciseHistoryRegister() {
    try {
      setSendingRegister(true);

      await api.post("/history", { exercise_id: exerciseId });

      Alert.alert("Registrado no seu Histórico");

      navigation.navigate("history");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível registrar o exercício";

      Alert.alert(title);
    } finally {
      setSendingRegister(false);
    }
  }

  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId]);

  return (
    <Container>
      <Content>
        <ButtonBack></ButtonBack>
        <ContainerName>
          <TextName>{exercise.name}</TextName>
          <ContainerGroup>
            <TextGroup>{exercise.group}</TextGroup>
          </ContainerGroup>
        </ContainerName>
      </Content>
      <ScrollView>
        <ContainerImage>
          <ContainerBox>
            <ImageExercise
              source={{
                uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`,
              }}
              resizeMode="cover"
            />
          </ContainerBox>
          <ContainerBoxSeriesAndRepetitions>
            <ContainerExerciseAndSeries>
              <ContentText>
                <TextSeries>{exercise.series}</TextSeries>
              </ContentText>
              <ContentRepetitions>
                <TextRepetitions>
                  {exercise.repetitions} repetições
                </TextRepetitions>
              </ContentRepetitions>
            </ContainerExerciseAndSeries>
            <ContainerButton>
              <Button title="Marca como realizado" onPress={handleExerciseHistoryRegister} isLoading={sendingRegister} />
            </ContainerButton>
          </ContainerBoxSeriesAndRepetitions>
        </ContainerImage>
      </ScrollView>
    </Container>
  );
}
