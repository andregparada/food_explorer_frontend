import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints.js"

export const Container = styled.header`
    grid-area: header;

    height: 11.4rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;

    padding: 5.6rem 2.8rem 2.4rem;

    background: ${({ theme }) => theme.COLORS.DARK_700};
    

    div {
        position: relative;

        > svg:last-child {
            position: absolute;
            top: -1rem;
            right: -1rem;
        }
    }

    .input, .button, .svg {
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        justify-content: center;
        align-items: center;
        gap: 3.2rem;

        height: 10.4rem;

        padding: 0;

        /* padding: 2.4rem auto; */
    
        .menu {
            display: none;
        }

        .input {
            display: flex;

            width: 58rem;
        }

        .button {
            width: 21rem;
        }

        .svg, .button {
            display: block;
        }

        .svg {
            width: 2.2rem;
        }
    }

`

export const Logo = styled.div`
    display: flex;
    align-items: center;

    gap: 0.8rem;

    h2 {
        font-size: clamp(.3rem, 1.6rem, 2rem);
    }

    p {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR} 
    }

    .polygon-desktop {
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        align-items: center;
        gap: 1rem;

        h2 {
            ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD}
        }

        p {
            text-align: end;
        }

        .polygon-mobile {
            display: none;
        }

        .polygon-desktop {
            display: block;
        }
    }
`