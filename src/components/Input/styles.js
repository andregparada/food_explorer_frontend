import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.8rem;

    display: flex;
    align-items: center;

    border-radius: .8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    > input {
        width: 100%;

        background: transparent;
        border: 0;
        
        padding: 1.6rem 1.4rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`