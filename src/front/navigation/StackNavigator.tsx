import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutsScreen from "../screens/WorkoutsScreen"
import StartingScreen from "../screens/StartingScreen"
import WorkoutLevelTestScreen from "../screens/WorkoutLevelTestScreen"
import WorkoutLevelScreen from "../screens/WorkoutLevelScreen";
import WorkoutSelectionScreen from '../screens/WorkoutSelectionScreen';
import React from "react";

const Stack = createNativeStackNavigator()

export function StackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StartingScreen">
                <Stack.Screen name="StartingScreen" component={StartingScreen} />
                <Stack.Screen name="WorkoutSelectionScreen" component={WorkoutSelectionScreen} />
                <Stack.Screen name="WorkoutLevelTestScreen" component={WorkoutLevelTestScreen} />
                <Stack.Screen name="WorkoutLevelScreen" component={WorkoutLevelScreen} />
                <Stack.Screen name="Workouts" component={WorkoutsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

type NavigationStacks = {
    StartingScreen: undefined
    WorkoutSelectionScreen: undefined
    WorkoutLevelScreen: undefined
    Workouts: undefined
}

export type NavigationStackTypes = NativeStackNavigationProp<NavigationStacks>