/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Traits {
  @PrimaryGeneratedColumn()
  ID_Trait: number;
  
  @Column()
  Nom: string;
}