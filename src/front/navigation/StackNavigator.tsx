import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutsScreen from "../screens/WorkoutsScreen"
import StartingScreen from "../screens/StartingScreen"
import WorkoutLevelTestScreen from "../screens/WorkoutLevelTestScreen"
import WorkoutLevelScreen from "../screens/WorkoutLevelScreen";
import WorkoutSelectionScreen from '../screens/WorkoutSelectionScreen';
import React from "react";
import { PushupsScreen } from "../screens/PushupsScreen";
import { PullupsScreen } from "../screens/PullupsScreen";
import { SitupsScreen } from "../screens/SitupsScreen";
import { SquatsScreen } from "../screens/SquatsScreen";

const Stack = createNativeStackNavigator()

export function StackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StartingScreen">
                <Stack.Screen name="StartingScreen" component={StartingScreen} />
                <Stack.Screen name="WorkoutSelectionScreen" component={WorkoutSelectionScreen} />
                <Stack.Screen name="WorkoutLevelTestScreen" component={WorkoutLevelTestScreen} />
                <Stack.Screen name="WorkoutLevelScreen" component={WorkoutLevelScreen} />
                <Stack.Screen name="WorkoutsScreen" component={WorkoutsScreen} />
                <Stack.Screen name="PushupsScreen" component={PushupsScreen} />
                <Stack.Screen name="PullupsScreen" component={PullupsScreen} />
                <Stack.Screen name="SitupsScreen" component={SitupsScreen} />
                <Stack.Screen name="SquatsScreen" component={SquatsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

type NavigationStacks = {
    StartingScreen: undefined
    WorkoutSelectionScreen: undefined
    WorkoutLevelScreen: undefined
    WorkoutsScreen: undefined
    PushupsScreen: undefined
    PullupsScreen: undefined
    SitupsScreen: undefined
    SquatsScreen: undefined

}

export type NavigationStackTypes = NativeStackNavigationProp<NavigationStacks>