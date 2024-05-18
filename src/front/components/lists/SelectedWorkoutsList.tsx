import React from "react"
import { WorkoutListFetcher } from "../../../utils/fetchers/WorkoutListFetcher"
import { FlatList, Text } from "react-native"
import { VStack, Center } from "native-base";
import { useEffect, useState } from 'react';
export default function SelectedWorkoutsList() {

  const componentsToRenderAtTheVStack: React.JSX.Element[] = []

  useEffect(() => {
    const fetchWorkouts = async () => {
      const workoutList = WorkoutListFetcher.execute()
      workoutList.map((workout) => componentsToRenderAtTheVStack.push(<Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3}><Text>{workout.name}</Text></Center>))
    }
    fetchWorkouts()
  }, []); // O array vazio como segundo argumento faz o useEffect ser executado apenas uma vez, quando o componente é montado.


  return (
    <VStack space={4} alignItems="center">
      {componentsToRenderAtTheVStack}
    </VStack>
  )


}



