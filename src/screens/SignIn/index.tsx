import React, { useState } from "react";

import {
  Container,
  Image,
  ContainerTitle,
  Content,
  Title,
  TextAccess,
} from "./styles";
import { Controller, useForm } from "react-hook-form";

import BackgroundImg from "../../assets/background.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";
import { useAuth } from "../../hooks/useAuth";
import { AppError } from "../../utils/AppError";
import { Alert } from "react-native";

type FormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { signIn } = useAuth();

  const [isLoading, setIsLoading] = useState(false);


  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : "Não foi possível entrar. Tente novamente mais tarde.";

      setIsLoading(false);
      Alert.alert(title);
    }
  }

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  return (
    <Container>
      <Image
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      <ContainerTitle>
        <Title>Treine sua mente e o seu corpo</Title>
      </ContainerTitle>
      <Content>
        <Controller
          control={control}
          name="email"
          rules={{ required: "Informe o e-mail" }}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: "Informe a senha" }}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Button 
          title="Acessar" 
          onPress={handleSubmit(handleSignIn)} 
        />

        <TextAccess>Ainda não possui acesso?</TextAccess>
        <Button title="Criar conta" onPress={handleNewAccount} />
      </Content>
    </Container>
  );
}
