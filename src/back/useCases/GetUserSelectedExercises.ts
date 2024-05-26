import { UserController } from "../controllers/UserController"

export class GetUserSelectedExercises {
  private static userController = new UserController()

  static async execute(): Promise<string[]> {
    const user = await this.userController.fetchUser()
    console.log(user)
    if (user === null) throw new Error('Error when retrieving user data')
    let userSelectedExercises = []
    if (user.tracking_pushups) userSelectedExercises.push('Flexões')
    if (user.tracking_pullups) userSelectedExercises.push('Flexões na barra fixa')
    if (user.tracking_situps) userSelectedExercises.push('Abdominais')
    if (user.tracking_squats) userSelectedExercises.push('Agachamentos')
    console.log(userSelectedExercises)
    return userSelectedExercises
  }
}