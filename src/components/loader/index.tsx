import React from "react";
import styles from "@/components/loader/styles.module.scss";

export default function Loader(): React.ReactElement {
  return <div className={styles.root}>Loading...</div>;
}
