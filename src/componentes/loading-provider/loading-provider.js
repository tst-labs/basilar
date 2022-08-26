import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import React, { createContext, useContext, useState } from "react";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.modal + 1,
    color: "#fff"
  }
}));

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  return (
    <LoadingContext.Provider value={setLoading}>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" data-testid="loader" />
      </Backdrop>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
