import styled from "styled-components";

import { theme } from "../../styles/theme";

interface ButtonProps {
    typeStyle?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 0.625rem 2rem;
    font-weight: 700;
    height: 3rem;
    font-size: 1.125rem;
    box-shadow: ${({ typeStyle }) =>
        typeStyle === "primary" ? "0rem 0.3125rem 0.625rem 0rem #0000004D" : "none"};

    background-color: ${({ typeStyle }) =>
        typeStyle === "primary" ? theme.colors.greenAccent : theme.colors.whiteBackground};
    
    color: ${({ typeStyle }) =>
        typeStyle === "primary" ? theme.colors.whiteBackground : theme.colors.greenAccent};
    
    border: ${({ typeStyle }) =>
        typeStyle === "primary" ? 'none' : `2px solid ${theme.colors.greenAccent}`};

    &:hover {
        background-color: ${({ typeStyle }) =>
        typeStyle === "primary" ? theme.colors.greenHover : theme.colors.lightGreenHover};
    }
`;
