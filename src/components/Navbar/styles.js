import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 114px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    padding: 56px 28px 24px;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    div {
        position: relative;
    }

    svg:last-child {
        position: absolute;

        top: -10px;
        right: -10px;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    h2 {
        line-height: 21px;
    }
`