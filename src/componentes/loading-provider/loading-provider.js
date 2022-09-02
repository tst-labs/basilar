import React, { createContext, useContext, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const style = {
  zIndex: (theme) => theme.zIndex.drawer + 1,
  color: "#fff"
};

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={setLoading}>
      <Backdrop sx={style} open={loading}>
        <CircularProgress color="inherit" data-testid="loader" />
      </Backdrop>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
