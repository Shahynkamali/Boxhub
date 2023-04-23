import type {
  ConditionTypes,
  ContainerType,
  ORDER,
  SizeTypes,
  StatusTypes,
} from "@/api-mocks/fixtures";
import { useEffect, useMemo, useState } from "react";
import { AxiosError } from "axios";
import { API_RESOURCE } from "constant";
import { buildSearchParams } from "utilities";
import { useAxiosContext } from "context";

type Response = ORDER[];

interface QueryState {
  isLoading: boolean;
  data?: Response;
  error?: AxiosError;
}

export interface FilterOptions {
  status?: StatusTypes;
  condition?: ConditionTypes;
  type?: ContainerType;
  size: SizeTypes;
}

interface Options {
  filterBy: FilterOptions;
}

const useOrdersQuery = ({ filterBy }: Options) => {
  const { get } = useAxiosContext();
  const [state, setState] = useState<QueryState>({ isLoading: false });

  const url = `/${API_RESOURCE.ORDERS}?${buildSearchParams<FilterOptions>(
    filterBy
  )}`;

  const fetchOrders = async () => {
    try {
      const { data } = await get<Response>(url);

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
  }, [filterBy]);

  const value = useMemo(() => state, [state]);

  return value;
};

export { useOrdersQuery };
