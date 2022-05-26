import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LogoBicolor from './logo-bicolor';

describe('Logo Bicolor', () => {

  test('Renderiza o Logo com sucesso', () => {
  
    render(<LogoBicolor />);
  
    const svgElement = screen.getByRole('img', {hidden: true});
  
    expect(svgElement).toBeInTheDocument();
  
  });

});
