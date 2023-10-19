import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 17.2rem;

    resize: none;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    padding: 1.4rem;
    border-radius: .8rem;
`