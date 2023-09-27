import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    display: flex;
    gap: 1rem;

    border: none;
`;