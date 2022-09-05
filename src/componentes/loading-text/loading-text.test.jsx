import React from "react";
import { render, screen } from "@testing-library/react";

import { LoadingText } from "./index";

describe("Testes do componente Loading-Text", () => {
  test("Renderiza Loading-Text", () => {
    render(<LoadingText>Este é um texto de exemplo</LoadingText>);

    const loadingText = screen.getByText("Este é um texto de exemplo");

    expect(loadingText).toBeInTheDocument();
  });
});
