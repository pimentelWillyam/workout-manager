import { UserController } from "../controllers/UserController"

export class UpdateSelectedExercises {
  private static userController = new UserController()
  static async execute(selectedExercises: string[]) {
    const user = await this.userController.fetchUser()
    if (user === null) throw new Error('Error when retrieving user data')
    user.tracking_pushups = false
    user.tracking_pullups = false
    user.tracking_situps = false
    user.tracking_squats = false
    selectedExercises.map(exercise => {
      switch (exercise) {
        case 'Flexões':
          user.tracking_pushups = true
          break
        case 'Flexões na barra fixa':
          user.tracking_pullups = true
          break
        case 'Abdominais':
        user.tracking_situps = true
        break
        case 'Agachamentos':
        user.tracking_squats = true
        break
        default:
          throw new Error('Invalid exercise: ' + exercise)
      }
    })
  await this.userController.updateUser(user)
    return true
  }
}