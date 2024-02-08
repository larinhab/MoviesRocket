import styled from "styled-components";


export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-items: center;
    
    color: ${({ theme }) => theme.COLORS.PINK};
    background: transparent;
    
    font-size: 16px;
    border: none;
    text-decoration: none;

    > p {
        padding-left: 0.5rem;
        font-size: 1.2rem;
        margin: 3rem 0;
    }
`