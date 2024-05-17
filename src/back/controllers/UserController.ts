import { UserDataSource } from "../datasources/UserDataSource";
import { UserFactory } from "../factories/UserFactory";
import { User } from "../model/User";
import { IUserController } from "./interfaces/IUserController";

export class UserController implements IUserController {

  async insertUser(userName: string): Promise<User> {
    const user = UserFactory.execute(userName)
    await UserDataSource.insertUserRegistry(user)

  }

  async fetchUser(id: number): Promise<User> {
    await UserDataSource.fetchUserRegistry(id)
  }

  async updateUser(id: number, upToDateUser: User): User {
    await UserDataSource.updateUserRegistry(id, upToDateUser)
  }

  async deleteUser(id: number): User {
    await UserDataSource.deleteUserRegistry(id)
  }
}