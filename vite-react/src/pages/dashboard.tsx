import { Suspense } from "react";
import { useQuery } from "react-query";

export const DashboardWrapper = () => {
  return (
    <Suspense fallback={<div className="text-red-500">Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
};

const Dashboard = () => {
  const { data } = useQuery({
    suspense: true,
    queryKey: ["test"],
    queryFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("hello");
        }, 5000);
      }),
  });
  return <div>{data as string}</div>;
};

export default Dashboard;
