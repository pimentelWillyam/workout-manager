import * as SQLite from 'expo-sqlite';

export interface IDatabase {

  start(): void
  getConnection(): SQLite.SQLiteDatabase
  stop(): void

}