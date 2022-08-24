import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { matchers } from "@emotion/jest";

import { ProvedorTemaTST } from "./index";

expect.extend(matchers);

describe("Testes do Provedor de Tema do TST", () => {
  test("Renderiza componentes com o Tema injetado pelo Provedor ", () => {
    render(
      <ProvedorTemaTST>
        <Button color="error">Erro</Button>
      </ProvedorTemaTST>
    );

    const botao = screen.getByText("Erro");

    expect(botao).toBeInTheDocument();
    expect(botao).toHaveStyleRule("color", "#ff1744");
  });

  test("Renderiza textos com os tipos setados pelo Provedor", () => {
    render(
      <ProvedorTemaTST>
        <Typography variant="h1">Cabeçalho</Typography>
      </ProvedorTemaTST>
    );

    const cabecalho = screen.getByText("Cabeçalho");

    expect(cabecalho).toBeInTheDocument();
    expect(cabecalho).toHaveStyleRule("font-weight", "300");
    expect(cabecalho).toHaveStyleRule("font-size", "6rem");
    expect(cabecalho).toHaveStyleRule(
      "font-family",
      "Aller,Roboto,Helvetica,Arial,sans-serif"
    );
  });

  test("Renderiza componentes com o Tema injetado pelo Provedor para ambiente de não produção ", () => {
    render(
      <ProvedorTemaTST producao={false}>
        <Button>Normal</Button>
      </ProvedorTemaTST>
    );

    const botao = screen.getByText("Normal");

    expect(botao).toBeInTheDocument();
    expect(botao).toHaveStyleRule("color", "#827717");
  });

  test("Renderiza componentes com o Tema injetado pelo Provedor para ambiente de produção ", () => {
    render(
      <ProvedorTemaTST producao={true}>
        <Button>Normal</Button>
      </ProvedorTemaTST>
    );

    const botao = screen.getByText("Normal");

    expect(botao).toBeInTheDocument();
    expect(botao).toHaveStyleRule("color", "#0067A0");
  });
});
