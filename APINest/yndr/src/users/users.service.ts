/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// import { Inject } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { TraitsServices } from '../traits/traits.service';
// import { AppModule } from 'src/app.module';
import { Repository } from 'typeorm';
import { Utilisateurs } from './users.entity';
// import { Traits } from '../traits/traits.entity';
// import { databaseProviders } from '../database/database.providers';
// import { AppDataSource } from '../index';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Utilisateurs)
    // @Inject('USER_REPOSITORY')
    private usersRepository: Repository<Utilisateurs>,
    private readonly traitsServices: TraitsServices
  ) {}

  getAllUsers(): Promise<Utilisateurs[]> {
    return this.usersRepository.find({
      relations: {
        traits: true
      }
    });
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
    user.traits = []
    this.usersRepository.save(user);
    return `Utilisateur inséré :${user}`;
  }

  async removeUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  getUserTraits(ID_Utilisateur: any): Promise<Utilisateurs> {

    return this.usersRepository.findOne({
      select: {
        ID_Utilisateur: true
      },
      where: {
        ID_Utilisateur
      },
      relations: {
        traits: true
      }  
    })
  }

  async addTraitToUser(ID_Utilisateur: number, ID_Trait: number): Promise<string> {
    const trait = await this.traitsServices.getSingleTrait(ID_Trait);
    console.log(trait);
    const user = await this.getSingleUser(ID_Utilisateur)
    console.log(user);
    user.traits.push(trait);
    this.usersRepository.save(user);
    return "trait ajouté";
  }
}
