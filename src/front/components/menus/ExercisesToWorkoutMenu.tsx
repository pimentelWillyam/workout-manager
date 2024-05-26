import React, { useEffect, useState } from "react"
import { WorkoutListFetcher } from '../../../utils/fetchers/WorkoutListFetcher';
import { BackHandler, Text } from "react-native"
import { VStack, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../../navigation/StackNavigator";
import { GetUserSelectedExercises } from "../../../back/useCases/GetUserSelectedExercises";

export default function ExercisesToWorkoutMenu() {

  const navigation = useNavigation<NavigationStackTypes>()
  const [userSelectedExercises, setUserSelectedExercises ] = useState<string[]>([])

  useEffect(() => {
    GetUserSelectedExercises.execute().then(selectedExercises  => {
      setUserSelectedExercises(selectedExercises)
      console.log(selectedExercises)
    })
  }, [])

  const handleNavigation = (where: string) => {
      switch (where) {
        case 'Flexões':
          navigation.navigate('PushupsScreen')
          break;
        case 'Flexões na barra fixa':
          navigation.navigate('PullupsScreen')
          break
        case 'Abdominais':
          navigation.navigate('SitupsScreen')
          break
        case 'Agachamentos':
          navigation.navigate('SquatsScreen')
          break
        default:
          throw new Error('Invalid navigation destiny')
      }
      
    }

  return (
    <VStack space={4} alignItems="center">
      {userSelectedExercises.map((workout) => {
        return (
          <Center key={workout} w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text onPress={() => handleNavigation(workout)}>{workout}</Text></Center>
        )
      })}
    </VStack>
  )


}



