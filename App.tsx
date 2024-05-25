import { StackNavigator } from "./src/front/navigation/StackNavigator"
import { NativeBaseProvider } from "native-base"
import { Database } from "./src/back/storage/local/Database"
import { ApplicationBootstrap } from "./src/utils/ApplicationBootstrap"
import { useEffect } from "react"
import React from 'react'


export default function App() {

  useEffect(() => {
    void ApplicationBootstrap.execute()
  }, [])

  return (
    <NativeBaseProvider>
      <StackNavigator />
    </NativeBaseProvider>
  );
}
