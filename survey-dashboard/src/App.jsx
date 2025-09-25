import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import MySurveys from "./Pages/MySurveys";
import Notifications from "./Pages/Notifications";
import Templates from "./Pages/Templates";
import SurveyDetail from "./Pages/SurveyDetail";
import SurveyCreation from "./Pages/SurveyCreation";

function MainLayout() {
  // Layout used for all normal pages that should show the main sidebar
  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="flex-1 bg-slate-900 text-gray-200 ml-[348px] h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Standalone Survey Creation page (no main Sidebar) */}
      <Route path="/new-survey" element={<SurveyCreation />} />

      {/* All other pages use MainLayout (with the main Sidebar) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="my-surveys" element={<MySurveys />} />
        <Route path="survey/:name" element={<SurveyDetail />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="templates" element={<Templates />} />
        {/* add more nested routes here as needed */}
      </Route>
    </Routes>
  );
}
