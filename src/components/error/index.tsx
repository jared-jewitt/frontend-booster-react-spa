import React from "react";
import styles from "./styles.module.scss";

export interface IProps {
  children: React.ReactNode;
}

export interface IState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): IState {
    return { hasError: true };
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return !hasError ? children : <div className={styles.root}>Oops! Something went wrong.</div>;
  }
}
