import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationStackTypes } from "../navigation/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { WorkoutListFetcher } from "../../utils/fetchers/WorkoutListFetcher";
import ExercisesToWorkoutMenu from "../components/menus/ExercisesToWorkoutMenu";


export default function WorkoutSelectionScreen() {

  
  const navigation = useNavigation<NavigationStackTypes>()
  const [workoutList, setWorkoutList] = useState('')


  useEffect(() => {
    const a = WorkoutListFetcher.execute()
    
    setWorkoutList(a[0].name)
    
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ExercisesToWorkoutMenu />
  </View>
  );
}
