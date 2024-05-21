import { IDatabase } from "../interfaces/IDatabase";
import { SQLiteQueries } from "../queries/SQLiteQueries";
import {SQLiteDatabase, openDatabase} from 'expo-sqlite';



class DatabaseConnection{
  private static instance: SQLiteDatabase | undefined;

  static async getInstance(): Promise<SQLiteDatabase> {
    if (this.instance === undefined) this.instance = await openDatabase('workout-manager')
    return this.instance
  }
}

export class Database implements IDatabase{

  private connection: SQLiteDatabase | undefined

  async start(): Promise<void> {
    this.connection = await DatabaseConnection.getInstance()
    this.bootstrap()
  }

  getConnection(): SQLiteDatabase {
    if (this.connection === undefined) throw new Error('Não existe conexão com banco de dados para se obter')
    return this.connection
  }

  stop(): void {
    if (this.connection === undefined) throw new Error('Não existe conexão com banco de dados para se encerrar')
    this.connection.closeAsync()
    this.connection = undefined
  }

  private async bootstrap(): Promise<void> {
    if (this.connection === undefined) throw new Error('Conexão com o banco de dados não pode ser estabelecida')
    await this.connection.execAsync([{sql: SQLiteQueries.createDatabaseIfDoesNotExists, args: []}], true)
    await this.connection.execAsync([{sql: SQLiteQueries.createUserTableIfDoesNotExists, args: []}], true)
  }
}
