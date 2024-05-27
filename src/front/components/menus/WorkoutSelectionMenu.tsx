import React, { useState } from "react"
import { BackHandler, Text } from "react-native"
import { VStack, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../../navigation/StackNavigator";
import { WorkoutMenuOptionsFetcher } from "../../../utils/fetchers/WorkoutMenuOptionsFetcher"
import { useEffect } from "react"
import { UpdateSelectedExercises } from "../../../back/useCases/UpdateSelectedExercises";

export default function WorkoutSelectionMenu() {

  const navigation = useNavigation<NavigationStackTypes>()
  const [pushups, setPushups] = useState(false)
  const [pullups, setPullups] = useState(false)
  const [situps, setSitups] = useState(false)
  const [squats, setSquats] = useState(false)
  const [selectedExercises, setSelectedExercises] = useState<string[]>([])


  const addExerciseToSelectedExercisesList = (exercise: string) => {
    const temporaryArray = selectedExercises
    temporaryArray.push(exercise)
    setSelectedExercises(temporaryArray)
  }
  
  const removeExerciseFromSelectedExercisesList = (exercise: string) => {
    const temporaryArray = selectedExercises
    temporaryArray.splice(temporaryArray.indexOf(exercise), 1)
    setSelectedExercises(temporaryArray)
  }

  const handleChoice = (choice: string) => {
    switch (choice) {
      case 'Flexões':
        setPushups(!pushups)
        if (pushups) addExerciseToSelectedExercisesList('Flexões')
        else removeExerciseFromSelectedExercisesList('Flexões') 
        break;
      case 'Flexões na barra fixa':
        setPullups(!pullups)
        if (pullups) addExerciseToSelectedExercisesList('Flexões na barra fixa')
        else removeExerciseFromSelectedExercisesList('Flexões na barra fixa')
        break
      case 'Abdominais':
        setSitups(!situps)
        if (situps) addExerciseToSelectedExercisesList('Abdominais')
        else removeExerciseFromSelectedExercisesList('Abdominais')
        break
      case 'Agachamentos':
        setSquats(!squats)
        if (squats) addExerciseToSelectedExercisesList('Agachamentos')
        else removeExerciseFromSelectedExercisesList('Agachamentos')
        break
      case 'Confirmar':
        (selectedExercises)
        UpdateSelectedExercises.execute(selectedExercises)
        navigation.navigate('Menu Principal')
        break
      default:
        throw new Error('Invalid workout choice')
    }
  }

  useEffect(() => {
    setPushups(!pushups)
    setPullups(!pullups)
    setSitups(!situps)
    setSquats(!squats)

  }, [selectedExercises])



  return (
    <VStack space={4} alignItems="center">
      <Text>Exercícios selecionados: {selectedExercises.map((exercise) => exercise + ', ')} </Text>
      {WorkoutMenuOptionsFetcher.execute().map((option) => {
          return(
            <Center key={option.id} w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text onPress={() => handleChoice(option.name)}>{option.name}</Text></Center>

          )
      })}
    </VStack>
  )


}