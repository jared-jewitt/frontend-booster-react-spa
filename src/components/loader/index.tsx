import React from "react";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

nprogress.configure({
  showSpinner: false,
});

export default function Loader(): React.ReactElement {
  React.useEffect((): (() => void) => {
    nprogress.start();
    return () => nprogress.done();
  });

  return null;
}
