import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints.js"

export const Container = styled.div`
    box-sizing: content-box;
    max-width: 31.6rem;
    height: 100vh;

    .input-wrapper {
            display: flex;
            flex-direction: column;
            gap: 3.2rem;
    }

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

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 90rem;
        max-width: 110rem;
        height: 54rem;

        display: flex;
        justify-content: space-between;

        margin: 6rem auto 4.2rem;
        padding: 0;

        .input-wrapper {
            border-radius: .8rem;
            padding: 2.4rem 6.4rem 2.4rem 6.4rem;

            background-color: ${({ theme }) => theme.COLORS.DARK_700};

            h2 {
                display: block;

                ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM}
                text-align: center;
            }
            
            input {
                width: 35rem;
            }
        }
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

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        h1 {
            ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD}
        }

        margin-bottom: 0;
    }
`;
