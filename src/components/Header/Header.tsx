import { Header as StyledHeader } from "./styles";
import Image from "next/image";

import logoMobile from "../../assets/images/logo_lacrei_mobile.png";
import logoDesktop from "../../assets/images/logo_lacrei_desktop.png";

// TODO: Fix png's to svg's

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <a href="https://lacreisaude.com.br/">
        <Image
          src={logoDesktop}
          className="logo-lacrei-desktop"
          alt="logo lacrei saúde"
        />
        <Image
          src={logoMobile}
          className="logo-lacrei-mobile"
          alt="logo lacrei saúde"
        />
      </a>
    </StyledHeader>
  );
};

export default Header;
