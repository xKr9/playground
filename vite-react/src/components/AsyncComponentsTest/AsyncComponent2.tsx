import React, { Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

type Props = {
  children: React.ReactNode;
  errorFallback: React.ComponentType<FallbackProps>;
  suspenseFallback: React.ReactNode;
};

const AsyncComponent2 = ({
  children,
  errorFallback: ErrorFallbackComponent,
  suspenseFallback,
}: Props) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={(fallbackProps: FallbackProps) => (
            <ErrorFallbackComponent {...fallbackProps} />
          )}
        >
          <Suspense fallback={suspenseFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default AsyncComponent2;
