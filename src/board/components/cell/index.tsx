import {FC} from 'react';

import {CellButton, CellContainer} from './styles';

interface IProps {
    value: string,
    onClick: () => any
}

const Cell: FC<IProps> = ({value, onClick}: IProps) => {
    return (
        <CellContainer>
            <CellButton onClick={onClick}>{value}</CellButton>
        </CellContainer>
    );
};


export default Cell;
