/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scroller } from './scroller.entity';

@Injectable()
export class ScrollerService {

  constructor(
    @InjectRepository(Scroller)
    private ScrollerRepository: Repository<Scroller>
  ) {}

  getAllLikes(): Promise<Scroller[]> {
    return this.ScrollerRepository.find();
  }

  getLikesOfUser(ID_Utilisateur_scrolleur: number): Promise<Scroller[]> {
    return this.ScrollerRepository.find({where: {
      ID_Utilisateur_scrolleur
    }})
  }

  getAmILiked(ID_Utilisateur_scrolleur: number, me: number): Promise<Scroller[]> {
    return this.ScrollerRepository.find({where: {
      ID_Utilisateur_scrolleur,
      ID_Utilisateur_scrolle: me
    }})
  }

  // getUsersOfLink(ID_Trait: number): Promise<Scroller[]> {
  //   return this.ScrollerRepository.find({where: {
  //     ID_Trait
  //   }})
  // }

  addLike(body: any, me: number): string {
    const like = new Scroller();
    like.ID_Utilisateur_scrolleur = me;
    like.ID_Utilisateur_scrolle = body.ID_Utilisateur;
    this.ScrollerRepository.save(like);
    return 'done'
  }

  async removeLike(ID_Utilisateur: string, ID_Trait: string): Promise<void> {
    this.ScrollerRepository.delete([ID_Utilisateur, ID_Trait])
  }
}
