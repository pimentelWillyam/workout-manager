import { openDatabase, SQLiteDatabase } from "react-native-sqlite-storage";
import { IDatabase } from "../interfaces/IDatabase";
import { SQLiteQueries } from "../queries/SQLiteQueries";


class DatabaseConnection{
  private static instance: SQLiteDatabase | undefined;

  static async getInstance(): Promise<SQLiteDatabase> {
    if (this.instance === undefined) this.instance = await openDatabase({name: 'workout-manager', location: 'default'})
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
    this.connection.close()
    this.connection = undefined
  }

  private bootstrap(): void {
    if (this.connection === undefined) throw new Error('Conexão com o banco de dados não pode ser estabelecida')
    this.connection.executeSql(SQLiteQueries.createDatabaseIfDoesNotExists, ['workout-manager'])
    this.connection.executeSql(SQLiteQueries.createUserTableIfDoesNotExists)
  }
}
