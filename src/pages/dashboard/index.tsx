import React from "react";
import { AuthContext } from "@/store";
import styles from "./styles.module.scss";

export default function Dashboard(): React.ReactElement {
  const { logout, state } = React.useContext(AuthContext);

  return (
    <div className={styles.root}>
      <p>Welcome to the React SPA boilerplate!</p>
      <button disabled={state.isLoading} onClick={() => logout()}>
        Simulate logout
      </button>
    </div>
  );
}
