/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posseder } from './posseder.entity';

@Injectable()
export class PossederService {

  constructor(
    @InjectRepository(Posseder)
    private PossederRepository: Repository<Posseder>
  ) {}

  getAllLinks(): Promise<Posseder[]> {
    return this.PossederRepository.find();
  }

  getLinkOfUser(ID_Utilisateur: number): Promise<Posseder[]> {
    return this.PossederRepository.find({where: {
      ID_Utilisateur
    }})
  }

  getUsersOfLink(ID_Trait: number): Promise<Posseder[]> {
    return this.PossederRepository.find({where: {
      ID_Trait
    }})
  }

  addLink(body: any): string {
    const link = new Posseder();
    link.ID_Trait = body.ID_Trait;
    link.ID_Utilisateur = body.ID_Utilisateur;
    this.PossederRepository.save(link);
    return 'done'
  }

  async removeLink(ID_Utilisateur: string, ID_Trait: string): Promise<void> {
    this.PossederRepository.delete([ID_Utilisateur, ID_Trait])
  }
}
