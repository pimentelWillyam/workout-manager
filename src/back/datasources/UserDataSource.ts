import { ResultSet, ResultSetError } from "expo-sqlite";
import { User } from "../model/User";
import { Database } from "../storage/local/Database";
import { SQLiteQueries} from "../storage/queries/SQLiteQueries";

export class UserDataSource {

  private static database: Database

  static async insertUserRegistry(user: User): Promise<User> {
    try {
      const result = await this.database.getConnection().execAsync([{sql: SQLiteQueries.insertUserRegistry, args: [user.name, user.current_pushup_level, user.current_pullup_level, user.current_situp_level, user.current_squat_level, user.tracking_pushups, user.tracking_pullups, user.tracking_situps, user.tracking_squats]}], false)
      console.log(result)
    } catch (error) {
      console.log('error when inserting user registry')
    }
    return user
  }

  static async fetchEveryUserRegistry(): Promise<(ResultSetError | ResultSet)[]> {
    const result = await this.database.getConnection().execAsync([{sql: SQLiteQueries.fetchEveryUserRegistry, args: []}], true)
    return result
  }

  static async fetchUserRegistry(id: number): Promise<void> {
    const result = await this.database.getConnection().execAsync([{sql: SQLiteQueries.fetchUserById, args: [id]}], true )
  }

  static async updateUserRegistry(id: number, upToDateUser: User): Promise<void> {
    this.database.getConnection().execAsync([{sql: SQLiteQueries.updateUserRegistry, args: [upToDateUser.name, upToDateUser.current_pushup_level, upToDateUser.current_pullup_level, upToDateUser.current_situp_level, upToDateUser.current_squat_level, upToDateUser.tracking_pushups, upToDateUser.tracking_pullups, upToDateUser.tracking_situps, upToDateUser.tracking_squats, id]}], false)

  }

  static async deleteUserRegistry(id: number): Promise<void> {
    const result = await this.database.getConnection().execAsync([{sql:SQLiteQueries.deleteUserRegistry,args: [id] }], false )
  }


}