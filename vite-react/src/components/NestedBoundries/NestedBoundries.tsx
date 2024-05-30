import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "react-query";
import AsyncComponent from "../AsyncComponentsTest/AsyncComponent";
import { QueryErrorResetBoundary } from "react-query";
import AsyncComponent2 from "../AsyncComponentsTest/AsyncComponent2";

const AsyncNestedBoundries = () => {
  return (
    <ErrorBoundary fallback={<div>Error from outer...</div>}>
      <Suspense fallback={<div>Loading from outer...</div>}>
        <NestedBoundries />
      </Suspense>
    </ErrorBoundary>
  );
};

const NestedBoundries = () => {
  const { data } = useQuery({
    suspense: true,
    queryKey: ["test"],
    retry: 0,
    queryFn: () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // throw new Error("Error from inner...");
          // reject("hello");
          resolve("hello");
        }, 5000);
      }),
  });
  return (
    <>
      <h1>
        {data as string} {data ? "from parent" : ""}
      </h1>
      <div className="w-[400px] bg-blue-500 grid grid-cols-4">
        <AsyncComponent
          errorFallback={<div className="bg-red-500">Error 1</div>}
          suspenseFallback={<div className="bg-green-500">Loading 1</div>}
        >
          <ChildOne />
        </AsyncComponent>
        <AsyncComponent
          errorFallback={<div className="bg-red-500">Error 2</div>}
          suspenseFallback={<div className="bg-green-500">Loading 2</div>}
        >
          <ChildTwo />
        </AsyncComponent>

        {/* <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => (
                <div className="bg-red-500">
                  <button onClick={() => resetErrorBoundary()}>Retry</button>
                </div>
              )}
            >
              <Suspense
                fallback={<div className="bg-green-500">Loading 3</div>}
              >
                <ChildThree />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary> */}

        <AsyncComponent2
          suspenseFallback={<div className="bg-green-500">Loading 3</div>}
          errorFallback={({ error, resetErrorBoundary }) => (
            <div className="bg-red-500">
              <button onClick={() => resetErrorBoundary()}>click me</button>
            </div>
          )}
        >
          <ChildThree />
        </AsyncComponent2>
      </div>
    </>
  );
};

const ChildOne = () => {
  const { data } = useQuery({
    suspense: true,
    queryKey: ["test1"],
    retry: 0,
    queryFn: () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Resolved 1");
        }, 5000);
      }),
  });
  return <div>{data as string}</div>;
};

const ChildTwo = () => {
  const { data } = useQuery({
    suspense: true,
    queryKey: ["test2"],
    retry: 0,
    queryFn: () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Resolved 2");
        }, 3000);
      }),
  });
  return <div>{data as string}</div>;
};

const ChildThree = () => {
  const [flag, setFlag] = React.useState(false);
  const { data, refetch } = useQuery({
    suspense: true,
    queryKey: ["test3", flag],
    retry: 0,
    queryFn: () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const date = new Date();
          return date.getSeconds() % 2 === 0
            ? resolve("Resolved 3")
            : reject("Rejected 3");
        }, 3000);
      }),
  });
  return <div>{data as string}</div>;
};

export default AsyncNestedBoundries;
