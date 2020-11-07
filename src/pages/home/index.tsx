import React from "react";

import { AuthContext, IAuthContext } from "@/store";

import "./styles.scss";

export default (): JSX.Element => {
  const { clearAuthState, state } = React.useContext<IAuthContext>(AuthContext);

  return (
    <div className="home">
      <p>Welcome, {state.user?.name || "Unknown"}</p>
      <button onClick={() => clearAuthState()}>Simulate logout</button>
    </div>
  );
};
