import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 11.4rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;

    padding: 5.6rem 2.8rem 2.4rem;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    div {
        position: relative;

        > svg:last-child {
        position: absolute;

        top: -1rem;
        right: -1rem;
    }
    }

    
`

export const Logo = styled.div`
    display: flex;
    align-items: start;

    gap: 0.8rem;

    h2 {
        font-size: 1.6rem;
    }
`