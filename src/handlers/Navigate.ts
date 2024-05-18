import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../front/navigation/StackNavigator";


export class Navigate{
  private static navigation = useNavigation<NavigationStackTypes>()

  static execute(navigationHook, where: string) {
    switch (where) {
      case 'Exercícios':
        this.navigation.navigate('Workouts')
        break;
      case 'Mudar ExercíciosSelecionados':
        this.navigation.navigate('WorkoutSelectionScreen')
      case 'Sair':
        return
      default:
        throw new Error('Invalid navigation destiny')
    }
    
  }
}