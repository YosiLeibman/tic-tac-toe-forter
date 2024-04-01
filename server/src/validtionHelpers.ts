export const outOfRange = (index:number) => index < 0 && index > 9

export const isOccupied = (index:number, board:string[]) => board[index]