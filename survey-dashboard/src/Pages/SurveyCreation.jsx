import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SurveyCreationSidebar from "../Components/SurveyCreationSidebar";
import QuestionRenderer from "../Components/QuestionRenderer";
import ElementRenderer from "../Components/ElementRenderer";
import ArrowleftIcon from "../assets/Arrow_left.png";
import ShareIcon from "../assets/Share.png";
import SaveIcon from "../assets/Save.png";
import UploadIcon from "../assets/Add_banner.png";
import BannerBg from "../assets/Banner_bg.png";
import Wave from "../assets/Wave.png";
import ArrowRight from "../assets/Arrow_right.png";
import { toast } from "react-hot-toast";

export default function SurveyCreation() {
  const navigate = useNavigate();

  // Editable states
  const [surveyName, setSurveyName] = useState("Untitled Survey");
  const [starterLine, setStarterLine] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [elements, setElements] = useState([]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Add question manually
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { type: "Short Answer", label: "", options: [] },
    ]);
  };

  // Add items from sidebar
  const handleAddItem = (section, item) => {
    if (section === "questions") {
      const newQ = {
        type: item.name,
        label: "",
        options: item.name.includes("Choice") ? [""] : [],
      };
      setQuestions((prev) => [...prev, newQ]);
      setMobileSidebarOpen(false);
    } else if (section === "elements") {
      setElements((prev) => [...prev, { type: item.name, content: "" }]);
      setMobileSidebarOpen(false);
    }
  };

  // Save / Share handlers use toast to simulate action
  const handleSave = () => {
    const id = toast.loading("Saving survey...");
    setTimeout(() => {
      toast.success("Survey saved", { id });
    }, 700);
  };

  const handleShare = async () => {
    const id = toast.loading("Preparing share link...");
    setTimeout(async () => {
      try {
        await navigator.clipboard?.writeText(window.location.href);
        toast.success("Share link copied to clipboard", { id });
      } catch {
        toast.success("Share link ready (couldn't copy)", { id });
      }
    }, 700);
  };

  return (
    <div className="flex w-full">
      {/* Desktop sidebar (visible md+) */}
      <div className="hidden md:block">
        <SurveyCreationSidebar onAddItem={handleAddItem} />
      </div>

      {/* Main content */}
      <main className="flex-1 bg-slate-900 text-white p-6 flex flex-col gap-6 h-screen overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center">
          {/* mobile: show hamburger to open the creation sidebar */}
          <button
            className="md:hidden mr-3 p-2 rounded hover:bg-white/10"
            onClick={() => setMobileSidebarOpen(true)}
            aria-label="Open menu"
          >
            {/* simple hamburger */}
            <div className="w-5 h-5 flex flex-col justify-between">
              <span className="block h-[2px] w-full bg-white" />
              <span className="block h-[2px] w-full bg-white" />
              <span className="block h-[2px] w-full bg-white" />
            </div>
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="hover:opacity-80 cursor-pointer mr-2"
          >
            <img src={ArrowleftIcon} alt="Back" />
          </button>
          <h1 className="text-2xl font-bold">Create New Survey</h1>
        </div>

        {/* mobile overlay sidebar */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <div className="absolute left-0 top-0 w-[300px] h-full bg-white p-4 overflow-auto">
              <SurveyCreationSidebar onAddItem={handleAddItem} />
            </div>
          </div>
        )}

        {/* Main content grid */}
        <div className="flex gap-6 w-full items-stretch">
          {/* Left main card */}
          <div className="flex-1 bg-white rounded-[16px] p-4 shadow flex flex-col gap-4 text-slate-900">
            <div className="flex justify-between items-center">
              {/* Survey Title */}
              <input
                type="text"
                value={surveyName}
                onChange={(e) => setSurveyName(e.target.value)}
                placeholder="Survey Title"
                className="text-lg font-semibold text-gray-700 focus:text-slate-900 focus:outline-none w-full"
              />
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-[#DDE1FF] px-4 py-2 rounded-[8px] hover:bg-indigo-200 transition-colors shadow whitespace-nowrap"
                >
                  <img src={ShareIcon} alt="Share" className="w-4 h-4" />
                  Share
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-indigo-200 px-4 py-2 rounded-[8px] hover:bg-indigo-300 transition-colors shadow whitespace-nowrap"
                >
                  <img src={SaveIcon} alt="Save" className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>

            {/* Banner upload */}
            <div className="w-full h-[300px] rounded-[16px] flex items-center justify-center relative overflow-hidden">
              <img
                src={BannerBg}
                alt="Banner Background"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <button className="relative z-10 flex flex-col items-center justify-center bg-white border-2 border-indigo-500 shadow px-6 py-4 rounded-[32px] hover:bg-indigo-50 transition">
                <img src={UploadIcon} alt="Upload" className="w-6 h-6 mb-1" />
                <span className="text-sm font-semibold">Add Banner</span>
              </button>
            </div>

            {/* Starter line & description */}
            <div className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                value={starterLine}
                onChange={(e) => setStarterLine(e.target.value)}
                placeholder="Write a starter line..."
                className="w-full px-3 py-2 text-sm text-slate-900 placeholder-gray-400 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description of your survey..."
                className="w-full px-3 py-2 text-sm text-slate-900 placeholder-gray-400 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            <div className="w-full h-px bg-indigo-500 my-2" />

            {/* Questions section */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-semibold">Questions</h3>
                <button
                  onClick={addQuestion}
                  className="flex items-center gap-2 border-2 border-orange-400 text-orange-500 px-3 py-1 rounded-[8px] shadow hover:bg-orange-50 transition whitespace-nowrap"
                >
                  <span className="text-lg">＋</span>
                  Add Question
                </button>
              </div>

              {questions.length === 0 ? (
                <div className="bg-purple-600 text-white px-4 py-4 rounded-md cursor-text">
                  <span className="font-medium">Question 1</span>
                </div>
              ) : (
                <ul className="pl-2 text-sm text-slate-800 flex flex-col gap-3">
                  {questions.map((q, i) => (
                    <QuestionRenderer
                      key={i}
                      question={q}
                      onChange={(updatedQ) => {
                        const newQs = [...questions];
                        newQs[i] = updatedQ;
                        setQuestions(newQs);
                      }}
                    />
                  ))}
                </ul>
              )}
            </div>

            {/* Elements Section */}
            {elements.length > 0 && (
              <div className="mt-4">
                <h3 className="text-md font-semibold mb-2">Elements</h3>
                <ul className="pl-2 text-sm text-slate-800 flex flex-col gap-3">
                  {elements.map((el, i) => (
                    <ElementRenderer
                      key={i}
                      element={el}
                      onChange={(updatedEl) => {
                        const newEls = [...elements];
                        newEls[i] = updatedEl;
                        setElements(newEls);
                      }}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="w-[332px] flex flex-col gap-4">
            {/* AI Card */}
            <div className="relative bg-purple-400 rounded-[16px] p-6 flex flex-col items-center justify-center text-center text-black shadow-[0_0_20px_rgba(255,165,0,0.7)] overflow-hidden">
              <img
                src={Wave}
                alt="Wave background"
                className="absolute right-0 top-0 h-full opacity-50 object-contain"
              />
              <h2 className="text-lg font-bold mb-3 relative z-10">
                Create your survey using our AI
              </h2>
              <button className="relative z-10 bg-orange-400 text-slate-900 px-4 py-2 rounded-[8px] font-semibold shadow hover:bg-orange-300 transition">
                Try Now!
              </button>
            </div>

            {/* Questions Card */}
            <div className="bg-white rounded-[16px] p-4 shadow text-slate-900">
              <h2 className="font-semibold text-lg mb-2">Questions</h2>
              {questions.length === 0 ? (
                <div className="flex justify-between items-center bg-orange-200 px-3 py-2 rounded-md">
                  <span className="font-medium">Q1</span>
                  <img src={ArrowRight} alt="Arrow" className="w-4 h-4" />
                </div>
              ) : (
                <ul className="text-sm">
                  {questions.map((q, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center py-1"
                    >
                      {/* show the current label if available */}
                      {q.label || q.type || `Q${i + 1}`}
                      <img src={ArrowRight} alt="Arrow" className="w-4 h-4" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
