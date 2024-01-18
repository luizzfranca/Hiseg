import { Alert, FlatList } from "react-native";
import { HomeHeader } from "../../components/HomeHeader";
import {
  Container,
  ContainerFlatlist,
  Title,
  ContainerExercise,
  TitleExercises,
} from "./styles";
import { Group } from "../../components/Group";
import { useCallback, useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { ExerciseCard } from "../../components/ExerciseCard";
import { ExerciseDTO } from "../../dtos/ExerciseDTO";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";
import { api } from "../../services/api";
import { AppError } from "../../utils/AppError";

export function Home() {
  const [groups, setGroups] = useState<string[]>([]);
  const [groupSelected, setGroupSelected] = useState("antebraço");
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  async function fetchGroups() {
    try {
      const { data } = await api.get("/groups");
      setGroups(data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os grupos musculares";

      Alert.alert(title);
    }
  }

  function handleOpenExerciseDetails(exerciseId: string) {
    navigation.navigate("exercise", { exerciseId });
  }

  async function fetchExercisesByGroup() {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/exercises/bygroup/${groupSelected}`); //esse data eu desestruturei, poderia ser response, para ficar response.data
      setExercises(data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os grupos musculares";

      Alert.alert(title);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [groupSelected])
  );

  return (
    <Container>
      <HomeHeader />

      <ContainerFlatlist>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={
                groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
              }
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: "190%",
            padding: 10,
          }}
        />
      </ContainerFlatlist>
      <ContainerExercise>
        <TitleExercises>Exercícios</TitleExercises>
        <Title>
          {exercises.length}
        </Title>
      </ContainerExercise>
      <FlatList
            data={exercises}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ExerciseCard data={item} onPress={() => handleOpenExerciseDetails(item.id)} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20,
            }}
          />
    </Container>
  );
}
