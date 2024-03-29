import React from "react";
import { Button, Chip } from "@mui/material";
import { useFeedback } from "./index";
import { SnackbarProvider } from "notistack";
import { ProvedorTemaTST } from "../index";

export default {
  title: "Basilar/Componentes/UseFeedback",
  component: useFeedback
};

export const Mostra_Sucesso = () => {
  function Componente() {
    const { showSuccess } = useFeedback();
    const props = {
      variant: "outlined",
      color: "primary"
    };

    return (
      <Button {...props} onClick={() => showSuccess("Mensagem de Sucesso")}>
        Mostra Sucesso
      </Button>
    );
  }

  return (
    <ProvedorTemaTST>
      <SnackbarProvider maxSnack={1}>
        <Componente />
      </SnackbarProvider>
    </ProvedorTemaTST>
  );
};

export const Esconde_Em_1_Segundo = () => {
  function Componente() {
    const { showSuccess } = useFeedback();
    const props = {
      variant: "outlined",
      color: "primary"
    };

    return (
      <Button
        {...props}
        onClick={() =>
          showSuccess("Mensagem de Sucesso", { autoHideDuration: 1000 })
        }
      >
        Mostra Sucesso
      </Button>
    );
  }

  return (
    <ProvedorTemaTST>
      <SnackbarProvider maxSnack={1}>
        <Componente />
      </SnackbarProvider>
    </ProvedorTemaTST>
  );
};

export const Com_Elemento = () => {
  function Componente() {
    const { showSuccess } = useFeedback();
    const props = {
      variant: "outlined",
      color: "primary"
    };

    return (
      <Button {...props} onClick={() => showSuccess(<Chip label="Elemento" />)}>
        Mostra Sucesso com Elemento
      </Button>
    );
  }

  return (
    <ProvedorTemaTST>
      <SnackbarProvider maxSnack={1}>
        <Componente />
      </SnackbarProvider>
    </ProvedorTemaTST>
  );
};

export const Com_Titulo = () => {
  function Componente() {
    const { showSuccess } = useFeedback();
    const props = {
      variant: "outlined",
      color: "primary"
    };

    return (
      <Button
        {...props}
        onClick={() =>
          showSuccess({ title: "Este é o título", body: "Este é o corpo" })
        }
      >
        Mostra Sucesso com título e corpo
      </Button>
    );
  }

  return (
    <ProvedorTemaTST>
      <SnackbarProvider maxSnack={1}>
        <Componente />
      </SnackbarProvider>
    </ProvedorTemaTST>
  );
};

export const Com_Lista = () => {
  function Componente() {
    const { showSuccess } = useFeedback();
    const props = {
      variant: "outlined",
      color: "primary"
    };

    return (
      <Button
        {...props}
        onClick={() =>
          showSuccess({
            title: "Este é o título",
            bodyList: [
              "Esta é uma mensagem de teste com texto grande. Pode ser um texto bem grande para ver como fica na tela.",
              "Mensagem 2"
            ]
          })
        }
      >
        Mostra Sucesso com Lista
      </Button>
    );
  }

  return (
    <ProvedorTemaTST>
      <SnackbarProvider maxSnack={1}>
        <Componente />
      </SnackbarProvider>
    </ProvedorTemaTST>
  );
};

export const Mostra_Erro = () => {
  function Componente() {
    const { showError } = useFeedback();
    const props = {
      variant: "outlined",
      color: "primary"
    };

    return (
      <Button {...props} onClick={() => showError("Mensagem de erro!")}>
        Mostra Erro
      </Button>
    );
  }

  return (
    <ProvedorTemaTST>
      <SnackbarProvider maxSnack={1}>
        <Componente />
      </SnackbarProvider>
    </ProvedorTemaTST>
  );
};

export const Mostra_Erro_API = () => {
  function Componente() {
    const { showError } = useFeedback();
    const props = {
      variant: "outlined",
      color: "primary"
    };

    const apiError = {
      message: "Este é o formato de erro esperado da API",
      errors: [{ message: "Detalhe 1" }, { defaultMessage: "Detalhe 2" }]
    };

    return (
      <Button {...props} onClick={() => showError(apiError)}>
        Mostra Erro de API
      </Button>
    );
  }

  return (
    <ProvedorTemaTST>
      <SnackbarProvider maxSnack={1}>
        <Componente />
      </SnackbarProvider>
    </ProvedorTemaTST>
  );
};

export const Mostra_Info = () => {
  function Componente() {
    const { showInfo } = useFeedback();
    const props = {
      variant: "outlined",
      color: "primary"
    };

    return (
      <Button {...props} onClick={() => showInfo("Informações")}>
        Mostra Informações
      </Button>
    );
  }

  return (
    <ProvedorTemaTST>
      <SnackbarProvider maxSnack={1}>
        <Componente />
      </SnackbarProvider>
    </ProvedorTemaTST>
  );
};

export const Mostra_Alerta = () => {
  function Componente() {
    const { showWarning } = useFeedback();
    const props = {
      variant: "outlined",
      color: "primary"
    };

    return (
      <Button {...props} onClick={() => showWarning("Atenção")}>
        Mostra Alerta
      </Button>
    );
  }

  return (
    <ProvedorTemaTST>
      <SnackbarProvider maxSnack={1}>
        <Componente />
      </SnackbarProvider>
    </ProvedorTemaTST>
  );
};
