import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutsScreen from "./screens/WorkoutsScreen";
import ExerciseLevelInfoScreen from "./screens/ExerciseLevelInfoScreen";
import ExerciseTestScreen from "./screens/ExerciseTestScreen";
import StartingScreen from "./screens/StartingScreen";

const Stack = createNativeStackNavigator()

export default function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tela Inicial">
                <Stack.Screen name="Tela Inicial" component={StartingScreen} />
                <Stack.Screen name="Exercícios" component={WorkoutsScreen} />
                <Stack.Screen name="Teste de nível" component={ExerciseTestScreen} />
                <Stack.Screen name="" component={ExerciseLevelInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}