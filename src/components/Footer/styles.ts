import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Footer = styled.footer`
    gap: 2rem;
    width: 100%;
    height: 10rem;
    display: flex;
    color: "white";
    display: flex;
    align-items: center;
    align-items: center;
    padding: 0px 7.625rem;
    justify-content: space-between;
    background-color: ${theme.colors.greenAccent};

    @media screen and (max-width:1024px) {
        gap: 2rem;
        height: auto;
        flex-direction: column;
        padding: 1.5rem 2.4rem;
    }
`

export const FooterText = styled.p`
    padding: 0;
    color: #fff;
    
    a {
        color: #fff;
    }

    @media screen and (max-width:767px) {
        font-size: 0.75rem;
    }
`

export const FooterTextContainer = styled.div`
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
`

export const FooterLinksContainer = styled.div`
    display: block;
    align-items: center;

    .logo-lacrei {
        margin-bottom: 0.5rem;
    }
`

export const FooterNav = styled.div`
    gap: 0.5rem;
    display: flex;
    height: 1.5rem;
    filter: invert(1);
    justify-content: space-between;

    img {
        color: red;
        max-width: 1.2rem;
        max-height: 1.5rem;
    }
`