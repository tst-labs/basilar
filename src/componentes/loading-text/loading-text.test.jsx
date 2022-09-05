import React from "react";
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";

import { LoadingText } from "./index";

expect.extend(matchers);

describe("Testes do componente Loading-Text", () => {
  test("Renderiza Loading-Text", () => {
    render(<LoadingText>Este é um texto de exemplo</LoadingText>);

    const loadingText = screen.getByText("Este é um texto de exemplo");

    expect(loadingText).toBeInTheDocument();
    //expect(loadingText).toHaveStyleRule("background-color", "#e0e0e0");
  });
});
