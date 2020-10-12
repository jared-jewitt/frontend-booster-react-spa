import React from "react";

import { AuthContext, IAuthContext } from "@/store";

import Logo from "@/assets/images/logo.svg";

import "@/styles/pages/login.scss";

export default (): JSX.Element => {
  const { updateAuthState } = React.useContext<IAuthContext>(AuthContext);

  return (
    <div className="login">
      <img className="login__logo" alt="Logo" src={Logo} />
      <button onClick={() => updateAuthState({ user: { name: "Foo Bar" } })}>Simulate login</button>
    </div>
  );
};
