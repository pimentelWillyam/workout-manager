import React from "react";
import { View, Text } from "react-native";
import ExercisesToWorkoutMenu from "../components/menus/ExercisesToWorkoutMenu";


export default function WorkoutsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ExercisesToWorkoutMenu />
  </View>
  );
}
