import type { AxiosInstance } from "axios";
import { useContextFallback } from "hooks";
import { AxiosContext } from "./AxiosContext";

const useAxiosContext = () => useContextFallback<AxiosInstance>(AxiosContext);

export { useAxiosContext };
