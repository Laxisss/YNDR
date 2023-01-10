/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'yndr',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}






















class Database {
  private host: string;
  private username: string;
  private password: string;
  private database: string;

  constructor(host: string, username: string, password: string, database: string) {
    this.host = host;
    this.username = username;
    this.password = password;
    this.database = database;
  }

  checkInit(): string {
    return `Voici la configuration de l'instance actuelle : ${JSON.stringify(this)}`;
  }

}

export default Database;