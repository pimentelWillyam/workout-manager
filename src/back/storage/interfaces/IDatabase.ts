import { SQLiteDatabase } from "react-native-sqlite-storage"

export interface IDatabase {

  start(): void
  getConnection(): SQLiteDatabase
  stop(): void

}