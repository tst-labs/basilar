import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, Chip } from "@mui/material";
import { SnackbarProvider } from "notistack";

import { useFeedback } from "./index";

describe("Testes do useFeedback", () => {
  test("Deve exibir o feedback de sucesso", () => {
    const MostraMensagemSimples = () => {
      const { showSuccess } = useFeedback();
      return (
        <Button onClick={() => showSuccess("Mensagem de Sucesso")}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <MostraMensagemSimples />
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
    const MostraMensagemInfo = () => {
      const { showInfo } = useFeedback();
      return (
        <Button onClick={() => showInfo("Mensagem Informativa")}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <MostraMensagemInfo />
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
    const MostraMensagemErro = () => {
      const { showError } = useFeedback();
      return (
        <Button onClick={() => showError("Mensagem de Erro")}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <MostraMensagemErro />
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
    const MostraMensagemAlerta = () => {
      const { showWarning } = useFeedback();
      return (
        <Button onClick={() => showWarning("Mensagem de alerta")}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <MostraMensagemAlerta />
      </SnackbarProvider>
    );

    act(() => {
      userEvent.click(screen.getByText("Mostra Mensagem"));
    });

    const feedback = screen.queryByText("Mensagem de alerta");
    expect(feedback).toBeInTheDocument();
    expect(feedback).toBeVisible();
  });

  test("Deve exibir o feedback de sucesso com elemento interno", () => {
    const MostraMensagemSimples = () => {
      const { showSuccess } = useFeedback();
      return (
        <Button onClick={() => showSuccess(<Chip label="Elemento" />)}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <MostraMensagemSimples />
      </SnackbarProvider>
    );

    act(() => {
      userEvent.click(screen.getByText("Mostra Mensagem"));
    });

    const feedback = screen.queryByText("Elemento");
    expect(feedback).toBeInTheDocument();
    expect(feedback).toBeVisible();
  });

  test("Deve exibir o feedback de sucesso com título e corpo", () => {
    const MostraMensagemSimples = () => {
      const { showSuccess } = useFeedback();
      return (
        <Button onClick={() => showSuccess({ title: "titulo", body: "corpo" })}>
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <MostraMensagemSimples />
      </SnackbarProvider>
    );

    act(() => {
      userEvent.click(screen.getByText("Mostra Mensagem"));
    });

    const titulo = screen.queryByText("titulo");
    expect(titulo).toBeInTheDocument();
    expect(titulo).toBeVisible();

    const corpo = screen.queryByText("corpo");
    expect(corpo).toBeInTheDocument();
    expect(corpo).toBeVisible();
  });

  test("Deve exibir o feedback de sucesso com lista", () => {
    const MostraMensagemSimples = () => {
      const { showSuccess } = useFeedback();
      return (
        <Button
          onClick={() =>
            showSuccess({
              title: "titulo",
              bodyList: ["Mensagem 1", "Mensagem 2"]
            })
          }
        >
          Mostra Mensagem
        </Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <MostraMensagemSimples />
      </SnackbarProvider>
    );

    act(() => {
      userEvent.click(screen.getByText("Mostra Mensagem"));
    });

    const titulo = screen.queryByText("titulo");
    expect(titulo).toBeInTheDocument();
    expect(titulo).toBeVisible();

    const mensagem1 = screen.queryByText("Mensagem 1");
    expect(mensagem1).toBeInTheDocument();
    expect(mensagem1).toBeVisible();

    const mensagem2 = screen.queryByText("Mensagem 2");
    expect(mensagem2).toBeInTheDocument();
    expect(mensagem2).toBeVisible();
  });

  test("Deve exibir o feedback de erro de api", () => {
    const MostraMensagemSimples = () => {
      const { showError } = useFeedback();
      const apiError = {
        message: "Este é o formato de erro esperado da API",
        errors: [{ message: "Detalhe 1" }, { defaultMessage: "Detalhe 2" }]
      };
      return (
        <Button onClick={() => showError(apiError)}>Mostra Mensagem</Button>
      );
    };

    render(
      <SnackbarProvider maxSnack={1}>
        <MostraMensagemSimples />
      </SnackbarProvider>
    );

    act(() => {
      userEvent.click(screen.getByText("Mostra Mensagem"));
    });

    const titulo = screen.queryByText(
      "Este é o formato de erro esperado da API"
    );
    expect(titulo).toBeInTheDocument();
    expect(titulo).toBeVisible();

    const mensagem = screen.queryByText("Detalhe 1");
    expect(mensagem).toBeInTheDocument();
    expect(mensagem).toBeVisible();

    const mensagem2 = screen.queryByText("Detalhe 2");
    expect(mensagem2).toBeInTheDocument();
    expect(mensagem2).toBeVisible();
  });
});
