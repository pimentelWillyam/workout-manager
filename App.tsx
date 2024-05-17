import React from "react";
import { StackNavigator } from "./src/front/navigation/StackNavigator";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <StackNavigator />
    </NativeBaseProvider>
  );
}
