import { openDatabase } from "react-native-sqlite-storage"
import { Database } from "../back/storage/local/Database"
import { SQLiteQueries } from "../back/storage/queries/SQLiteQueries";


import { Query } from "expo-sqlite";
import { UserDataSource } from "../back/datasources/UserDataSource";


export class ApplicationBootstrap {
    static async execute(): Promise<void> {
    new Database().start()
    await UserDataSource.fetchEveryUserRegistry()
        
    }
}