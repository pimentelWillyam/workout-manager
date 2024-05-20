import { openDatabase } from "react-native-sqlite-storage"
import { Database } from "../back/storage/local/Database"
import { SQLiteQueries } from "../back/storage/queries/SQLiteQueries";
import * as SQLite from 'expo-sqlite';

import { Query } from "expo-sqlite";


export class ApplicationBootstrap {
    static async execute(): Promise<void> {
        const db = await SQLite.openDatabase('workout-manager')
        await db.execAsync([{sql: SQLiteQueries.createDatabaseIfDoesNotExists, args: []}], true)
        await db.execAsync([{sql: SQLiteQueries.createUserTableIfDoesNotExists, args: []}], true)
    }
}