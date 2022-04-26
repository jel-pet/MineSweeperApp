import {FC} from 'react';

import {CellButton, CellButtonClicked, CellContainer} from './styles';

const CELL_NOT_OPEN = "□";

interface IProps {
    value: string,
    onClick: () => any
}

const Cell: FC<IProps> = ({value, onClick}: IProps) => {
    return (
        <CellContainer>
        {value === CELL_NOT_OPEN &&
            <CellButton onClick={onClick}/>
        }
        {value !== CELL_NOT_OPEN &&
            <CellButtonClicked onClick={onClick}>{value}</CellButtonClicked>
        }
        </CellContainer>
    );
};


export default Cell;
