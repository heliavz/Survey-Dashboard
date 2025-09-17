import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-slate-900 text-gray-200 ml-[348px] h-screen overflow-y-auto">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
