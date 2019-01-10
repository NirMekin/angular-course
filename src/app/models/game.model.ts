import {Game} from "../services/game.interface";
import {Board} from "../services/board.interface";
import {Position} from "../services/position.interface";
import {PositionModel} from "./position.model";

export class GameModel implements Game {

    board: Board;
    level: number;
    position: Position;
    score: number;

    constructor(board: Board, level: number) {
        this.board = board;
        this.level = level;
        this.score = 0;
        this.position = new PositionModel(0, 0);
    }

    down(): Position {
        let validate = this.validate(this.position.x, this.position.y - 1, this.board.size);
        if (validate) {
            this.position.y--;
        }
        return this.position;
    }

    left(): Position {
        let validate = this.validate(this.position.x, this.position.x - 1, this.board.size);
        if (validate) {
            this.position.x--;
        }
        return this.position;
    }

    right(): Position {
        let validate = this.validate(this.position.x+1, this.position.y , this.board.size);
        if (validate) {
            this.position.x++;
        }
        return this.position;
    }

    up(): Position {
        let validate = this.validate(this.position.x, this.position.y+1, this.board.size);
        this.position.y++;
        return this.position;
    }

    private validate(x: number, y: number, size: number) {
        return x >= 0 && x <= size - 1 && y >= 0 && y <= size - 1;
    }

}