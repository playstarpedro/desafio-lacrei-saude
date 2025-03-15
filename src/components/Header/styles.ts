import styled from "styled-components"

import { theme } from "../../styles/theme";

export const Header = styled.header`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    padding: 0px 7.625rem;
    color: ${theme.colors.greenAccent};
    background: ${theme.colors.gradientHeader};

    img {
        max-width: 100%;
    };

     .logo-lacrei-mobile {
        display: none;
     };

     @media screen and (max-width: 767px) { 
        padding: 1.5rem 2.4rem;

        .logo-lacrei-desktop {
            display: none;
        }

        .logo-lacrei-mobile {
        display: block;
     };
     }
`