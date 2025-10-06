import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import MySurveys from "./Pages/MySurveys";
import Notifications from "./Pages/Notifications";
import Templates from "./Pages/Templates";
import SurveyDetail from "./Pages/SurveyDetail";
import SurveyCreation from "./Pages/SurveyCreation";
import ProfilePage from "./Pages/ProfilePage";
import PreferencesPage from "./Pages/PreferencesPage";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="flex-1 bg-slate-900 text-gray-200 md:ml-[348px] ml-0 h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* global Toaster for toast messages */}
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />

      <Routes>
        {/* Standalone Survey Creation page (no main Sidebar in layout) */}
        <Route path="/new-survey" element={<SurveyCreation />} />

        {/* All other pages use MainLayout (with Sidebar) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-surveys" element={<MySurveys />} />
          <Route path="survey/:name" element={<SurveyDetail />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="templates" element={<Templates />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="preferences" element={<PreferencesPage />} />
        </Route>
      </Routes>
    </>
  );
}
