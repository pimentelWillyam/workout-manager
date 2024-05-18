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
    <ScrollView w={["200", "300"]} h="80">
      <Center mt="3" mb="4">
        <Heading fontSize="xl">Menu Principal</Heading>
      </Center>
      <VStack flex="1">
        {mainMenuOptions.map((option) => (
          <Center key={option} py="4" >
            <Text onPress={() => handleNavigation(option)}>{option}</Text>
          </Center>
        ))}
      </VStack>
    </ScrollView>
  );
};
