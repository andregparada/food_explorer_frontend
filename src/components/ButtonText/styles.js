import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    gap: 1rem;
    align-items: center;

    border: none;

    font-size: 2.4rem;

    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;