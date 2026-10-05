import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../components/layout/MainLayout";
import Departments from "../pages/departments/Departments";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/departments"
          element={
            <MainLayout>
              <Departments />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;