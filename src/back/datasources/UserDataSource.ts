import { User } from "../model/User";
import { Database } from "../storage/local/Database";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class UserDataSource {

  private static database: Database

  static async insertUserRegistry(user: User): Promise<void> {
    // const result = await this.database.getConnection().executeSql(SQLiteQueries.insertUserRegistry, [user.name, user.current_pushup_level, user.current_pullup_level, user.current_situp_level, user.current_squat_level, user.tracking_pushups, user.tracking_pullups, user.tracking_situps, user.tracking_squats])
    await AsyncStorage.setItem('user', JSON.stringify(user))
  }

  static async fetchEveryUserRegistry(): Promise<void> {
    // await this.database.getConnection().executeSql(SQLiteQueries.fetchEveryUserRegistry)

  }

  static async fetchUserRegistry(id: number): Promise<void> {
    // const result = await this.database.getConnection().executeSql(SQLiteQueries.fetchUserById, [id])
  }

  static async updateUserRegistry(id: number, upToDateUser: User): Promise<void> {
    // this.database.getConnection().executeSql(SQLiteQueries.updateUserRegistry, [upToDateUser.name, upToDateUser.current_pushup_level, upToDateUser.current_pullup_level, upToDateUser.current_situp_level, upToDateUser.current_squat_level, upToDateUser.tracking_pushups, upToDateUser.tracking_pullups, upToDateUser.tracking_situps, upToDateUser.tracking_squats, id])

  }

  static async deleteUserRegistry(id: number): Promise<void> {
    // const result = await this.database.getConnection().executeSql(SQLiteQueries.deleteUserRegistry, [id])
  }


}