import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.3rem;

  > span {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;