import { ComponentProps } from 'react';
import { useEffect } from 'react';
import useToast from '@src/hooks/useToast';
import { ErrorBoundaryProps } from '@src/components/boundaries/AsyncBoundary';

const DefaultErrorFallback = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default DefaultErrorFallback;
