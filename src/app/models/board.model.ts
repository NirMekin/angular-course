import {Board} from "../services/board.interface";
import {Cell , CellModel} from "../services/cell.interface";

export class BoardModel implements Board{
    public size: number = 10;
    cells: Cell[10][10];

    constructor(level: number){
        for(let i = 0 ; i < 10 ; i++){
            for(let j = 0 ; j < 10 ; j++){
                this.cells[i][j] = new CellModel(false,false)
            }
        }
        this.cells[1][1] = new CellModel(true,false);
        //todo : create level bombs
    }
}