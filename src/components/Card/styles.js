import styled from "styled-components"; 

export const Container = styled.div`
    width: 21rem;

    text-align: center;

    border-radius: .8rem;
    padding: 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    position: relative;
    
    > svg, .admin-logo {
        position: absolute;

        top: 1.6rem;
        right: 1.6rem
    }

    
    p {
        margin: 1.2rem 0 1.2rem;

        ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    span {
        margin-bottom: 1.2rem;

        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}

        color: ${({ theme }) => theme.COLORS.CAKE_200};
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

    .admin-margin {
        margin-bottom: 7rem;
    }
`