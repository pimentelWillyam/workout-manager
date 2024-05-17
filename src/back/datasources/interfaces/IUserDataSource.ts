import { User } from '../../model/User'

export interface IUserDataSource {
  static insertUserRegistry: (user: User) => User
}