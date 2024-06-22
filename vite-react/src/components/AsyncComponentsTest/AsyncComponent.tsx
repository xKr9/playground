import React from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
  errorFallback?: React.ReactElement<unknown, string | typeof React.Component>;
  suspenseFallback?: React.ReactNode;
};

const AsyncComponent = ({
  children,
  errorFallback,
  suspenseFallback,
}: Props) => {
  return (
    <ErrorBoundary
      fallback={
        errorFallback ? errorFallback : <div>Something went wrong!</div>
      }
    >
      <React.Suspense
        fallback={suspenseFallback ? suspenseFallback : <div>Loading...</div>}
      >
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default AsyncComponent;
