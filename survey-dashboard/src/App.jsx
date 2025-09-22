import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import MySurveys from "./Pages/MySurveys";
import Notifications from "./Pages/Notifications";
import Templates from "./Pages/Templates";
import SurveyDetail from "./Pages/SurveyDetail";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-slate-900 text-gray-200 ml-[348px] h-screen overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-surveys" element={<MySurveys />} />
          <Route path="/survey/:name" element={<SurveyDetail />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
