import React, { useEffect, useState } from "react"
import { Center, Flex, Text, VStack } from "native-base";
import { GetUserWorkoutLoad } from "../../../back/useCases/GetUserWorkoutLoad";
import { WorkoutLoad } from '../../../utils/types/WorkoutLoad';

export const PulllupsBox = () => {


  const [workoutLoad, setWorkoutLoad] = useState<WorkoutLoad>({
    level: 3,
    firstRepetition: 0,
    secondRepetition: 0,
    thirdRepetition: 0,
    fourthRepetition: 0,
    fifthRepetition: 0,
  })

  useEffect(() => {
    GetUserWorkoutLoad.execute('situps').then(repetitionsAndSets => setWorkoutLoad(repetitionsAndSets))
  }, [])

  return(
    <Flex>
      <VStack >
        <Center key='titulo' w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Abdominais</Text></Center>
        <br />
        <Center key="1" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Primeira repetição: {workoutLoad.firstRepetition} </Text></Center>
        <Center key="2" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Primeira repetição: {workoutLoad.secondRepetition} </Text></Center>
        <Center key="3" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Primeira repetição: {workoutLoad.thirdRepetition} </Text></Center>
        <Center key="4" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Primeira repetição: {workoutLoad.fourthRepetition} </Text></Center>
        <Center key="5" w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text>Primeira repetição: {workoutLoad.fifthRepetition} </Text></Center>
      </VStack>
    </Flex>
  )
}