import { Center, Heading, VStack, ScrollView, Text } from "native-base";
import React, { useState, useEffect } from "react";
import { MainMenuOptionsFetcher } from "../../../utils/fetchers/MainMenuOptionsFetcher";
import { Navigate } from "../../../handlers/Navigate";
import { NavigationStackTypes } from "../../navigation/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";

export const MainMenu = () => {
  const [mainMenuOptions, setMainMenuOptions] = useState<string[]>([]);
  const navigation = useNavigation<NavigationStackTypes>()

  const handleNavigation = (where: string) => {
      switch (where) {
        case 'Exercícios':
          navigation.navigate('WorkoutsScreen')
          break;
        case 'Mudar Exercícios Selecionados':
          navigation.navigate('WorkoutSelectionScreen')
          break
        case 'Sair':
          BackHandler.exitApp()
          break
        default:
          throw new Error('Invalid navigation destiny')
      }
      
    }

  useEffect(() => {
    const fetchOptions = async () => {
        setMainMenuOptions(MainMenuOptionsFetcher.execute())
    }

    fetchOptions();
  }, []);

  return (
    <VStack space={4} alignItems="center">
    {MainMenuOptionsFetcher.execute().map((option) => {
      return (
        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3}><Text onPress={() => handleNavigation(option)}>{option}</Text></Center>
      )
    })}
  </VStack>
  );
};
