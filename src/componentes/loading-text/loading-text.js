import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { temaTST } from "../index";

const useStyles = makeStyles(() => ({
  "@keyframes glow": {
    "0%": {
      opacity: 1
    },
    "100%": {
      opacity: 1
    },
    "50%": {
      opacity: 0.5
    }
  },
  glowText: {
    animation: `$glow 1.5s ease-in-out infinite`,
    background: temaTST.palette.grey,
    color: "transparent",
    cursor: "progress",
    display: "inline-block"
  }
}));

export function LoadingText({ variant, component, children }) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.glowText}
      variant={variant}
      component={component || "span"}
    >
      {children}
    </Typography>
  );
}
