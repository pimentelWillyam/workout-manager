import { Center, Heading, VStack, ScrollView, Text } from "native-base";
import React, { useState, useEffect } from "react";
import { MainMenuOptionsFetcher } from "../../../utils/fetchers/MainMenuOptionsFetcher";
import { Navigate } from "../../../handlers/Navigate";
import { NavigationStackTypes } from "../../navigation/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import { UserDataSource } from "../../../back/datasources/UserDataSource";
import { ResultSet, ResultSetError } from "expo-sqlite";

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
        await UserDataSource.insertUserRegistry({name: 'willyam', current_pullup_level: 0, current_pushup_level: 0, current_situp_level: 0, current_squat_level: 0, tracking_pullups: false, tracking_pushups: false, tracking_situps: false, tracking_squats: false})
    }

    fetchOptions();
  }, []);

  return (
    <VStack space={4} alignItems="center">
    {MainMenuOptionsFetcher.execute().map((option) => {
      return (
        <Center key={option} w="64" h="20" bg="gray.300" rounded="md" shadow={3}><Text onPress={() => handleNavigation(option)}>{option}</Text></Center>
      )
    })}
  </VStack>
  );
};
