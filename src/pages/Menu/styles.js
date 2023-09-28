import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;

    > main {
        grid-area: content;
    }
`;

export const Header = styled.header`
    grid-area: header;

    height: 11.4rem;
    width: 100%;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 6rem 2.8rem 2.8rem 2.8rem;
`

export const Content = styled.div`
    margin: 3.6rem 2.8rem 0;

    > button {
        margin-top: 3.6rem;
        width: 100%;
        padding-bottom: 1rem;

        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
`;