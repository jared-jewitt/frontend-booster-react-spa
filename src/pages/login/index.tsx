import React from "react";

import { AuthContext } from "@/store";
import { Logo } from "@/assets";

import styles from "./styles.module.scss";

export default (): React.ReactElement => {
  const { updateAuthState } = React.useContext(AuthContext);

  return (
    <div className={styles.login}>
      <img src={Logo} alt="Logo" height={200} width={200} />
      <br />
      <button onClick={() => updateAuthState({ user: { name: "Foo Bar" } })}>Simulate login</button>
    </div>
  );
};
