import { red } from  "@mui/material/colors";
import { ptBR } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";

const branco = "#FFF";
const preto = "#000";
const primariaJT = "#0067A0";
const secundariaJT = "#19857b";
const fundo = "#F4F6F8"

const temaTST = createTheme(
  {
    typography: {
      fontFamily: "Aller, Roboto, Helvetica, Arial, sans-serif"
    },
    palette: {
      white: branco,
      black: preto,
      primary: {
        main: primariaJT
      },
      secondary: {
        main: secundariaJT
      },
      error: {
        main: red.A400
      },
      background: {
        default: fundo,
        paper: branco
      }
    },
    mixins: {
      toolbar: {
        minHeight: 40
      }
    },
    overrides: {
      MuiAvatar: {
        colorDefault: {
          backgroundColor: secundariaJT
        },
        img: {
          objectPosition: "50% 25%"
        }
      }
    }
  },
  ptBR
);

export default temaTST;
