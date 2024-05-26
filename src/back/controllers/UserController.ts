import { UserDataSource } from "../datasources/UserDataSource";
import { UserFactory } from "../factories/UserFactory";
import { User } from "../model/User";
import { IUserController } from "./interfaces/IUserController";

export class UserController implements IUserController {

  async insertUser(): Promise<void> {
    const user = UserFactory.execute()
    await UserDataSource.insertUserRegistry(user)

  }

  async fetchUser(): Promise<User | null> {
    return await UserDataSource.fetchUserRegistry()
  }

  async updateUser(upToDateUser: User): Promise<void> {
    await UserDataSource.updateUserRegistry(upToDateUser)
  }

  async deleteUser(): Promise<void> {
    await UserDataSource.deleteUserRegistry()
  }
}