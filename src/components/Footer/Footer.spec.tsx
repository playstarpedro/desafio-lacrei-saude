import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Header Component", () => {
  it("should render", () => {
    const { container } = render(<Footer />);
    expect(container).toBeTruthy();
  });

  it("should have a logo", () => {
    const { container } = render(<Footer />);
    expect(
      container.querySelector('img[alt="logo lacrei saúde"]')
    ).toBeTruthy();
    expect(
      container.querySelector('.logo-lacrei')
    ).toBeTruthy();
  });

  it("should have copy right information", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector(".copy-right-text")).toBeTruthy();
  });

  it("should have links to social networks", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector(".logo-lacrei")).toBeTruthy();
    expect(container.querySelector("a[href='mailto:contato@lacreisaude.com.br']")).toBeTruthy();
    expect(container.querySelector("a[href='https://www.facebook.com/lacrei.saude/']")).toBeTruthy();
    expect(container.querySelector("a[href='https://www.instagram.com/lacrei.saude']")).toBeTruthy();
    expect(container.querySelector("a[href='https://www.linkedin.com/company/lacrei']")).toBeTruthy();
  });

  it("should have information for contact CVV(118)", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector(".psychological-help")).toBeTruthy();
  });
});
