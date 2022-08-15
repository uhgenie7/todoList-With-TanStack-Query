import { ComponentProps } from 'react';
import ErrorBoundary from './ErrorBoundary';
import DefaultErrorFallback from '../atoms/DefaultErrorFallback';
import PageLoader from '../atoms/PageLoader';
import SSRSafeSuspense from './SSRSafeSuspense';
import AsyncBoundary from './AsyncBoundary';

export type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;
interface IProps extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  pendingFallback?: ComponentProps<typeof SSRSafeSuspense>['fallback'];
  rejectedFallback?: ErrorBoundaryProps['renderFallback'];
}

export default function ExtendsAsyncBoundary({
  pendingFallback = <PageLoader />,
  rejectedFallback = DefaultErrorFallback,
  ...props
}: IProps) {
  return (
    <AsyncBoundary
      pendingFallback={pendingFallback}
      rejectedFallback={({ error, reset }) => {
        if (!error) {
          return rejectedFallback({ error, reset });
        }
        console.log(error);
      }}
      {...props}
    />
  );
}
