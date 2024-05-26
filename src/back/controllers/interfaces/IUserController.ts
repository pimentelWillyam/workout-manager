import { User } from "../../model/User";

export interface IUserController {
  insertUser(userName: string): Promise<void> 
  fetchUser(): Promise<User | null>
  updateUser(upToDateUser: User): Promise<void>
  deleteUser(): Promise<void>
}