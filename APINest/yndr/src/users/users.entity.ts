/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}