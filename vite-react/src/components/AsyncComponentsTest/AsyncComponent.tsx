import React from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
  errorFallback: React.ReactElement<
    unknown,
    string | typeof React.Component | React.FunctionComponent<{}>
  >;
  suspenseFallback: React.ReactNode;
};

const AsyncComponent = ({
  children,
  errorFallback,
  suspenseFallback,
}: Props) => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <React.Suspense fallback={suspenseFallback}>{children}</React.Suspense>
    </ErrorBoundary>
  );
};

export default AsyncComponent;
