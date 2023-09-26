import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 114px auto;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    > main {
        grid-area: content;
    }

    > footer {
        grid-area: footer;
    }
`;

export const Content = styled.div`
    padding: 16px 56px 34px;
`