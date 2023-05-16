/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Scroller {
  @PrimaryColumn()
  ID_Utilisateur_scrolleur: number;
  
  @PrimaryColumn()
  ID_Utilisateur_scrolle: number;

  @Column()
  casulike: number;

  @Column()
  superLike: number;

  @Column()
  message: number;
}