import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatCard from "../../components/dashboard/StatCard";
import RecentRequests from "../../components/dashboard/RecentRequests";
import "./Dashboard.css";
import QuickActions from "../../components/dashboard/QuickActions";

function Dashboard() {
  return (
    <>
      <DashboardHeader />

        <div className="stats-grid">
        <StatCard
          title="Products"
          value="248"
          color="#2563EB"
        />

        <StatCard
          title="Vendors"
          value="54"
          color="#10B981"
        />

        <StatCard
          title="Requests"
          value="32"
          color="#F59E0B"
        />

        <StatCard
          title="Departments"
          value="8"
          color="#EF4444"
        />
      </div>
      <RecentRequests />
      <QuickActions />
    </>
  );
}

export default Dashboard;