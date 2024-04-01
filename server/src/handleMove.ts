import { Response } from 'express'
import { MoveRequest, Player, Status } from './types'
import { outOfRange, isOccupied } from './validtionHelpers'
import { checkForTie, checkForWin } from './calcHelper'

export const handleMove = ({ board, turn, move }: MoveRequest, res: Response) => {
    //    validation
    if (outOfRange(move) || isOccupied(move, board))
        res.send({
            board,
            status: Status.ERROR
        })

    // add the new move to the board
    board[move] = turn

    // check for win, tie or regualr move
    if (checkForWin(board)) {
        res.send({
            board,
            status: Status.WIN
        })
    } else if (checkForTie(board)) {
        res.send({
            board,
            status: Status.TIE
        })
    } else {
        res.send({
            board,
            status: Status.OK
        })
    }
}