import Main from "./components/AsyncComponentsTest/ComponentsAsProps";
import ImperativeHandler from "./components/HooksTest/ImperativeHandler";
import AsyncNestedBoundries from "./components/NestedBoundries/NestedBoundries";
import { DashboardWrapper } from "./pages/dashboard";
import { AppProvider } from "./providers/App";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <main className="min-h-screen w-full flex justify-center items-center flex-col bg-blue-300 text-white">
        <Routes>
          <Route path="/" element={<DashboardWrapper />} />
          <Route path="/component-as-props" element={<Main />} />
          <Route path="/nested-boundries" element={<AsyncNestedBoundries />} />
          <Route
            path="/hooks/imperative-handle"
            element={<ImperativeHandler />}
          />
        </Routes>
      </main>
    </AppProvider>
  );
}

export default App;
