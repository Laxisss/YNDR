/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateurs } from './Database/users.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Utilisateurs)
    private usersRepository: Repository<Utilisateurs>
  ) {}

  getAllUsers(): Promise<Utilisateurs[]> {
    return this.usersRepository.find();
  }

  getSingleUser(ID_Utilisateur: number): Promise<Utilisateurs> {
    return this.usersRepository.findOneBy({ ID_Utilisateur });
  }

  registerUser(body: object): string {
    // const db = new Database('localhost', 'root', '', 'yndr');
    return `Utilisateur inséré :${JSON.stringify(body)}`; // + ${db?.checkInit()}`;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
