import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const StartButton = styled(Button)({
   margin: 8, 
   height: 42, 
   width: 70,
   borderRadius: 10,
   marginBottom: 20, 
   borderWidth:1,
   borderColor:'black',
   borderStyle: 'solid',
   cursor: 'pointer',
});


export const BoardContainer = styled('div')({
   display: 'flex',
   alignContent: 'center', 
   alignSelf: 'center',
   textAlign: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   marginBottom: 40,
   width: '100%'
});

export const MessageContainer = styled('div')({
   flexDirection: 'row', 
   alignSelf: 'center',
   marginBottom: 20,
   marginTop: 20,
   width: '100%'
});

export const Message = styled('div')({
   fontSize: 20,
   textAlign: 'center',
});

export const ButtonContainer = styled('div')({
   marginBottom: 30,
   alignContent: 'center', 
   alignSelf: 'center',
   alignItems: 'center',
   textAlign: 'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
});

export const PageWrapper = styled('div')({
   alignContent: 'center', 
   alignSelf: 'center',
});

export const CellWrapper = styled('div')({
   display: 'flex',
   justifyContent: 'flex-start',
});

export const RowWrapper = styled("div")({
   display: "flex",
   flexDirection: "row"
})