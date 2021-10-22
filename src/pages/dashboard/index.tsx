import React from "react";
import { AuthContext } from "@/store";
import { Page } from "@/components";
import styles from "./styles.module.scss";

export default function Dashboard(): React.ReactElement {
  const { logout, state } = React.useContext(AuthContext);

  return (
    <Page className={styles.root}>
      <p>Welcome to the React SPA boilerplate!</p>
      <button disabled={state.isLoading} onClick={() => logout()}>
        Simulate logout
      </button>
    </Page>
  );
}
