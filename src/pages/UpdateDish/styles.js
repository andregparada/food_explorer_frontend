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


`;

export const Content = styled.div`
    padding: 1rem 3.2rem 5.3rem;

    #image {
        
        display: none;
    }

    .image-button {
            padding: 1.2rem 0 1.2rem 2.2rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            gap: .8rem;
            border-radius: .8rem;

            background-color: ${({ theme }) => theme.COLORS.DARK_800};

            ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            p {
                margin: 0;
            }
        }


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
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
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

    select {
        width: 100%;
        height: 4.8rem;
        border: none;
        border-radius: .8rem;
        padding: 1.3rem 1.6rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR}
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

    .save {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`
