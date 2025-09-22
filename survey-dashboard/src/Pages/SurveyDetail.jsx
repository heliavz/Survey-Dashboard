import { useNavigate, useParams } from "react-router-dom";
import ArrowleftIcon from "../assets/Arrow_left.png";
import SurveyBanner from "../assets/SurveyBanner.png";
import ShareIcon from "../assets/Share.png";
import EditIcon from "../assets/Edit.png";
import PieChart from "../assets/Pie_Chart.png";
import BarChart from "../assets/Bar_Chart.png";
import PositiveIcon from "../assets/Positive.png";
import NegativeIcon from "../assets/Negative.png";
import NeutralIcon from "../assets/Neutral.png";
import User1 from "../assets/User1.png";
import User2 from "../assets/User2.png";
import User3 from "../assets/User3.png";

export default function SurveyDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const surveyStatus = "open";

  const getStatusStyles = (status) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "close":
        return "bg-red-100 text-red-800";
      case "draft":
        return "bg-orange-100 text-orange-800";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6 h-full">
      {/* Top bar */}
      <div className="flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-white font-bold hover:cursor-pointer"
        >
          <img src={ArrowleftIcon} alt="Back" />
        </button>
        <h1 className="text-2xl font-bold text-white ml-2 flex items-center gap-2">
          {name}
          <span
            className={`px-3 py-1 rounded-full text-sm ${getStatusStyles(
              surveyStatus
            )}`}
          >
            {surveyStatus}
          </span>
        </h1>
      </div>

      {/* Main content grid */}
      <div className="flex gap-6 w-full items-stretch">
        {/* Left main card */}
        <div className="flex-1 bg-white rounded-[16px] p-4 shadow flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 bg-[#DDE1FF] text-slate-900 px-3 py-1 rounded-[8px] hover:bg-indigo-200 transition-colors">
                <img src={ShareIcon} alt="Share" className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 bg-indigo-200 text-slate-900 px-3 py-1 rounded-[8px] hover:bg-indigo-300 transition-colors">
                <img src={EditIcon} alt="Edit" className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>
          <img
            src={SurveyBanner}
            alt="Survey"
            className="w-full h-[300px] object-cover rounded-[16px]"
          />
          <p className="text-sm text-slate-700">Short introduction here...</p>
          <p className="text-sm text-slate-800">Survey description here...</p>
          <h3 className="text-md font-semibold mt-4">Questions</h3>
          <ul className="list-disc pl-5">
            <li>Question 1</li>
            <li>Question 2</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="w-[332px] flex flex-col gap-4">
          {/* Feedback & Results */}
          {/* Feedback & Results */}
          <div className="bg-white rounded-[16px] p-4 shadow flex flex-col">
            <h2 className="text-lg text-slate-900 font-semibold mb-2">
              Feedback & Results
            </h2>

            {/* Pie chart + sentiment labels side by side */}
            <div className="flex items-center gap-4 mb-2">
              <img
                src={PieChart}
                alt="Pie Chart"
                className="w-1/2 h-[160px] object-contain"
              />
              <div className="flex flex-col gap-2 w-1/2">
                <div className="flex items-center gap-2">
                  <img src={PositiveIcon} className="w-6 h-6" />
                  <span className="bg-green-100 px-2 py-1 rounded text-green-800 text-xs">
                    Positive 32%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={NegativeIcon} className="w-6 h-6" />
                  <span className="bg-red-100 px-2 py-1 rounded text-red-800 text-xs">
                    Negative 45%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={NeutralIcon} className="w-6 h-6" />
                  <span className="bg-indigo-100 px-2 py-1 rounded text-indigo-800 text-xs">
                    Neutral 23%
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-indigo-500 my-2" />

            {/* Bar chart with labels above */}
            <div className="flex flex-col">
              <div className="mb-2">
                <h3 className="font-semibold mb-2 text-slate-900">
                  Responses (Age)
                </h3>
                <div className="flex gap-2 mb-2 flex-wrap">
                  <span className="bg-yellow-200 text-slate-800 px-2 py-1 rounded-md text-xs">
                    Female 380
                  </span>
                  <span className="bg-slate-800 text-white px-2 py-1 rounded-md text-xs">
                    Male 410
                  </span>
                  <span className="bg-slate-200 text-slate-800 px-2 py-1 rounded-md text-xs">
                    Not Specified 210
                  </span>
                </div>
              </div>
              <img
                src={BarChart}
                alt="Bar Chart"
                className="w-full h-[160px] object-contain"
              />
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white rounded-[16px] p-4 shadow">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg text-slate-900 font-semibold">
                Activities
              </h2>
              <div className="flex -space-x-4">
                <img
                  src={User1}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src={User2}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src={User3}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-900">
                  +2
                </div>
              </div>
            </div>

            {[
              // Sample activity data
              {
                title: "Invited Team Member",
                message: (
                  <>
                    <strong>Nina J.</strong> invited <strong>John D.</strong> to
                    collaborate on <strong>“New Feature Feedback Form”</strong>.
                  </>
                ),
                date: "May 28, 2025 – 10:42 AM",
              },
              {
                title: "Updated Survey",
                message: (
                  <>
                    <strong>You</strong> updated{" "}
                    <strong>“Market Research - Eco Products”</strong>.
                  </>
                ),
                date: "May 24, 2025 – 06:58 PM",
              },
            ].map((activity, index, arr) => (
              <div key={index} className="mb-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  {activity.title}
                </h3>
                <p className="text-sm text-slate-800">{activity.message}</p>
                <p className="text-xs text-indigo-500 text-right mt-1">
                  {activity.date}
                </p>
                {index < arr.length - 1 && (
                  <div className="h-px bg-indigo-500 mt-2 mb-4 w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
