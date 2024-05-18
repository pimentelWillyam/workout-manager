import React from "react";
import { Text, View } from "react-native";

import { useEffect } from "react";
import { IsUserRegistered } from "../../utils/IsUserRegistered";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../navigation/StackNavigator";
import SelectedWorkoutsList from '../components/lists/SelectedWorkoutsList';
import { MainMenu } from '../components/menus/MainMenu';

export default function StartingScreen() {

  const navigation = useNavigation<NavigationStackTypes>()


  useEffect(() => {
    console.log('caiu no use effect')
    if (IsUserRegistered.execute()) navigation.navigate('Workouts')
    else navigation.navigate("WorkoutSelectionScreen")
  
    
  }, [])


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MainMenu />
    </View>
  );
}
