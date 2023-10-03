import styled from "styled-components";

export const Container = styled.div`
    
    height: 100vh;

    padding: 15.8rem 4.7rem 0 6.5rem;

    p {
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        margin-bottom: .8rem;
    }

    button:last-of-type {
        ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}
        margin: 3.2rem auto 0;
    }

    > div, button {
        margin-bottom: 3.2rem;
    }

`;

export const Logo = styled.div` 
    display: flex;
    align-items: center;

    gap: 1rem;

    h1 {
        font-size: 3.8rem;
    }

    margin-bottom: 7.3rem;
`;
