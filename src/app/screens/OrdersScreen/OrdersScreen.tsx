import type { FC } from "react";
import { useOrdersQuery } from "./useOrdersQuery";

const OrdersScreen: FC = () => {
  const { data, isLoading, error } = useOrdersQuery();

  if (isLoading) return <div>loading</div>;
  if (!!error) return <div>oeps!</div>;

  return (
    <div>
      {data?.data.map(({ customer, id }) => (
        <div key={id}>
          <p>{customer}</p>
        </div>
      ))}
    </div>
  );
};

export { OrdersScreen };
