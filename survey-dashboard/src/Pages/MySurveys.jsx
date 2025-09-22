import { Link } from "react-router-dom";
import SearchIcon from "../assets/Search.png";
import ArrowdownIcon from "../assets/Arrow_down.png";

export default function MySurveys() {
  const surveys = [
    {
      name: "New Feature Feedback",
      date: "May 30, 2025",
      time: "09:00 AM",
      rate: 80,
      responses: 234,
      status: "open",
    },
    {
      name: "Website Usability Study",
      date: "May 21, 2025",
      time: "11:30 AM",
      rate: 65,
      responses: 145,
      status: "draft",
    },
    {
      name: "Market Research - Eco",
      date: "May 1, 2025",
      time: "08:00 AM",
      rate: 72,
      responses: 170,
      status: "close",
    },
    {
      name: "Customer Feedback Survey",
      date: "Apr 25, 2025",
      time: "10:15 AM",
      rate: 90,
      responses: 200,
      status: "open",
    },
    {
      name: "UX Testing Survey",
      date: "Apr 18, 2025",
      time: "02:30 PM",
      rate: 55,
      responses: 120,
      status: "draft",
    },
    {
      name: "Product Launch Feedback",
      date: "Apr 10, 2025",
      time: "09:45 AM",
      rate: 75,
      responses: 180,
      status: "open",
    },
    {
      name: "Feature Prioritization",
      date: "Mar 30, 2025",
      time: "03:00 PM",
      rate: 60,
      responses: 150,
      status: "close",
    },
    {
      name: "Marketing Survey",
      date: "Mar 25, 2025",
      time: "11:00 AM",
      rate: 82,
      responses: 210,
      status: "open",
    },
    {
      name: "Support Feedback",
      date: "Mar 20, 2025",
      time: "01:30 PM",
      rate: 68,
      responses: 130,
      status: "draft",
    },
    {
      name: "Beta Test Feedback",
      date: "Mar 15, 2025",
      time: "04:00 PM",
      rate: 77,
      responses: 160,
      status: "open",
    },
  ];

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
    <div className="p-6 flex flex-col gap-6 transition-all duration-300 h-full">
      <h1 className="text-2xl font-bold text-white">My Surveys</h1>

      {/* Search bar */}
      <div className="relative w-full h-14 border border-indigo-200 bg-white rounded-[16px] flex items-center p-4">
        <img src={SearchIcon} alt="Search" className="w-5 h-5 mr-4" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 h-full border-none focus:outline-none text-slate-900 bg-transparent"
        />
        <div className="flex items-center gap-2 pr-2 bg-indigo-200 p-2 rounded-[16px]">
          <span className="text-sm text-slate-900">All</span>
          <img src={ArrowdownIcon} alt="Dropdown" className="w-4 h-4" />
        </div>
      </div>

      {/* Surveys Card */}
      <div className="bg-white rounded-[16px] w-full p-4 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-slate-900">Surveys</h2>
          <div className="flex items-center gap-2 bg-indigo-200 px-3 py-1 rounded-[16px] cursor-pointer">
            <span className="text-sm text-slate-900">All</span>
            <img src={ArrowdownIcon} alt="Dropdown" className="w-4 h-4" />
          </div>
        </div>

        {/* Table Header */}
        <div className="bg-indigo-200 rounded-[32px] grid grid-cols-[1fr_0.5fr_1.5fr_0.45fr_0.30fr_1.5fr] px-4 py-2 mb-2 text-sm font-medium text-slate-900 gap-x-4">
          <span className="flex justify-center">Name</span>
          <span className="flex justify-center">Date</span>
          <span className="flex justify-center">Completion Rate</span>
          <span className="flex justify-center">Responses</span>
          <span className="flex justify-center">Status</span>
          <span className="flex justify-center">Actions</span>
        </div>

        {/* Table Rows */}
        {surveys.map((survey, index) => (
          <div key={index}>
            <div className="grid grid-cols-[1fr_0.5fr_1.5fr_0.45fr_0.30fr_1.5fr] items-center text-sm text-slate-900 px-4 py-2 gap-x-4">
              <span className="hover:cursor-pointer hover:text-indigo-600">
                <Link to={`/survey/${encodeURIComponent(survey.name)}`}>
                  {survey.name}
                </Link>
              </span>
              <div className="flex flex-col leading-tight text-center">
                <span>{survey.date}</span>
                <span className="text-xs text-slate-500">{survey.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-400 rounded-full"
                    style={{ width: `${survey.rate}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{survey.rate}%</span>
              </div>
              <span className="text-center">{survey.responses}</span>

              {/* Status Button */}
              <div
                className={`flex items-center justify-center gap-2 text-xs font-medium rounded-full ${getStatusStyles(
                  survey.status
                )} px-2 py-1 cursor-pointer`}
              >
                <span>{survey.status}</span>
                <img src={ArrowdownIcon} alt="Dropdown" className="w-3 h-3" />
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-4">
                <button className="text-red-600 text-xs font-semibold hover:cursor-pointer hover:text-red-400">
                  Delete
                </button>
                <button className="text-purple-600 text-xs font-semibold hover:cursor-pointer hover:text-purple-400 ">
                  Edit
                </button>
                <button className="text-slate-900 text-xs font-semibold hover:cursor-pointer hover:text-slate-400">
                  Export
                </button>
              </div>
            </div>
            {index < surveys.length - 1 && (
              <div className="h-px bg-indigo-500 mx-4" />
            )}
          </div>
        ))}

        {/* Show more */}
        <div className="flex justify-center mt-4">
          <button className="bg-yellow-200 cursor-pointer hover:bg-yellow-300 active:bg-yellow-400 transition-colors duration-200 text-slate-900 px-4 py-2 rounded-[32px] text-sm font-medium">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
