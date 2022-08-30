import { Button, Chip, makeStyles } from "@material-ui/core";
import React from "react";
import { useFeedback } from "./index";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2)
  }
}));

function FeedbackDemo() {
  const { showSuccess, showError, showInfo } = useFeedback();
  const classes = useStyles();
  const props = {
    variant: "outlined",
    className: classes.button,
    color: "primary"
  };

  const apiError = {
    message: "Este é o formato de erro esperado da API",
    errors: [{ message: "Detalhe 1" }, { defaultMessage: "Detalhe 2" }]
  };

  return (
    <>
      <Button {...props} onClick={() => showSuccess("Mensagem de sucesso")}>
        Sucesso
      </Button>
      <Button
        {...props}
        onClick={() =>
          showSuccess("Esconde em 1 segundo", { autoHideDuration: 1000 })
        }
      >
        Com options
      </Button>
      <Button {...props} onClick={() => showSuccess(<Chip label="Elemento" />)}>
        Element
      </Button>
      <Button
        {...props}
        onClick={() =>
          showSuccess({ title: "Este é o título", body: "Este é o corpo" })
        }
      >
        Sucesso com título
      </Button>
      <Button
        {...props}
        onClick={() =>
          showSuccess({
            title: "Este é o título",
            bodyList: ["Mensagem 1", "Mensagem 2"]
          })
        }
      >
        Sucesso com lista
      </Button>
      <Button {...props} onClick={() => showError("Mensagem de erro!")}>
        Erro
      </Button>
      <Button
        {...props}
        onClick={() =>
          showError({ title: "Este é o título", body: "Este é o corpo" })
        }
      >
        Erro com título
      </Button>
      <Button
        {...props}
        onClick={() =>
          showError({
            bodyList: ["Mensagem 1", "Mensagem 2"]
          })
        }
      >
        Erro com lista
      </Button>
      <Button {...props} onClick={() => showError(apiError)}>
        Api Error
      </Button>
      <Button {...props} onClick={() => showInfo("Informações")}>
        Info
      </Button>
    </>
  );
}

export default FeedbackDemo;
