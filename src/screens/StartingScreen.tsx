import React from "react";
import { Text, View } from "react-native";

import { useEffect } from "react";
import { IsUserRegistered } from "../utils/IsUserRegistered";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../navigation/StackNavigator";

export default function StartingScreen() {

  const navigation = useNavigation<NavigationStackTypes>()


  useEffect(() => {
    if (IsUserRegistered.execute()) navigation.navigate('Workouts')
    else navigation.navigate('WorkoutLevelTestScreen')
    
  }, [])


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Inicial</Text>
    </View>
  );
}
