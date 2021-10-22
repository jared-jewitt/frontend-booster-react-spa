import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Page({ className = "", children }: Props): React.ReactElement {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.envList}>
        {Object.entries(window._env_).map(([key, value]) => (
          <li key={key}>
            <code>
              {key}: {value}
            </code>
          </li>
        ))}
      </div>

      {children}
    </div>
  );
}
