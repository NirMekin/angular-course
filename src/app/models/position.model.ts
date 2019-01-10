import {Position} from "../services/position.interface";

export class PositionModel implements Position {

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    x: number;
    y: number;
}