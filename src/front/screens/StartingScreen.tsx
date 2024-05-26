import React from "react";
import { Text, View } from "react-native";

import { useEffect } from "react"
import { IsUserRegistered } from "../../utils/IsUserRegistered";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../navigation/StackNavigator";
import { MainMenu } from '../components/menus/MainMenu';
import { CreateUser } from "../../back/useCases/CreateUser";

export default function StartingScreen() {

  const navigation = useNavigation<NavigationStackTypes>()


  useEffect(() => {
    if (!IsUserRegistered.execute()) CreateUser.execute().then(() => navigation.navigate("WorkoutSelectionScreen"))
  }, [])


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MainMenu />
    </View>
  );
}
