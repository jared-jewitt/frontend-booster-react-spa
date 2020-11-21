import React from "react";
import styles from "./styles.module.scss";

export default function Loader(): React.ReactElement {
  return <div className={styles.root}>Loading...</div>;
}
