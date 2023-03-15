/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Posseder {
  @PrimaryColumn()
  ID_Trait: number;
  
  @PrimaryColumn()
  ID_Utilisateur: number;
}