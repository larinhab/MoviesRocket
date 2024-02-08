import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border-radius: 1rem;

    > input {
        width: 100%;
        height: 3rem;

        padding: 1rem;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        border: 0;
        border-radius: 1rem;
        font-family: 'Roboto';

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
            margin-left: 1.6rem;
        }
`