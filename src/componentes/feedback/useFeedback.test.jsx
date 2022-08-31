import React from "react";
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "@mui/material/Button";
import { SnackbarProvider } from "notistack";

import { useFeedback } from "./index";

describe("Testes do useFeedback", () => {
  test("Deve exibir o feedback de sucesso", () => {
    const ComponenteFilho = () => {
      const { showSuccess } = useFeedback();
      return (
        <Button onClick={() => showSuccess("Mensagem de Sucesso")}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <ComponenteFilho />
      </SnackbarProvider>
    );

    act(() => {
      userEvent.click(screen.getByText("Mostra Mensagem"));
    });

    const feedback = screen.queryByText("Mensagem de Sucesso");
    expect(feedback).toBeInTheDocument();
    expect(feedback).toBeVisible();
  });

  test("Deve exibir o feedback de info", () => {
    const ComponenteFilho = () => {
      const { showInfo } = useFeedback();
      return (
        <Button onClick={() => showInfo("Mensagem Informativa")}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <ComponenteFilho />
      </SnackbarProvider>
    );

    act(() => {
      userEvent.click(screen.getByText("Mostra Mensagem"));
    });

    const feedback = screen.queryByText("Mensagem Informativa");
    expect(feedback).toBeInTheDocument();
    expect(feedback).toBeVisible();
  });

  test("Deve exibir o feedback de erro", () => {
    const ComponenteFilho = () => {
      const { showError } = useFeedback();
      return (
        <Button onClick={() => showError("Mensagem de Erro")}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <ComponenteFilho />
      </SnackbarProvider>
    );

    act(() => {
      userEvent.click(screen.getByText("Mostra Mensagem"));
    });

    const feedback = screen.queryByText("Mensagem de Erro");
    expect(feedback).toBeInTheDocument();
    expect(feedback).toBeVisible();
  });

  test("Deve exibir o feedback de alerta", () => {
    const ComponenteFilho = () => {
      const { showWarning } = useFeedback();
      return (
        <Button onClick={() => showWarning("Mensagem de alerta")}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <ComponenteFilho />
      </SnackbarProvider>
    );

    act(() => {
      userEvent.click(screen.getByText("Mostra Mensagem"));
    });

    const feedback = screen.queryByText("Mensagem de alerta");
    expect(feedback).toBeInTheDocument();
    expect(feedback).toBeVisible();
  });
});
