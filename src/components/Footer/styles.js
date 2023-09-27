import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    
    width: 100%;
    
    display: flex;
    align-items: center;
    gap: 0.8rem;

    justify-content: space-around;
    padding: 2.2rem 2.7rem;

    background-color: ${({theme}) => theme.COLORS.DARK_600};
    
    p {
        color: ${({theme}) => theme.COLORS.LIGHT_200};
        text-align: right;

        font-size: 1.2rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 14rem;

    gap: 0.8rem;

    h2 {
        color: ${({theme}) => theme.COLORS.LIGHT_700};
        font-size: 1.6rem;
    }
`