import React from 'react';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import {
  Logo,
  LogoBicolor,
  LogoMonoAzul,
  LogoMonoBranco,
  LogoMonoPreto,
  LogoSimplificado,
  LogoTST,
  LogoTSTBicolor,
  LogoTSTMonoAzul,
  LogoTSTMonoBranco,
  LogoTSTMonoPreto,
  LogoTSTSimplificado,
  LogoTSTVertical,
  LogoJTTST,
  LogoJTTSTBicolor,
  LogoJTTSTMonoAzul,
  LogoJTTSTMonoBranco,
  LogoJTTSTMonoPreto,
  LogoJTTSTSimplificado,
  LogoJTTST2,
  LogoJTTST2Bicolor,
  LogoJTTST2MonoAzul,
  LogoJTTST2MonoBranco,
  LogoJTTST2MonoPreto,
  LogoJTTST2Simplificado,
  LogoTSTExt,
  LogoTSTBicolorExt,
  LogoTSTMonoAzulExt,
  LogoTSTMonoBrancoExt,
  LogoTSTMonoPretoExt,
  LogoTSTSimplificadoExt
} from './index';

describe('Teste dos Logos', () => {


  test('Renderiza Logos principais - 6 Logos', () => {
    const {container} = render(
      <>
        <Logo data-testid="logo"/>
        <LogoBicolor data-testid="logo-bicolor"/>
        <LogoMonoAzul data-testid="logo-mono-azul"/>
        <LogoMonoBranco data-testid="logo-mono-branco"/>
        <LogoMonoPreto data-testid="logo-mono-preto"/>
        <LogoSimplificado data-testid="logo-simplificado"/>
      </>
    );

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('logo-bicolor')).toBeInTheDocument();
    expect(screen.getByTestId('logo-mono-azul')).toBeInTheDocument();
    expect(screen.getByTestId('logo-mono-branco')).toBeInTheDocument();
    expect(screen.getByTestId('logo-mono-preto')).toBeInTheDocument();
    expect(screen.getByTestId('logo-simplificado')).toBeInTheDocument();
  });

  test('Renderiza Logos TST - 7 Logos', () => {
    const {container} = render(
      <>
        <LogoTST data-testid="logo-tst"/>
        <LogoTSTBicolor data-testid="logo-tst-bicolor"/>
        <LogoTSTMonoAzul data-testid="logo-tst-mono-azul"/>
        <LogoTSTMonoBranco data-testid="logo-tst-mono-branco"/>
        <LogoTSTMonoPreto data-testid="logo-tst-mono-preto"/>
        <LogoTSTSimplificado data-testid="logo-tst-simplificado"/>
        <LogoTSTVertical data-testid="logo-tst-vertical"/>
      </>
    );

    expect(screen.getByTestId('logo-tst')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-bicolor')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-mono-azul')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-mono-branco')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-mono-preto')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-simplificado')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-vertical')).toBeInTheDocument();
  });

  test('Renderiza Logos JT/TST - 6 Logos', () => {
    const {container} = render(
      <>
        <LogoJTTST data-testid="logo-jt-tst"/>
        <LogoJTTSTBicolor data-testid="logo-jt-tst-bicolor"/>
        <LogoJTTSTMonoAzul data-testid="logo-jt-tst-mono-azul"/>
        <LogoJTTSTMonoBranco data-testid="logo-jt-tst-mono-branco"/>
        <LogoJTTSTMonoPreto data-testid="logo-jt-tst-mono-preto"/>
        <LogoJTTSTSimplificado data-testid="logo-jt-tst-simplificado"/>
      </>
    );

    expect(screen.getByTestId('logo-jt-tst')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst-bicolor')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst-mono-azul')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst-mono-branco')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst-mono-preto')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst-simplificado')).toBeInTheDocument();
  });

  test('Renderiza Logos JT/TST (2x) - 6 Logos', () => {
    const {container} = render(
      <>
        <LogoJTTST2 data-testid="logo-jt-tst2"/>
        <LogoJTTST2Bicolor data-testid="logo-jt-tst2-bicolor"/>
        <LogoJTTST2MonoAzul data-testid="logo-jt-tst2-mono-azul"/>
        <LogoJTTST2MonoBranco data-testid="logo-jt-tst2-mono-branco"/>
        <LogoJTTST2MonoPreto data-testid="logo-jt-tst2-mono-preto"/>
        <LogoJTTST2Simplificado data-testid="logo-jt-tst2-simplificado"/>
      </>
    );

    expect(screen.getByTestId('logo-jt-tst2')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst2-bicolor')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst2-mono-azul')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst2-mono-branco')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst2-mono-preto')).toBeInTheDocument();
    expect(screen.getByTestId('logo-jt-tst2-simplificado')).toBeInTheDocument();
  });

  test('Renderiza Logos TST (extenso) - 6 Logos', () => {
    const {container} = render(
      <>
        <LogoTSTExt data-testid="logo-tst-ext"/>
        <LogoTSTBicolorExt data-testid="logo-tst-bicolor-ext"/>
        <LogoTSTMonoAzulExt data-testid="logo-tst-mono-azul-ext"/>
        <LogoTSTMonoBrancoExt data-testid="logo-tst-mono-branco-ext"/>
        <LogoTSTMonoPretoExt data-testid="logo-tst-mono-preto-ext"/>
        <LogoTSTSimplificadoExt data-testid="logo-tst-simplificado-ext"/>
      </>
    );

    expect(screen.getByTestId('logo-tst-ext')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-bicolor-ext')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-mono-azul-ext')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-mono-branco-ext')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-mono-preto-ext')).toBeInTheDocument();
    expect(screen.getByTestId('logo-tst-simplificado-ext')).toBeInTheDocument();
  });


});