import { UserController } from "../controllers/UserController";

export class UpdateUserMaximumRepetitions {
    private static userController = new UserController()
    static execute = async (exercise: string, maximumRepetitions: number) => {
        const user = await this.userController.fetchUser()
        if (user === null) throw new Error('Error when fetching user data')
        switch (exercise) {
            case 'pushups':
                user.current_pushup_level = maximumRepetitions
                break;
            case 'pullups':
                user.current_pullup_level = maximumRepetitions
                break;
            case 'situps':
                user.current_situp_level = maximumRepetitions
                break;
            case 'squats':
                user.current_squat_level = maximumRepetitions
                break;
            default:
                throw new Error('Invalid exercise')
        }
        await this.userController.updateUser(user)
    }
}