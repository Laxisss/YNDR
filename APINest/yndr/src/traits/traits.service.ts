/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Traits } from './traits.entity';

@Injectable()
export class TraitsServices {

  constructor(
    @InjectRepository(Traits)
    private TraitsRepository: Repository<Traits>
  ) {}

  getAllTraits(): Promise<Traits[]> {
    return this.TraitsRepository.find();
  }

  getSingleTrait(ID_Trait: number): Promise<Traits> {
    return this.TraitsRepository.findOneBy({ ID_Trait });
  }

  registerTrait(body: any): string {
    const Trait = new Traits();
    Trait.Nom = body.Nom;
    this.TraitsRepository.save(Trait);
    return `Trait inséré :${Trait}`;
  }

  async removeTrait(id: string): Promise<void> {
    await this.TraitsRepository.delete(id);
  }
}
