import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import { useSnackbar } from "notistack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

/**
 * @typedef MessageObject
 * @property {string} title Título da mensagem (opcional)
 * @property {string} body Corpo da mensagem (opcional)
 * @property {array} bodyList Uma lista de mensagens que será exibida como tópicos (opcional)
 */

const listStyle = {
  m: 0,
  p: 0
};

const listItemStyle = {
  mb: 0,
  p: 0
};

export default function useFeedback() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function content(key, message = "", severity) {
    const body =
      typeof message === "string" || message.type ? message : message.body;
    const title = message.title;
    const bodyList = message.bodyList;

    return (
      <Alert
        variant="filled"
        elevation={6}
        onClose={() => closeSnackbar(key)}
        severity={severity}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {body}
        {bodyList && bodyList.length && (
          <List sx={listStyle}>
            {bodyList.map((item, index) => (
              <ListItem key={index} sx={listItemStyle}>
                {item}
              </ListItem>
            ))}
          </List>
        )}
      </Alert>
    );
  }

  const anchorOrigin = { horizontal: "center", vertical: "bottom" };

  /**
   * Exibe uma mensagem de sucesso que se apaga automaticamente após alguns segundos.
   * A mensagem pode ser uma string, um objeto no formato {title: "", body: "", bodyList:[""]}
   * ou um JSX
   *
   * @param {string | MessageObject } message Mensagem que será exibida
   * @param { object } options Opções passadas para o "notistack"
   */
  function showSuccess(message, options = {}) {
    enqueueSnackbar(message, {
      ...options,
      preventDuplicate: true,
      anchorOrigin,
      content: (key) => content(key, message, "success")
    });
  }

  /**
   * Exibe uma mensagem de informação que se apaga automaticamente após alguns segundos.
   * A mensagem pode ser uma string, um objeto no formato {title: "", body: "", bodyList:[""]}
   * ou um JSX
   *
   * @param {string | MessageObject } message Mensagem que será exibida
   * @param { object } options Opções passadas para o "notistack"
   */
  function showInfo(message, options = {}) {
    enqueueSnackbar(message, {
      ...options,
      preventDuplicate: true,
      anchorOrigin,
      content: (key) => content(key, message, "info")
    });
  }

  /**
   * Exibe uma mensagem de aviso que se apaga automaticamente após alguns segundos.
   * A mensagem pode ser uma string, um objeto no formato {title: "", body: "", bodyList:[""]}
   * ou um JSX
   *
   * @param {string | MessageObject } message Mensagem que será exibida
   * @param { object } options Opções passadas para o "notistack"
   */
  function showWarning(message, options = {}) {
    enqueueSnackbar(message, {
      ...options,
      preventDuplicate: true,
      anchorOrigin,
      content: (key) => content(key, message, "warning")
    });
  }

  /**
   * Exibe uma mensagem de erro que permanece na tela até uma interação do usuário.
   * A mensagem pode ser uma string, um objeto no formato {title: "", body: "", bodyList:[""]}
   * ou {message: ""}
   * ou {message: "", errors:[{message:""}...]}
   * ou {message: "", errors:[{defaultMessage:""}...]}
   * ou um JSX
   *
   * @param {string | MessageObject } message Mensagem que será exibida
   * @param { object } options Opções passadas para o "notistack"
   */
  function showError(message, options = { persist: true }) {
    const newMessage = formatIfApiError(message);
    enqueueSnackbar(newMessage, {
      ...options,
      anchorOrigin,
      onClose: (event, reason, key) => {
        if (reason === "clickaway" && options.persist) {
          closeSnackbar(key);
        }
      },
      content: (key) => content(key, newMessage, "error")
    });
  }

  function formatIfApiError(message) {
    if (message instanceof ArrayBuffer) {
      message = JSON.parse(Buffer.from(message).toString("utf8"));
    }

    let newMessage = message;
    if (message.message || message.errors) {
      if (message.errors && message.errors.length) {
        newMessage = {};
        newMessage.title = message.message;
        newMessage.bodyList = message.errors.map(
          (e) => e.message || e.defaultMessage
        );
      } else {
        newMessage = message.message;
      }
    }

    return newMessage;
  }

  return { showSuccess, showError, showInfo, showWarning };
}
