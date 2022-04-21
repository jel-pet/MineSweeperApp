export function parseBoard(board: string): string[][] {
    return board.replace("map:\n", "")
        .split("\n")
        .map(row => row.trim().split(""));
}