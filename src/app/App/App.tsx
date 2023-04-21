import type { FC } from "react";
import { AxiosProvider } from "context";
import styles from "./App.module.scss";
import { OrdersScreen } from "../screens/OrdersScreen";

const App: FC = () => {
  return (
    <AxiosProvider>
      <div className={styles.app}>
        <h2>Hello World</h2>
        <OrdersScreen />
      </div>
    </AxiosProvider>
  );
};

export { App };
