import React from "react"
import { WorkoutListFetcher } from '../../../utils/fetchers/WorkoutListFetcher';
import { BackHandler, Text } from "react-native"
import { VStack, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../../navigation/StackNavigator";

export default function ExercisesToWorkoutMenu() {

  const navigation = useNavigation<NavigationStackTypes>()

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
      {WorkoutListFetcher.execute().map((workout) => {
        return (
          <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3}><Text onPress={() => handleNavigation(workout.name)}>{workout.name}</Text></Center>
        )
      })}
    </VStack>
  )


}



