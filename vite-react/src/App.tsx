import Main from "./components/AsyncComponentsTest/ComponentsAsProps";
import { loaderExample } from "./components/MultipleWaysToFetch/LoaderFetch";
import AsyncNestedBoundries from "./components/NestedBoundries/NestedBoundries";
import ReturnTypedComponent from "./components/ReturnTypedComponent";
import Dashboard, { DashboardWrapper } from "./pages/dashboard";
import { AppProvider } from "./providers/App";
import { Route, Routes } from "react-router-dom";

type ComponentType = ReturnType<typeof ReturnTypedComponent>;

function App() {
  return (
    <AppProvider>
      <main className="min-h-screen w-full flex justify-center items-center flex-col bg-blue-300 text-white">
        <Routes>
          <Route path="/" element={<DashboardWrapper />} />
          <Route path="/component-as-props" element={<Main />} />
          <Route path="/nested-boundries" element={<AsyncNestedBoundries />} />
        </Routes>
      </main>
    </AppProvider>
  );
}

export default App;
