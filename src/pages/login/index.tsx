import React from "react";
import { AuthContext } from "@/store";
import { Loader } from "@/components";
import { Logo } from "@/assets";
import styles from "./styles.module.scss";

export default function Login(): React.ReactElement {
  const { login, state } = React.useContext(AuthContext);

  return (
    <div className={styles.root}>
      <img src={Logo} alt="Logo" height={200} width={200} />
      {state.isLoading ? <Loader /> : <button onClick={() => login()}>Simulate login</button>}
    </div>
  );
}
