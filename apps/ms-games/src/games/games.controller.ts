import { Controller, Get, Post, Header } from '@nestjs/common';
import { Game } from '../interfaces/game.interface';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    @Post()
    @Header('Cache-Control', 'None')
    create(): string{
        return 'this action adds a new Game'
    }
    
    @Get()
    findAll(): string {
        return 'this action returns all Games'
    }
}
