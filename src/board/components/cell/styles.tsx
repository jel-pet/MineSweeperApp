import { Button } from "@material-ui/core";
import styled from "styled-components";

export const CellContainer = styled('div')({
    flex: 1,
});

export const CellButton = styled(Button)({
    textAlign: 'center',
    textAlignVertical:'center',
    backgroundColor: 'pink',
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0,
    height: 37,
    maxWidth: 37, 
    maxHeight: 37, 
    minWidth: 37, 
    minHeight: 37,
});
