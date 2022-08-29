import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
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

  /**
   * Os testes passam, mas esse warning aparece no console
   * Warning: Functions are not valid as a React child.
   * This may happen if you return a Component instead of <Component />
   * from render. Or maybe you meant to call this function rather than
   * return it.
   */
  test("Deve Exibir o loading provider", () => {
    const Componente = () => {
      const setLoading = useLoading(false);
      setLoading(true);
      return <></>;
    };

    render(() => {
      <LoadingProvider>
        <Componente />
      </LoadingProvider>;
    });

    const progress = screen.findByTestId("loader");

    waitFor(() => expect(progress).toBeInTheDocument());
    waitFor(() => expect(progress).toBeVisible());
  });
});
