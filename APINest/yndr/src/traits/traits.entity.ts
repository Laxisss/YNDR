/* eslint-disable prettier/prettier */
import { Utilisateurs } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Traits {
  @PrimaryGeneratedColumn()
  ID_Trait: number;
  
  @Column()
  Nom: string;

  @ManyToMany(() => Utilisateurs, utilisateur => utilisateur.traits)
  utilisateurs: Utilisateurs[]
}