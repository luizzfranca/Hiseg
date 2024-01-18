import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

import { Ionicons } from "@expo/vector-icons";


import { Home } from "../screens/Home";
import { Exercise } from "../screens/Exercise";
import { Notes } from "../screens/Notes";
import { History } from "../screens/History";

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

type AppRoutes = {
  home: undefined;
  exercise: { exerciseId: string };
  profile: undefined;
  history: undefined;
  notes: undefined;
};

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00B37E",
        tabBarInactiveTintColor: "#202024",
        tabBarStyle: {
          backgroundColor: "#202024",
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 98 : 96,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={24} color="#FFF" />
          ),
        }}
      />

      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="barbell" size={24} color="#FFF" />
          ),
        }}
      />

      <Screen
        name="exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="notes"
        component={Notes}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="pencil" size={24} color="#FFF" />
          ),
        }}
      />
    </Navigator>
  );
}
