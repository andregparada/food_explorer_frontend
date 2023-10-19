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

    .back {
        font-size: 1.6rem ;
    }

    .back svg {
        height: 1.5rem;
    }

    h1 {
        ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM}
        margin-top: 2.4rem;
    }

    p {
        margin: 2.4rem 0 1.6rem;
    }

    .photo {
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    > main {
        grid-area: content;
    }

    .ingredients {
        display: flex;
        justify-content: flex-start;
        gap: 1.6rem;
        flex-wrap: wrap;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        padding: .8rem;
        border-radius: .8rem;
    }


`;

export const Content = styled.div`
    padding: 1rem 3.2rem 5.3rem;

    .buttons {
        display: flex;

        gap: 3.2rem;

        .delete {
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }

        .save {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        }
    }
`
