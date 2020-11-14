import React from "react";

import styles from "./styles.module.scss";

export default (): React.ReactElement => (
  <div className={styles.notFound}>
    <p>404 - Not found</p>
  </div>
);
