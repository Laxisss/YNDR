/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// import { Inject } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
// import { AppModule } from 'src/app.module';
import { Repository } from 'typeorm';
import { Utilisateurs } from './users.entity';
// import { databaseProviders } from '../database/database.providers';
// import { AppDataSource } from '../index';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Utilisateurs)
    // @Inject('USER_REPOSITORY')
    private usersRepository: Repository<Utilisateurs>
  ) {}

  getAllUsers(): Promise<Utilisateurs[]> {
    return this.usersRepository.find();
  }

  getSingleUser(ID_Utilisateur: number): Promise<Utilisateurs> {
    return this.usersRepository.findOneBy({ ID_Utilisateur });
  }

  registerUser(body: any): string {
    const user = new Utilisateurs();
    user.Nom = body.Nom;
    user.Prenom = body.Prenom;
    user.AdresseMail = body.AdresseMail;
    user.MotDePasse = body.MotDePasse;
    user.DateCreation = new Date().toISOString().substring(0, 10);;
    user.DateNaissance = body.DateNaissance;
    this.usersRepository.save(user);
    return `Utilisateur inséré :${user}`;
  }

  async removeUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
