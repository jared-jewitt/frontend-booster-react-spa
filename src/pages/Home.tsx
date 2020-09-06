import React, { useEffect } from "react";

import { useAuth } from "@/hooks";

export default (): JSX.Element => {
  const { clearAuthState } = useAuth();

  useEffect(() => {
    console.log(clearAuthState);
  }, []);

  return (
    <div className="home">
      <h1 className="home__title">Home</h1>
      <p>
        Try navigating to <code>/login</code>
        <br />
        It won&apos;t work due to public routing constraints.
      </p>
      <button className="home__logout-btn" onClick={clearAuthState}>
        Simulate logout
      </button>
    </div>
  );
};
