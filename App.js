import * as React from "react";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Start from "./screens/Start";
import End from "./screens/End";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="End"
          component={End}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
