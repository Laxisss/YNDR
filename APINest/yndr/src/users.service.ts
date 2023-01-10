import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAllUsers(): string {
    return 'Voici tous les users';
  }

  getSingleUser(id: string): string {
    return `Voici l'utilisateur ${id}`;
  }

  registerUser(body: object): string {
    return `Utilisateur inséré :${JSON.stringify(body)}`;
  }
}
