import type { AxiosInstance } from "axios";
import { createContext } from "react";
import axios from "axios";

const AxiosContext = createContext<AxiosInstance | undefined>(axios);

AxiosContext.displayName = "AxiosContext";

export { AxiosContext };
