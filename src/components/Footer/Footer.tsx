import Image from "next/image";

import {
  FooterNav,
  FooterText,
  FooterTextContainer,
  FooterLinksContainer,
  Footer as StyledFooter,
} from "./styles";

import emailIcon from "../../assets/icons/google.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import footerLogo from "../../assets/images/white-logo.png";
import instagramIcon from "../../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTextContainer>
        <FooterText>
          A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de
          emergência procure o hospital mais próximo.
        </FooterText>
        <FooterText className="psychological-help">
          Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site{" "}
          <a href="https://www.cvv.org.br">www.cvv.org.br</a>
        </FooterText>
        <FooterText className="copy-right-text">
          Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ:
          51.265.351/0001-65
        </FooterText>
      </FooterTextContainer>
      <FooterLinksContainer>
        <Image
          width={170}
          src={footerLogo}
          className="logo-lacrei"
          alt="logo lacrei saúde"
        />
        <FooterNav>
          <a href="https://www.facebook.com/lacrei.saude/" target="_blank">
            <Image src={facebookIcon} alt="facebook icon" />
          </a>
          <a href="https://www.instagram.com/lacrei.saude" target="_blank">
            <Image src={instagramIcon} alt="instagram icon" />
          </a>
          <a href="https://www.linkedin.com/company/lacrei" target="_blank">
            <Image src={linkedinIcon} alt="linkedIn icon" />
          </a>
          <a href="mailto:contato@lacreisaude.com.br">
            <Image src={emailIcon} alt="email icon" />
          </a>
        </FooterNav>
      </FooterLinksContainer>
    </StyledFooter>
  );
};

export default Footer;
