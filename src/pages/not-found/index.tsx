import React from "react";
import styles from "./styles.module.scss";

export default function NotFound(): React.ReactElement {
  return (
    <div className={styles.root}>
      <p>404 - Not found</p>
    </div>
  );
}
