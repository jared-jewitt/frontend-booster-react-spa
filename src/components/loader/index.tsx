import React from "react";

import styles from "./styles.module.scss";

export default (): React.ReactElement => {
  return <div className={styles.loader}>Loading...</div>;
};
