import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints.js"

export const Container = styled.footer`
    grid-area: footer;
    
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.8rem;

    padding: 2.2rem 2.7rem;

    background-color: ${({theme}) => theme.COLORS.DARK_600};
    
    p {
        font-size: 1.2rem;
        text-align: right;

        color: ${({theme}) => theme.COLORS.LIGHT_200};
    }
`;

export const Logo = styled.div`
    width: 14rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.8rem;

    h2 {
        color: ${({theme}) => theme.COLORS.LIGHT_700};
        font-size: 1.6rem;
    }

    .polygon-desktop {
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 18.6rem;

        h2 {
            ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD}
        }

        .polygon-desktop {
            display: block;
        }

        .polygon-mobile {
            display: none;
        }
    }
`