import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import {Navigator} from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <Navigator />
  );
}
