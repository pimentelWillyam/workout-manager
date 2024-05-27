import { UserController } from "../controllers/UserController"

export class UpgradeUserMaximumRepetitions {
    private static userController = new UserController()
    static execute = async (exercise: string) => {
        const user = await this.userController.fetchUser()
        if (user === null) throw new Error('Error when fetching user')
            switch (exercise) {
                case 'pushups':
                    user.current_pushup_level +=1
                    await this.userController.updateUser(user)
                    break
                case 'pullups':
                    user.current_pullup_level +=1
                    await this.userController.updateUser(user)
                    break
                case 'situps':
                    user.current_situp_level +=1
                    await this.userController.updateUser(user)
                    break
                case 'squats':
                    user.current_squat_level +=1
                    break
                default:
                    throw new Error('Invalid exercise')
            }
            await this.userController.updateUser(user)
    }
}