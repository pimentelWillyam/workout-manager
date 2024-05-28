import React, { useEffect, useState } from "react"
import { Center, Flex, Text, VStack } from "native-base";
import { GetUserWorkoutLoad } from "../../../back/useCases/GetUserWorkoutLoad";
import { WorkoutLoad } from '../../../utils/types/WorkoutLoad';
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../../navigation/StackNavigator";
import { UpgradeUserMaximumRepetitions } from "../../../back/useCases/UpgradeUserMaximumRepetitions";

export const PullupsBox = () => {

  const navigation = useNavigation<NavigationStackTypes>()



  const [workoutLoad, setWorkoutLoad] = useState<WorkoutLoad>({
    level: 3,
    firstRepetition: 0,
    secondRepetition: 0,
    thirdRepetition: 0,
    fourthRepetition: 0,
    fifthRepetition: 0,
  })

  useEffect(() => {
    GetUserWorkoutLoad.execute('pullups').then(repetitionsAndSets => setWorkoutLoad(repetitionsAndSets))
  }, [])

  return(
    <Flex>
      <Center>
        <VStack >
          <Center key='titulo' w="64" h="100" bg="gray.300" rounded="md" shadow={3}><Text>Flexões na barra fixa</Text></Center>
          <Center key="1" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Primeira repetição: {workoutLoad.firstRepetition} </Text></Center>
          <Center key="2" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Segunda repetição: {workoutLoad.secondRepetition} </Text></Center>
          <Center key="3" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Terceira repetição: {workoutLoad.thirdRepetition} </Text></Center>
          <Center key="4" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Quarta repetição: {workoutLoad.fourthRepetition} </Text></Center>
          <Center key="5" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Quinta repetição: {workoutLoad.fifthRepetition} </Text></Center>
          <Center key="botao-sucesso" w="64" h="20" bg="green.300" rounded="md" shadow={3}><Text onPress={() => {UpgradeUserMaximumRepetitions.execute('pullups') ; navigation.navigate('Menu Principal')}}>Sucesso</Text></Center>
          <Center key="botao-falha" w="64" h="20" bg="red.300" rounded="md" shadow={3}><Text onPress={() => navigation.navigate('Menu Principal')}>Falha</Text></Center>
        </VStack>
      </Center>
      
    </Flex>
  )
}