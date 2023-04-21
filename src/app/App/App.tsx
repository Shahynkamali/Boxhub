import type { FC } from "react";
import { AxiosProvider } from "context";
import { OrdersScreen } from "../screens/OrdersScreen";
import styles from "./App.module.scss";

const App: FC = () => {
  return (
    <AxiosProvider>
      <div className={styles.app}>
        <h2 className="text-red-500">Hello World</h2>
        <OrdersScreen />
      </div>
    </AxiosProvider>
  );
};

export { App };
