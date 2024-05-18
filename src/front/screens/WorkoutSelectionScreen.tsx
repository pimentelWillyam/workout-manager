import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationStackTypes } from "../navigation/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { IsUserRegistered } from "../../utils/IsUserRegistered";
import { WorkoutListFetcher } from "../../utils/fetchers/WorkoutListFetcher";
import { Database } from "../../back/storage/local/Database";
import SelectedWorkoutsList from '../components/lists/SelectedWorkoutsList';


export default function WorkoutSelectionScreen() {

  
  const navigation = useNavigation<NavigationStackTypes>()
  const [workoutList, setWorkoutList] = useState('')


  useEffect(() => {
    const a = WorkoutListFetcher.execute()
    
    setWorkoutList(a[0].name)
    
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SelectedWorkoutsList />
  </View>
  );
}
