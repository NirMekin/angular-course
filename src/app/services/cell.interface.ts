export interface Cell {
    isBomb : boolean;
    isVisited: boolean;
}

export class CellModel implements Cell {
    isBomb: boolean;
    isVisited: boolean;

    constructor(isBomb: boolean, isVisited: boolean) {
        this.isBomb = isBomb;
        this.isVisited = isVisited;
    }
}