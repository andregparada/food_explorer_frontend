import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    gap: 8px;

    justify-content: space-around;
    padding: 22px 27px;


    background-color: ${({theme}) => theme.COLORS.DARK_600};

    p {
        color: ${({theme}) => theme.COLORS.LIGHT_200};
        text-align: right;

        font-size: 12px;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 140px;

    gap: 8px;

    h2 {
        color: ${({theme}) => theme.COLORS.LIGHT_700};
        font-size: 16px;
    }
`