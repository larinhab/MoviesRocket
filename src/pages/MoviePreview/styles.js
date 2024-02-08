import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
`

export const Content = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;

    flex-direction: column;
    margin: 0 auto;

    padding: 1rem 5rem;
    overflow-y: scroll;

    >h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    >p {
        font-family: 'Roboto';
        text-align: justify;
        margin-top: 2rem;
        
    }
`
