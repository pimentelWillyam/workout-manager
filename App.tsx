import { StackNavigator } from "./src/front/navigation/StackNavigator"
import { NativeBaseProvider } from "native-base"
import { useEffect } from "react"
import React from 'react'


export default function App() {

  useEffect(() => {
  }, [])

  return (
    <NativeBaseProvider>
      <StackNavigator />
    </NativeBaseProvider>
  );
}
