import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { matchers } from "@emotion/jest";

import { temaTSTNaoProducao } from "./index";

expect.extend(matchers);

describe("Testes do Tema do TST", () => {
  test("Renderiza componentes com o Tema", () => {
    render(
      <ThemeProvider theme={temaTSTNaoProducao}>
        <Button color="error">Erro</Button>
      </ThemeProvider>
    );

    const botao = screen.getByText("Erro");

    expect(botao).toBeInTheDocument();
    expect(botao).toHaveStyleRule("color", "#ff1744");
  });

  test("Renderiza botão MUI com cor primária e secundária", () => {
    render(
      <ThemeProvider theme={temaTSTNaoProducao}>
        <Button>Primária</Button>
        <Button color="secondary">Secundária</Button>
      </ThemeProvider>
    );

    const primario = screen.getByText("Primária");
    const secundario = screen.getByText("Secundária");

    expect(primario).toBeInTheDocument();
    expect(primario).toHaveStyleRule("color", "#827717");
    expect(secundario).toBeInTheDocument();
    expect(secundario).toHaveStyleRule("color", "#19857b");
  });
});
