const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

export const checkForWin = (newBoard: string[])=>{
    for (const win of wins) {
        const [a,b,c] = win
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
            return true
        }
    }
}

export const checkForTie = (newBoard: string[]) => newBoard.every(index => !!index)