import axios from "axios";
import { ReactNode, useMemo } from "react";
import { AxiosContext } from "./AxiosContext";

interface Props {
  children: ReactNode;
}

export const AxiosProvider = ({ children }: Props) => {
  const value = useMemo(
    () =>
      axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
      }),
    []
  );

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};
