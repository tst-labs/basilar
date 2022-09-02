import React from "react";
import { act, render, screen } from "@testing-library/react";
import Button from "@mui/material/Button";
import { LoadingProvider, useLoading } from "./index";

describe("Testes do Loading Provider", () => {
  test("Não deve exibir o loading provider", () => {
    render(<LoadingProvider></LoadingProvider>);

    const progress = screen.queryByTestId("loader");

    expect(progress).toBeInTheDocument();
    expect(progress).not.toBeVisible();
  });

  test("Deve exibir os filhos de loading provider", () => {
    render(
      <LoadingProvider>
        <Button>Filho</Button>
      </LoadingProvider>
    );

    const ComponenteFilho = screen.queryByText("Filho");

    expect(ComponenteFilho).toBeInTheDocument();
    expect(ComponenteFilho).toBeVisible();
  });

  test("Deve Exibir o loading provider", () => {
    const ComponenteFilho = () => {
      const setLoading = useLoading(false);
      return <button onClick={() => setLoading(true)}>Filho</button>;
    };

    render(
      <LoadingProvider>
        <ComponenteFilho />
      </LoadingProvider>
    );

    const progress = screen.queryByTestId("loader");
    const botao = screen.queryByText("Filho");
    act(() => {
      botao.click();
    });

    expect(progress).toBeInTheDocument();
    expect(progress).toBeVisible();
  });
});
