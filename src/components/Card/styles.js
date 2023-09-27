import styled from "styled-components"; 

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    width: 21rem;
    padding: 2.4rem;
    text-align: center;

    position: relative;

    > svg {
        position: absolute;

        top: 1.6rem;
        right: 1.6rem
    }

    p {
        ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}
        margin: 1.2rem 0 1.2rem;
    }

    span {
        margin-bottom: 1.2rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}
    }

    .add-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;

        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}

    }

    button {
        margin-top: 2rem;
    }
`