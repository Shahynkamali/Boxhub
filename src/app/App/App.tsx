import type { FC } from "react";
import { AxiosProvider } from "context";
import { OrdersScreen } from "@/app/screens/OrdersScreen";

const App: FC = () => {
  return (
    <AxiosProvider>
      <OrdersScreen />
    </AxiosProvider>
  );
};

export { App };
