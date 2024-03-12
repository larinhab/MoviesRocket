import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 1.6rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;
  margin-right: 0.8rem;

     ::-webkit-scrollbar {
        width: .5rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
        margin-left: .5rem;
    }  


  > h1 {
    flex: 1;
    text-align: left;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 0.8rem;
  }

  > p {
    font-family: 'Roboto';
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 1.5rem 0;
    max-height: 5.3rem;
    padding-right: .8rem;

    line-height: 1.5rem;

    overflow-y: scroll;
    text-overflow: ellipsis;

  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }
`;