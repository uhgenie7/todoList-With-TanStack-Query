import React, { ErrorInfo, ReactNode } from 'react';

type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
};

type RenderFallbackType = <ErrorType extends Error>(props: RenderFallbackProps<ErrorType>) => ReactNode;

interface ErrorBoundaryProps {
  renderFallback: RenderFallbackType;
  resetKeys?: unknown[];
  onReset?: (...args: Array<unknown>) => void;
  children: ReactNode;
}

type ErrorBoundaryState = { error: Error | null };

const isDifferentArray = (a: unknown[] = [], b: unknown[] = []) =>
  a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));

const initialState: ErrorBoundaryState = { error: null };

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  // error fallback에 전달할 reset handler
  resetErrorBoundary = (...args: Array<unknown>) => {
    // ErrorBoundary state를 초기화
    this.setState(initialState);
    this.props.onReset?.(...args);
  };

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.state.error == null) return null;
    if (isDifferentArray(prevProps.resetKeys, this.props.resetKeys)) {
      // Trigger Reset
      this.resetErrorBoundary();
    }
  }

  render() {
    const { children, renderFallback } = this.props;
    const { error } = this.state;

    if (error != null) {
      return renderFallback({
        error,
        reset: this.resetErrorBoundary,
      });
    }
    return children;
  }
}

export default ErrorBoundary;
