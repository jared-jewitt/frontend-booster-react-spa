import React from "react";
import { AuthContext } from "@/store";
import { Loader } from "@/components";
import styles from "./styles.module.scss";

export default function Home(): React.ReactElement {
  const { logout, state } = React.useContext(AuthContext);

  return (
    <div className={styles.root}>
      <p>Welcome to the React SPA boilerplate!</p>
      {state.isLoading ? <Loader /> : <button onClick={() => logout()}>Simulate logout</button>}
    </div>
  );
}
