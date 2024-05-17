import { User } from "../../model/User"

export interface IUserRepository {
  createUser(userName: string): User
  fetchUser(id: number): User
  updateUser(id: number, upToDateUser: User): User
  deleteUser(id: number): User
}