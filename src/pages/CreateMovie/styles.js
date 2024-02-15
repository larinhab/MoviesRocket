import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    > main {
        margin: 0 10rem;
        display: flex;
        justify-content: center;
        align-self: center;
        flex-direction: column;

        overflow-y: scroll;
    
        h1 {
            font-weight: 400;
            margin-bottom: 2.5rem;
        }
    }

    .movie-info{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 2.5rem;
        align-items: center;

        margin-bottom: 2rem;
    }

    h2{
        font-weight: 400;
        margin: 2.5rem 0 1rem;
    }
    
    .tags{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: .5rem;
        padding: 1rem;
        height: fit-content;
    }

    footer {
        display: flex;
        justify-content: space-between;
        gap: 2.5rem;
        width: 100%;
    }

    footer button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
    }


    ::-webkit-scrollbar {
        width: .5rem;
        height: .5rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
        margin-left: 2rem;
    }  
`
