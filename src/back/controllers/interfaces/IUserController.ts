import { User } from "../../model/User";

export interface IUserController {
  insertUser(userName: string): User 
  fetchUser(id: number): User
  updateUser(id: number, upToDateUser: User): User
  deleteUser(id: number): User
}