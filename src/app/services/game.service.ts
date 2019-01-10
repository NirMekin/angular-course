import { Injectable } from '@angular/core';
import { Game } from './game.interface'
import {GameModel} from "../models/game.model";
import {Board} from "./board.interface";
import {BoardModel} from "../models/board.model";

@Injectable()
export class GameService{
  game:Game;
  board: Board;

  constructor() { }

  init(level:number){
    this.board = new BoardModel(level);
    this.game = new GameModel(this.board, level);
  }
  move(direction:string){}
}
