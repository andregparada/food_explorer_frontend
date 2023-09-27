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

export const Content = styled.div`
    padding: 1.6rem 5.6rem 3.4rem;

    display: flex;
    flex-direction: column;

    > button:first-child {
        margin-top: 2rem;
    }

    .description {
        margin: 2.4rem 0;
        text-align: center;
    }

    .tags {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-between;
        row-gap: 2.4rem;
    }

    .order {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            margin: 0;
        }

        margin-top: 4.8rem;

        gap: 1.6rem;
        
        p {
            font-size: 2.2rem;
            font-weight: bold;
        }
    }

`