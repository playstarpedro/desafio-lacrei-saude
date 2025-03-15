import Image from "next/image";

import { Header as StyledHeader } from "./styles";

import logoMobile from "../../assets/images/logo_lacrei_mobile.png";
import logoDesktop from "../../assets/images/logo_lacrei_desktop.png";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <a href="https://lacreisaude.com.br/">
        <Image
          src={logoDesktop}
          alt="logo lacrei saúde"
          className="logo-lacrei-desktop"
        />
        <Image
          width={134}
          src={logoMobile}
          alt="logo lacrei saúde"
          className="logo-lacrei-mobile"
        />
      </a>
    </StyledHeader>
  );
};

export default Header;
