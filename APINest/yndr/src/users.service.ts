import { Injectable } from '@nestjs/common';
import Database from './database.manager';

@Injectable()
export class UsersService {
  getAllUsers(): string {
    return 'Voici tous les users';
  }

  getSingleUser(id: string): string {
    return `Voici l'utilisateur ${id}`;
  }

  registerUser(body: object): string {
    const db = new Database('localhost', 'root', '', 'yndr');
    return `Utilisateur inséré :${JSON.stringify(body)} + ${db.checkInit()}`;
  }
}
