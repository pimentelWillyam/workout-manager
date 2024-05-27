import { UserController } from "../controllers/UserController"

export class GetUserMaximumRepetitions {
    private static userController = new UserController()
    static execute = async (exercise: string) => {
        const user = await this.userController.fetchUser()
        if (user === null) throw new Error('Error when fetching user')
        console.log(user)
        switch (exercise) {
            case 'pushups':
                return user.current_pushup_level
            case 'pullups':
                return user.current_pullup_level
            case 'situps':
                return user.current_situp_level
            case 'squats':
                return user.current_squat_level
            default:
                throw new Error('Invalid exercise')
        }
    }
}