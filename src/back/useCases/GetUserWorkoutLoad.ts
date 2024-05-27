import { WorkoutLoad } from "../../utils/types/WorkoutLoad";
import { UserController } from "../controllers/UserController";
import { WorkoutLoadFetcher } from '../../utils/fetchers/WorkoutLoadFetcher';

export class GetUserWorkoutLoad {
  private static userController = new UserController()
  static async execute(exercise: string): Promise<WorkoutLoad>{
    const user = await this.userController.fetchUser()
    if (user === null) throw new Error('Error when retrieving user data')
    switch (exercise) {
      case 'pushups':
        return WorkoutLoadFetcher.execute(user.current_pushup_level)
      case 'pullups':
        return WorkoutLoadFetcher.execute(user.current_pullup_level)
      case 'situps':
        return WorkoutLoadFetcher.execute(user.current_situp_level)
      case 'squats':
        return WorkoutLoadFetcher.execute(user.current_squat_level)
      default:
        throw new Error('Invalid exercise: '+ exercise)
    }
  }
}