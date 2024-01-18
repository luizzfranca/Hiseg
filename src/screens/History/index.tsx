import React, { useCallback, useState } from "react";

import { HistoryByDayDTO } from "../../dtos/HistoryByDayDTO";
import { api } from "../../services/api";
import { AppError } from "../../utils/AppError";
import { Alert, SectionList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { Loading } from "../../components/Loading";
import { Container, TextEmpty, TextTitle } from "./styles";
import { HistoryCard } from "../../components/HistoryCard";

export function History() {
  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  async function fetchHistory() {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/history`);
      setExercises(data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar o histórico.";

      Alert.alert(title);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HistoryCard data={item} />}
         
          contentContainerStyle={
            exercises.length === 0 && { flex: 1, justifyContent: "center", marginLeft: 70 }
          }
          ListEmptyComponent={() => (
            <TextEmpty>
              Não há exercícios registrados ainda. {"\n"}
              Vamos fazer exercícios hoje?
            </TextEmpty>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
