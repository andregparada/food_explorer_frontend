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
`;

export const Content = styled.div`
    > main {
        grid-area: content;
    }

    margin: 1rem 3.2rem 5.3rem;

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

    #image {
        display: none;
    }

    .image-button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: .8rem;

        border-radius: .8rem;
        padding: 1.2rem 0 1.2rem 2.2rem;

        ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}
        
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        p {
            margin: 0;
        }
    }

    .photo {
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
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

        padding: .8rem;
        border-radius: .8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
    
    textarea {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .save {
        margin-top: 2.4rem;

        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin: 4rem 7.4rem 11.6rem;

        p {
            margin: 3.2rem 0 1.6rem;
        }

        .back {
            ${({ theme }) => theme.FONTS.POPPINS_300_BOLD}
        }

        .box-1 {
            display: flex;
            justify-content: space-between;
            gap: 3.2rem;

            .image {
                width: 22.9rem;
            }

            .name {
                width: 46.3rem;
                > div {
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                }
            }

            .categorie {
                width: 36.4rem;
                > select {
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                }

            }
        }

        .box-2 {
            display: flex;
            justify-content: space-between;
            gap: 3.2rem;

            .ingredients div {
                height: 3.2rem;
            }

            .ingredients-box {
                width: 83.7rem;
            }

            .price {
                width: 25.1rem;
                > div {
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                }
            }
        }

        .button {
            display: flex;
            flex-direction: row-reverse;
        }
        .save {
            width: 17.2rem;

            ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}
            text-align: center;
        }
    }
`
