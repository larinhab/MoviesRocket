import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Content = styled.div`
    grid-area: content;
    
    padding: 0 64px;
    overflow-y: auto;

`
export const NewNote  = styled.div`
    grid-area: newnote;
    
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color:  ${({theme}) => theme.COLORS.ORANGE};
    color:  ${({theme}) => theme.COLORS.WHITE};

    svg {
        margin-right: 8px;
    }

`