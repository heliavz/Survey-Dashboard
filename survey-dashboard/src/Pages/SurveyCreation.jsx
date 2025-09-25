import { useNavigate } from "react-router-dom";
import SurveyCreationSidebar from "../Components/SurveyCreationSidebar";
import ArrowleftIcon from "../assets/Arrow_left.png";
import ShareIcon from "../assets/Share.png";
import SaveIcon from "../assets/Save.png"; // <-- add your save icon asset
import UploadIcon from "../assets/Add_banner.png"; // <-- icon for "Add Banner"

export default function SurveyCreation() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full">
      <SurveyCreationSidebar />

      <main className="flex-1 bg-slate-900 text-white p-6 flex flex-col gap-6 h-screen overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="hover:opacity-80"
          >
            <img src={ArrowleftIcon} alt="Back" />
          </button>
          <h1 className="text-2xl font-bold ml-2">Create New Survey</h1>
        </div>

        {/* Main content grid */}
        <div className="flex gap-6 w-full items-stretch">
          {/* Left main card */}
          <div className="flex-1 bg-white rounded-[16px] p-4 shadow flex flex-col gap-4 text-slate-900">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Survey Name</h2>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-[#DDE1FF] px-3 py-1 rounded-[8px] hover:bg-indigo-200 transition-colors shadow">
                  <img src={ShareIcon} alt="Share" className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 bg-indigo-200 px-3 py-1 rounded-[8px] hover:bg-indigo-300 transition-colors shadow">
                  <img src={SaveIcon} alt="Save" className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>

            {/* Banner upload */}
            <div className="w-full h-[300px] bg-gray-100 rounded-[16px] flex items-center justify-center relative">
              <button className="flex flex-col items-center justify-center bg-white border-2 border-indigo-500 shadow px-6 py-4 rounded-[32px] hover:bg-indigo-50 transition">
                <img src={UploadIcon} alt="Upload" className="w-6 h-6 mb-1" />
                <span className="text-sm font-semibold">Add Banner</span>
              </button>
            </div>

            {/* Starter line & description */}
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Write a starter line!
              </p>
              <input
                type="text"
                placeholder="Write a starter line!"
                className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
              />
              <textarea
                placeholder="Description of your survey..."
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div className="w-full h-px bg-indigo-500 my-2" />

            {/* Questions section */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-semibold">Questions</h3>
                <button className="flex items-center gap-2 border-2 border-orange-400 text-orange-500 px-3 py-1 rounded-[8px] shadow hover:bg-orange-50 transition">
                  <span className="text-lg">＋</span>
                  Add Question
                </button>
              </div>
              <ul className="list-disc pl-5 text-sm text-slate-800">
                <li>Question 1 (example)</li>
                <li>Question 2 (example)</li>
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="w-[332px] flex flex-col gap-4">
            {/* AI Card */}
            <div className="bg-indigo-400 rounded-[16px] p-6 shadow flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-lg font-bold mb-3 text-black">
                Create your survey using our AI
              </h2>
              <button className="bg-orange-200 text-slate-900 px-4 py-2 rounded-[8px] font-semibold shadow hover:bg-orange-300 transition">
                Try Now!
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
