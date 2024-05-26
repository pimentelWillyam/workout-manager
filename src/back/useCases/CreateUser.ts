import { UserController } from "../controllers/UserController";

export class CreateUser{
  static async execute(){
    await new UserController().insertUser()
  }
}