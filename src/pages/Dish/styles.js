import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints.js"

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
    display: flex;
    flex-direction: column;

    padding: 1.6rem 5.6rem 3.4rem;

    a > button {
        margin-top: 2rem;
    }

    img {
        height: 26rem;
        width: 26rem;
    }

    .description {
        margin: 2.4rem 0;
        text-align: center;
    }

    h2 {
        text-align: center;
    }

    .tags {
        display: flex;
        max-width: 26rem;
        flex-wrap: wrap;
        row-gap: 2.4rem;
        column-gap: 2.4rem;
    }

    .order {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            margin: 0;
        }

        margin-top: 4.8rem;

        gap: 1.6rem;
        
        p {
            font-size: 2.2rem;
            font-weight: bold;
        }
    }
    
    .edit-dish {
        margin-top: 4.8rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
            .content-desktop {
                display: flex;
                gap: 4.8rem;

                margin: 4.2rem 12rem 23rem;

                img {
                    width: 39rem;
                    height: 39rem;
                }

                h2 {
                    text-align: left;
                    ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM}
                }

                p { 
                    ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR}
                    text-align: left;
                }

                .dish-data {
                    padding: 4.5rem 0;
                }

                .tags {
                    display: flex;
                    max-width: 68rem;
                    gap: 1.2rem;

                    span {
                        padding: .8rem .8rem;
                        ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}
                    }
                }

                button {
                    margin-top: 4.8rem;
                }

                .edit-dish {
                    display: flex;
                    justify-content: left;

                    button {
                        margin: 0;
                    }
                }

                .edit-dish button {
                    width: 13rem;
                }

                .order {
                    justify-content: left;

                    button {
                        margin: 0;
                        width: 16rem;
                    }
                }
            }
        }

`