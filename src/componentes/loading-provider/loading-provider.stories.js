import { LoadingProvider, useLoading } from "./index";
import Button from "@mui/material/Button";

export default {
  title: "Basilar/Componentes/LoadingProvider",
  component: LoadingProvider
};

export const Fechado = () => <LoadingProvider></LoadingProvider>;

export const Aberto = () => {
  function Componente() {
    const setLoading = useLoading(false);
    return (
      <>
        <Button onClick={() => setLoading(true)}>Mostrar Loading</Button>
      </>
    );
  }
  return (
    <LoadingProvider>
      <Componente />
    </LoadingProvider>
  );
};
