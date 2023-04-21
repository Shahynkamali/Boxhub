import type { ORDER } from "@/api-mocks/fixtures";
import { useEffect, useMemo, useState } from "react";
import { AxiosError } from "axios";
import { API_RESOURCE } from "constant";
import { useAxiosContext } from "context";

type Data = ORDER[];

interface Response {
  data: Data;
}

interface QueryState {
  isLoading: boolean;
  data?: Response;
  error?: AxiosError;
}

const useOrdersQuery = () => {
  const { get } = useAxiosContext();
  const [state, setState] = useState<QueryState>({ isLoading: false });

  const fetchOrders = async () => {
    try {
      const { data } = await get<Response>(`/${API_RESOURCE.ORDERS}`);

      setState({ data, isLoading: false, error: undefined });
    } catch (error) {
      setState({
        data: undefined,
        error: error as AxiosError,
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    setState({ isLoading: true });

    fetchOrders();
  }, []);

  const value = useMemo(() => state, [state]);

  return value;
};

export { useOrdersQuery };
