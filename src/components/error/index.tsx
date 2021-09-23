import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  children: React.ReactNode;
}

export interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render(): React.ReactNode {
    const { className = "", children } = this.props;
    const { hasError } = this.state;

    return !hasError ? children : <div className={`${styles.root} ${className}`}>Oops! Something went wrong.</div>;
  }
}
