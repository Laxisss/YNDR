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

  getAllTraits(): Promise<Posseder[]> {
    return this.PossederRepository.find();
  }

  getSingleTrait(ID_Trait: number): Promise<Posseder> {
  }

  registerTrait(body: any): string {
  }

  async removeTrait(PossederRepository: string): Promise<void> {
  }
}
