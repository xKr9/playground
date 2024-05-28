import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "react-query";
import AsyncComponent from "../AsyncComponent";

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
      <div className="w-[200px] bg-blue-500 grid grid-cols-3">
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
        <AsyncComponent
          errorFallback={<div className="bg-red-500">Error 3</div>}
          suspenseFallback={<div className="bg-green-500">Loading 3</div>}
        >
          <ChildThree />
        </AsyncComponent>
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
  const { data } = useQuery({
    suspense: true,
    queryKey: ["test3"],
    retry: 0,
    queryFn: () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Resolved 1");
        }, 7000);
      }),
  });
  return <div>{data as string}</div>;
};

export default AsyncNestedBoundries;
