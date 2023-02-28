/* eslint-disable prettier/prettier */
import { Traits } from 'src/traits/traits.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Utilisateurs {
  @PrimaryGeneratedColumn()
  ID_Utilisateur: number;
  
  @Column()
  Nom: string;
  
  @Column()
  Prenom: string;

  @Column()
  AdresseMail: string;

  @Column()
  MotDePasse: string;
  
  @Column()
  DateCreation: string;
  
  @Column()
  DateNaissance: string;

  @ManyToMany(() => Traits, trait => trait.utilisateurs)
  @JoinTable()
  traits: Traits[]
}