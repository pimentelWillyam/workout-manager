import { UserController } from "../controllers/UserController";
import { User } from "../model/User";

export class CreateUser{
  static async execute(upToDateUser: User): Promise<void>{
    await new UserController().updateUser(upToDateUser)
  }
}