import React from 'react';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import {
  Logo,
  LogoBicolor
} from './index';

describe('Teste dos Logos', () => {


  test('Renderiza Logo principal', () => {

    const {container} = render(<Logo />);

    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
  });

  test('Renderiza Logo Bicolor principal', () => {
    const {container} = render(<LogoBicolor role='img'/>);

    expect(container.firstChild).toHaveStyle("width: 33")

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

});