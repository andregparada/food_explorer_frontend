import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    border-radius: .5rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    > input {
        width: 100%;
        height: 4.8rem;
        background: transparent;
        border: 0;

        padding: 1.6rem 1.4rem;

        &:placeholder {
            /* color: ${({ theme }) => theme.COLORS.LIGHT_500}; */
        }
    }
`