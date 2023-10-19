import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;


    gap: .8rem;
    padding: .8rem;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_600}` : "none"};
    border-radius: .8rem;

    > input {
        width: 8.6rem;
        background: transparent;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}

        padding: 0;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;