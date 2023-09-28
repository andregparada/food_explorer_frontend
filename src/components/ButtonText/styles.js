import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    display: flex;
    gap: 1rem;
    align-items: center;

    border: none;

    font-size: 2.4rem;
`;