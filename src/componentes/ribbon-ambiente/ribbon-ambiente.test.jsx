import React from "react";
import { render, screen } from "@testing-library/react";

import { RibbonAmbiente } from "./index";

describe("Testes do Ribbon de Ambiente", () => {
  test("Renderiza o Ribbon para Ambiente diferente de producao", () => {
    render(<RibbonAmbiente ambiente="homologacao" />);

    const ribbon = screen.getByText("HOMOLOGACAO");

    expect(ribbon).toBeInTheDocument();
  });

  test("Não Renderiza o Ribbon para Ambiente diferente producao", () => {
    render(<RibbonAmbiente ambiente="producao" />);

    const ribbon = screen.queryByText("PRODUCAO");

    expect(ribbon).not.toBeInTheDocument();
  });

  test("Renderiza o Ribbon como DESENVOLVIMENTO quando ambiente for string vazia", () => {
    render(<RibbonAmbiente ambiente="" />);

    const ribbon = screen.queryByText("DESENVOLVIMENTO");

    expect(ribbon).toBeInTheDocument();
  });
});
