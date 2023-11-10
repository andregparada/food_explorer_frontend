import styled from "styled-components";

export const Container = styled.div`
    box-sizing: content-box;
    max-width: 31.6rem;
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    padding: 15.8rem 2rem;
    margin-inline: auto;

    p {
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        margin-bottom: .8rem;
    }

    button:last-of-type {
        ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}
        margin-inline: auto;
    }
`;

export const Logo = styled.div` 
    display: flex;
    align-items: center;

    gap: 1rem;

    h1 {
        font-size: 3.8rem;
    }

    margin-bottom: 4.1rem;
`;
