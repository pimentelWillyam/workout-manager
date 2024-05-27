import React, { useEffect, useState } from "react"
import { WorkoutListFetcher } from '../../../utils/fetchers/WorkoutListFetcher';
import { BackHandler, Text } from "react-native"
import { VStack, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../../navigation/StackNavigator";
import { GetUserSelectedExercises } from "../../../back/useCases/GetUserSelectedExercises";
import { GetUserMaximumRepetitions } from "../../../back/useCases/GetUserMaximumRepetitions";

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
          GetUserMaximumRepetitions.execute('pushups').then(maximumRepetitions => {if (maximumRepetitions > 0) navigation.navigate('Flexão')})
          GetUserMaximumRepetitions.execute('pushups').then(maximumRepetitions => {if (maximumRepetitions <= 0) navigation.navigate('Teste de nível de flexão')})
          break;
        case 'Flexões na barra fixa':
          GetUserMaximumRepetitions.execute('pullups').then(maximumRepetitions => {if (maximumRepetitions > 0) navigation.navigate('Barra')})
          GetUserMaximumRepetitions.execute('pullups').then(maximumRepetitions => {if (maximumRepetitions <= 0) navigation.navigate('Teste de nível de barra')})
          break;
        case 'Abdominais':
          GetUserMaximumRepetitions.execute('situps').then(maximumRepetitions => {if (maximumRepetitions > 0) navigation.navigate('Abdominais')})
          GetUserMaximumRepetitions.execute('situps').then(maximumRepetitions => {if (maximumRepetitions <= 0) navigation.navigate('Teste de nível de abdominais')})
          break;
        case 'Agachamentos':
          GetUserMaximumRepetitions.execute('squats').then(maximumRepetitions => {if (maximumRepetitions > 0) navigation.navigate('Agachamentos')})
          GetUserMaximumRepetitions.execute('squats').then(maximumRepetitions => {if (maximumRepetitions <= 0) navigation.navigate('Teste de nível de agachamentos')})
          break;
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



