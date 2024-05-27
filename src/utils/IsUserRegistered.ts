import { Database } from "../back/storage/local/Database"
import { UserController } from '../back/controllers/UserController';


export class IsUserRegistered {

    private static userController = new UserController()

    static async execute(){
        if (await this.userController.fetchUser() === null) return false
        return true
    }
}
