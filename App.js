import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetUsernameScreen from "./screens/SetUsernameScreen";
import RoomsScreen from "./screens/RoomsScreen";
import CreateRoomScreen from "./screens/CreateRoomScreen";
import ChatScreen from "./screens/ChatScreen";
import { GlobalStyles } from "./constants/styles";
import UserContextProvider from "./store/user-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: GlobalStyles.colors.peachBackground,
              },
            }}
          >
            <Stack.Screen
              name="SetUsernameScreen"
              component={SetUsernameScreen}
            />
            <Stack.Screen name="RoomsScreen" component={RoomsScreen} />
            <Stack.Screen
              name="CreateRoomScreen"
              component={CreateRoomScreen}
            />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
