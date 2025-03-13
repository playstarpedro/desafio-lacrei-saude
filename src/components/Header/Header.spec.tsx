import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from './Header';

console.log(Header);

describe('Header Component', () => {
    it('should render without crashing', () => {
      render(<Header />);
      expect(screen.getByText('Header')).toBeTruthy();
    });
});
