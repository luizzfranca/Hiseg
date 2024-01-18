import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Container } from "./styles";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/useAuth";
import { Loading } from "../components/Loading";




export function Routes() {
  const { user, /*isLoadingUserStorageData*/ } = useAuth();

  //if(isLoadingUserStorageData){
    //return <Loading />
  //}

  return (
    <Container>
     <NavigationContainer>
        {user.id ? <AppRoutes /> : <AuthRoutes/>}
      </NavigationContainer>
    </Container>
  );
}
