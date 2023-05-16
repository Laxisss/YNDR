/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// import { Inject } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
// import { AppModule } from 'src/app.module';
import { Repository, Not } from 'typeorm';
import { Utilisateurs } from './users.entity';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
// import { databaseProviders } from '../database/database.providers';
// import { AppDataSource } from '../index';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Utilisateurs)
    // @Inject('USER_REPOSITORY')
    private usersRepository: Repository<Utilisateurs>
  ) {}


  async logMeIn(headers): Promise<string> {
    const authHeader = headers.authorization;
    const [type, credentials] = authHeader.split(' ');
    console.log(headers.authorization)

    if (type.toLowerCase() !== 'basic') {
      return "Vos identifiants n'ont pas pu être envoyés"
    }

    const [username, password] = Buffer.from(credentials, 'base64')
      .toString()
      .split(':');
    console.log(username, password)
    const user = await this.usersRepository.findOneBy({ AdresseMail: username });
    console.log(user)
    if (!user) {
      return "Ce compte n'existe pas"
    }
    const isValidPassword = await bcrypt.compare(password, user.MotDePasse);

    if (!isValidPassword) {
      return 'Mot de passe Invalide'
    }

    const secret = 'YndrSecretKey';
    const expiresIn = '1d';
    const token = jwt.sign({ userId: user.ID_Utilisateur }, secret, { expiresIn });

    return token;
  }

  getAllUsers(me: number): Promise<Utilisateurs[]> {
    return this.usersRepository.find({
      where: {
        ID_Utilisateur: Not(me)
      }
    });
  }

  getSingleUser(ID_Utilisateur: number): Promise<Utilisateurs> {
    return this.usersRepository.findOneBy({ ID_Utilisateur });
  }

  async registerUser(body: any): Promise<string> {
    const user = new Utilisateurs();
    user.Nom = body.Nom;
    user.Prenom = body.Prenom;
    user.AdresseMail = body.AdresseMail;
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(body.MotDePasse, saltRounds);
    user.MotDePasse = hashedPassword;

    user.DateCreation = new Date().toISOString().substring(0, 10);;
    user.DateNaissance = body.DateNaissance;
    await this.usersRepository.save(user);
    return `Utilisateur inséré :${user}`;
  }

  async removeUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
