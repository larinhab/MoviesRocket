import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: 
    "header"
    "container";
    justify-content: space-between;
    align-items: center;
    overflow-y: auto;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 10rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 2rem 0;
        }
        
        h1 {
            font-weight: 400;
        }
    }

    ::-webkit-scrollbar {
        width: .5rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
        margin-left: .5rem;
    }  

`

export const NewMovie = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    height: 56px;

    padding: 0 16px;
    margin-top: 16px;
    
    border: 0;
    border-radius: 10px;

    font-family: 'Roboto';
    font-weight: bold;
    cursor: pointer;

    > svg{
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        font-size: 1.2rem;
    }
    
`