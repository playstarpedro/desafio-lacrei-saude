import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header Component', () => {
    it('should render', () => {
      const { container } = render(<Header />);
      expect(container).toBeTruthy();
    });

    it('display a logo', () => {
      const { container } = render(<Header />);
      expect(container.querySelector('.logo-lacrei-mobile')).toBeTruthy();
      expect(container.querySelector('.logo-lacrei-desktop')).toBeTruthy();
      expect(container.querySelector('img[alt="logo lacrei saúde"]')).toBeTruthy();
    });

    it('should have a link to lacrei website', () => {
      const { container } = render(<Header />);
      expect(container.querySelector('a[href="https://lacreisaude.com.br/"]')).toBeTruthy();
    });
});
