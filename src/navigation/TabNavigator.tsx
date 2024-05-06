import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutsScreen from "../screens/WorkoutsScreen"
import StartingScreen from "../screens/StartingScreen"
import WorkoutLevelTestScreen from "../screens/WorkoutLevelTestScreen"
import WorkoutLevelScreen from "../screens/WorkoutLevelScreen";

const Stack = createNativeStackNavigator()

export function StackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tela Inicial">
                <Stack.Screen name="Tela Inicial" component={StartingScreen} />
                <Stack.Screen name="Exercícios" component={WorkoutsScreen} />
                <Stack.Screen name="Teste de nível" component={WorkoutLevelTestScreen} />
                <Stack.Screen name="Nível do Exercício" component={WorkoutLevelScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

type NavigationStacks = {
    StartingScreen: undefined
    Workouts: undefined
    WorkoutLevelTestScreen: undefined
}

export type NavigationStackTypes = NativeStackNavigationProp<NavigationStacks>