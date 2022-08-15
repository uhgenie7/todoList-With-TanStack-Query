import { ComponentProps } from 'react';
import ErrorBoundary from './ErrorBoundary';
import SSRSafeSuspense from './SSRSafeSuspense';

export type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface IProps extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  pendingFallback: ComponentProps<typeof SSRSafeSuspense>['fallback'];
  rejectedFallback: ErrorBoundaryProps['renderFallback'];
}

const AsyncBoundary = ({ pendingFallback, rejectedFallback, children, ...errorBoundaryProps }: IProps) => {
  return (
    <ErrorBoundary renderFallback={rejectedFallback} {...errorBoundaryProps}>
      <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
