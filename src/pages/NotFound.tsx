import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Route } from "@/ts/enums";

export default (): JSX.Element => (
  <Fragment>
    <p>404 - Not found</p>
    <Link to={Route.Home}>Go to Home</Link>
  </Fragment>
);
