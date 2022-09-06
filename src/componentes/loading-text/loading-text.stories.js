import React from "react";
import { LoadingText } from "./index";

export default {
  title: "Basilar/Componentes/LoadingText",
  component: LoadingText
};

export const Default = () => {
  return <LoadingText>Este é um texto de exemplo</LoadingText>;
};

export const H1 = () => {
  return <LoadingText variant="h1">Este é um texto de exemplo</LoadingText>;
};
