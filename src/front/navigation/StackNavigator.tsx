import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutsScreen from "../screens/WorkoutsScreen"
import StartingScreen from "../screens/StartingScreen"
import WorkoutLevelScreen from "../screens/WorkoutLevelScreen";
import WorkoutSelectionScreen from '../screens/WorkoutSelectionScreen';
import React from "react";
import { PushupsLevelScreen } from "../screens/PushupsLevelScreen";
import { PullupsLevelScreen } from "../screens/PullupsLevelScreen";
import { PushupsWorkoutScreen } from "../screens/PushupsWorkoutScreen";
import { PullupsWorkoutScreen } from "../screens/PullupsWorkoutScreen";
import { SitupsLevelScreen } from "../screens/SitupsLevelScreen";
import { SitupsWorkoutScreen } from "../screens/SitupsWorkoutScreen";
import { SquatsLevelScreen } from "../screens/SquatsLevelScreen";
import { SquatsWorkoutScreen } from "../screens/SquatsWorkoutScreen";

const Stack = createNativeStackNavigator()

export function StackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu Principal">
                <Stack.Screen name="Menu Principal" component={StartingScreen} />
                <Stack.Screen name="Exercícios" component={WorkoutsScreen} />
                <Stack.Screen name="Seleção de Exercício" component={WorkoutSelectionScreen} />
                <Stack.Screen name="Teste de nível de flexão" component={PushupsLevelScreen} />
                <Stack.Screen name="Flexão" component={PushupsWorkoutScreen} />
                <Stack.Screen name="Teste de nível de barra" component={PullupsLevelScreen} />
                <Stack.Screen name="Barra" component={PullupsWorkoutScreen} />
                <Stack.Screen name="Teste de nível de abdominais" component={SitupsLevelScreen} />
                <Stack.Screen name="Abdominais" component={SitupsWorkoutScreen} />
                <Stack.Screen name="Teste de nível de agachamentos" component={SquatsLevelScreen} />
                <Stack.Screen name="Agachamentos" component={SquatsWorkoutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

type NavigationStacks = {
    "Menu Principal": undefined
    "Seleção de Exercício": undefined
    "Teste de nível de flexão": undefined
    "Flexão": undefined
    "Teste de nível de barra": undefined
    "Barra": undefined
    "Teste de nível de abdominais": undefined
    "Abdominais": undefined
    "Teste de nível de agachamentos": undefined
    "Agachamentos": undefined
    "Exercícios": undefined
}

export type NavigationStackTypes = NativeStackNavigationProp<NavigationStacks>