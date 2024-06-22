import { Suspense } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "react-error-boundary";

const examplePromise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is an error");
  }, 1000);
});

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-blue-300 text-white">
      <ErrorBoundary fallback={<div>Shit</div>}>
        <Suspense fallback={<div>This is Loading....</div>}>
          <Example />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

const Example = () => {
  const { data } = useQuery({
    queryKey: "example",
    queryFn: () => examplePromise,
    suspense: true,
    useErrorBoundary: true,
  });
  return (
    <ErrorBoundary fallback={<div>Inner shit</div>}>
      <h1>{data}</h1>
    </ErrorBoundary>
  );
};

export default App;
