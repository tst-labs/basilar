import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import temaTST from "./tema-tst";
import temaTSTNaoProducao from "./tema-tst-nao-producao";

const ProvedorTemaTST = (props) => {
  const producao = props.producao !== "undefined" ? props.producao : true;
  const tema = producao ? temaTST : temaTSTNaoProducao;

  return <ThemeProvider theme={tema}>{props.children}</ThemeProvider>;
};

ProvedorTemaTST.propTypes = {
  producao: PropTypes.bool
};

ProvedorTemaTST.defaultProps = {
  producao: true
};

export default ProvedorTemaTST;
