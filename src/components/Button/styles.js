import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 4.8rem;
    border: 0;
    padding: 0 1.6rem; /*ver*/
    margin-top: 1.6rem; /*ver*/
    border-radius: 0.5rem;

    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    &:disabled {
        opacity: 0.5;
    }
`;