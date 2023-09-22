import styled from "styled-components";

export const Container = styled.span`
    padding: 4px 8px;
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

`;