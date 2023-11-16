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
    margin: 4.4rem 1.6rem 0 3.6rem;

    h3 {
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 140%;
    }

    .card-wrapper {
        display: flex;
        gap: 1.6rem;
        max-width: 37rem;
        overflow-x: scroll;

        img {
            width: 8.8rem;
        }

        &::-webkit-scrollbar  {
            display: none;
        }
    }

    
`;

export const Header = styled.div`
    height: 12rem;

    border-radius: .3rem;
    padding: 3.6rem .8rem 2.2rem 15.3rem;
    margin-bottom: 6.2rem;

    background: hsl(198, 61%, 9%);

    position: relative;

    img {
        position: absolute;

        bottom: 0;
        left: -3rem;
    }

    h2 {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%;
    }

    p {
        font-size: 1.2rem;
        line-height: 140%;
    }

`;

export const Dishes = styled.div`
    margin: 2.4rem 0;
`;