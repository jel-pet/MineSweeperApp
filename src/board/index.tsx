import {useDispatch, useSelector} from "react-redux";
import {getMap, newGame, open} from "./actions";
import {StylesProvider} from "@material-ui/core";
import {BoardContainer, ButtonContainer, Message, MessageContainer, RowWrapper, StartButton} from "./styles";
import Cell from "./components/cell";
import {parseBoard} from "./utils";

const gameTypes = {
    EASY: 1,
    MEDIUM: 2,
    HARD: 3
}


export default function Board() {
    const {board, status} = useSelector((state: any) => state.board);
    const dispatch = useDispatch();
    const mapMatrix = parseBoard(board);

    const handleStartGame = (difficulty: number) => {
        dispatch(newGame(difficulty));
        dispatch(getMap());
    }

    function handleButtonClick(i: number, j: number) {
        dispatch(open(j, i));
        dispatch(getMap());
    }

    function renderCells(row: string[], i: number) {
        return row.map((cell, j) => <Cell key={`${j}_${i}`} value={cell} onClick={() => handleButtonClick(i, j)}></Cell>)
    }

    function renderRow(i: number, row: string[]) {
        return <RowWrapper key={i}>
            {renderCells(row, i)}
        </RowWrapper>
    }

    return <StylesProvider injectFirst>
        <div>
            <MessageContainer>
                <Message>{status}</Message>
            </MessageContainer>
            <ButtonContainer>
                {Object.entries(gameTypes).map(([key, value]) => {
                    return <StartButton key={value} onClick={() => {
                        handleStartGame(Number(value))
                    }}>{key}</StartButton>
                })}
            </ButtonContainer>
            <BoardContainer>
                {mapMatrix.map((row, i) => renderRow(i, row))}
            </BoardContainer>
        </div>
    </StylesProvider>
}