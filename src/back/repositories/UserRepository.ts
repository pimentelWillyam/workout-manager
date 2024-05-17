import { User } from "../model/User";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  

  constructor(private readonly userDataSource: I)

  createUser(userName: string): User {
    
  }

  fetchUser(id: number): User {
    
  }

  updateUser(id: number, upToDateUser: User): User {
    
  }

  deleteUser(id: number): User {
    
  }
}