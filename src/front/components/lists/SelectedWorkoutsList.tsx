import React from "react"
import { WorkoutList } from "../../../utils/WorkoutList"
import { FlatList, Text } from "react-native"
import { VStack, Center } from "native-base";
export default function SelectedWorkoutsList() {
  return (
      <FlatList 
      data={WorkoutList.get()}
      renderItem={((workout) => <Center padding={"10"} w="64" h="20" bg="indigo.700" rounded="md" shadow={3}><Text>{workout.item.name}</Text></Center>)}
      >
      </FlatList>
      // <VStack space={4} alignItems="center">
      //   <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3}/>
      // </VStack>
  )


}



