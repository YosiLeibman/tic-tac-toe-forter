export enum Player {
    X = "x",
    O = "o"
}

export enum Status {
    WIN = "win",
    TIE = "tie",
    ERROR = "error",
    OK = "ok",
}

export type MoveRequest = {
    board: string[]
    turn: Player
    move: number
}

export interface MoveResponse{
    board: string[]
    status: Status
}