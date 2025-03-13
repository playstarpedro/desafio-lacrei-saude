import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Header from './Header';

console.log(Header);

describe('Header Component', () => {
    it('should render', () => {
      const { container } = render(<Header />);
      expect(container).toBeTruthy();
    });

    it('display a logo', () => {
      const { container } = render(<Header />);
      expect(container.querySelectorAll('image[alt="logo-lacrei-desktop"]')).toBeTruthy();
      expect(container.querySelectorAll('image[alt="logo-lacrei-mobile"]')).toBeTruthy();
    });

    it('should have a link to lacrei website', () => {
      const { container } = render(<Header />);
      expect(container.querySelector('a[href="https://lacreisaude.com.br/"]')).toBeTruthy();
    });
});
