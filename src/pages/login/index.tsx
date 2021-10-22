import React from "react";
import { AuthContext } from "@/store";
import { Logo } from "@/assets";
import { Page } from "@/components";
import styles from "./styles.module.scss";

export default function Login(): React.ReactElement {
  const { login, state } = React.useContext(AuthContext);

  return (
    <Page className={styles.root}>
      <img src={Logo} alt="Logo" height={200} width={200} />
      <br />
      <button disabled={state.isLoading} onClick={() => login()}>
        Simulate login
      </button>
    </Page>
  );
}
