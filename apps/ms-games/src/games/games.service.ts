import { Injectable, Req } from '@nestjs/common';
import { Game } from '../interfaces/game.interface';
import { Request } from 'express'


@Injectable()
export class GamesService {
    private readonly games: Game[] = [];

    create(game: Game) {
        this.games.push(game);
    
    }
    findAll(@Req() request: Request): Game[] {
    
        return this.games
    }
  
};
