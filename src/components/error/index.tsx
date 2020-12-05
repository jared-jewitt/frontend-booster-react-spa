import React from "react";
import styles from "@/components/error/styles.module.scss";

export interface IProps {
  className?: string;
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
    const { className = "", children } = this.props;
    const { hasError } = this.state;

    return !hasError ? children : <div className={`${styles.root} ${className}`}>Oops! Something went wrong.</div>;
  }
}
