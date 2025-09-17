import AddIcon from "../assets/Add.png";
import TemplatesIcon from "../assets/Templates.png";
import AiIcon from "../assets/AI.png";
import SearchIcon from "../assets/Search.png";
import ArrowdownIcon from "../assets/Arrow_down.png";
import EditIcon from "../assets/Edit.png";
import ImgFeedback from "../assets/Pie_Chart.png";
import PositiveIcon from "../assets/Positive.png";
import NegativeIcon from "../assets/Negative.png";
import NeutralIcon from "../assets/Neutral.png";
import AgeGraph from "../assets/Bar_Chart.png";
import PieIcon from "../assets/Pie.png";

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-col gap-6 transition-all duration-300 h-full">
      <h1 className="text-2xl font-bold text-white">Good Morning, Sarah!</h1>

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

      {/* Action buttons */}
      <div className="flex gap-4 w-full">
        {[
          {
            title: "Create New Survey",
            icon: AddIcon,
            bg: "bg-yellow-200 rounded-[16px]",
          },
          {
            title: "Explore Templates",
            icon: TemplatesIcon,
            bg: "bg-indigo-200 rounded-[16px]",
          },
          {
            title: "Start with AI",
            icon: AiIcon,
            bg: "bg-emerald-200 rounded-[16px]",
          },
        ].map(({ title, icon, bg }) => (
          <div
            key={title}
            className="flex-1 min-w-[250px] h-[80px] bg-white text-slate-900 rounded-[32px] flex items-center gap-4 px-6 transition-all duration-300"
          >
            <div
              className={`w-10 h-10 rounded-[4px] flex items-center justify-center ${bg}`}
            >
              <img src={icon} alt={title} className="w-8 h-8" />
            </div>
            <p className="text-base font-semibold">{title}</p>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="flex gap-6 w-full items-stretch">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Feedback Form Card */}
          <div className="bg-white rounded-[16px] w-full p-4 shadow relative flex">
            <div className="w-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  New Feature Feedback Form
                  <img
                    src={EditIcon}
                    alt="Edit"
                    className="w-6 h-6 cursor-pointer"
                  />
                </h2>
                <button className="bg-emerald-100 text-emerald-800 text-sm px-4 py-1 rounded-full shadow-lg">
                  Open
                </button>
              </div>

              <div className="flex mt-2 h-[180px]">
                {/* Left side */}
                <div className="flex w-1/2 pr-4 items-center">
                  <img
                    src={ImgFeedback}
                    alt="Feedback"
                    className="w-[163px] h-[143px] object-cover rounded"
                  />
                  <div className="ml-4 flex flex-col gap-2">
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

                <div className="w-px bg-indigo-500 mx-4" />

                {/* Right side */}
                <div className="w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900">
                      Responses (Age)
                    </h3>
                    <div className="flex gap-2 mb-2 flex-wrap">
                      <span className="bg-yellow-200 text-slate-800 px-2 py-1 rounded-md text-xs">
                        Female 380
                      </span>
                      <span className=" bg-slate-800 text-white px-2 py-1 rounded-md text-xs">
                        Male 410
                      </span>
                      <span className="bg-slate-200 text-slate-800 px-2 py-1 rounded-md text-xs">
                        Not Specified 210
                      </span>
                    </div>
                    <img
                      src={AgeGraph}
                      alt="Graph"
                      className="w-full max-w-[296px] h-[93px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Surveys */}
          <div className="bg-white rounded-[16px] w-full p-4 shadow flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Surveys
              </h2>
              <div className="flex items-center gap-2 bg-[#DDE1FF] px-3 py-1 rounded-[16px] cursor-pointer">
                <span className="text-sm text-slate-900">All</span>
                <img src={ArrowdownIcon} alt="Dropdown" className="w-4 h-4" />
              </div>
            </div>

            {/* Table Header */}
            <div className="bg-[#DDE1FF] rounded-[32px] grid grid-cols-[2fr_1.5fr_2fr_1fr_auto] px-4 py-2 mb-2 text-sm font-medium text-slate-900">
              <span>Name</span>
              <span>Date</span>
              <span>Completion Rate</span>
              <span>Responses</span>
              <span></span>
            </div>

            {/* Rows */}
            {[
              {
                name: "New Feature Feedbac...",
                date: "May 30, 2025",
                time: "09:00 AM",
                rate: 80,
                responses: 234,
              },
              {
                name: "Website Usability Study",
                date: "May 21, 2025",
                time: "11:30 AM",
                rate: 65,
                responses: 145,
              },
              {
                name: "Market Research - Ec...",
                date: "May 1, 2025",
                time: "08:00 AM",
                rate: 72,
                responses: 170,
              },
            ].map((item, index, arr) => (
              <div key={index}>
                <div className="grid grid-cols-[2fr_1.5fr_2fr_1fr_auto] items-center text-sm text-slate-900 px-4 py-2">
                  <span>{item.name}</span>
                  <div className="flex flex-col leading-tight">
                    <span>{item.date}</span>
                    <span className="text-xs text-slate-500">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-400 rounded-full"
                        style={{ width: `${item.rate}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{item.rate}%</span>
                  </div>
                  <span className="text-center">{item.responses}</span>
                  <img src={PieIcon} alt="Chart" className="w-6 h-6" />
                </div>
                {index < arr.length - 1 && (
                  <div className="h-px bg-indigo-500 mx-4" /> // divider closer
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

        {/* Right column */}
        <div className="w-[332px] flex flex-col gap-4">
          {/* Open/Draft survey */}
          <div className="bg-white rounded-[16px] w-full h-[117px] p-4 flex items-center justify-center relative">
            <div className="w-1/2 flex flex-col items-center justify-center pr-4">
              <p className="text-m text-slate-900 font-medium">Open Survey</p>
              <p className="text-2xl font-bold text-slate-900">03</p>
            </div>
            <div className="w-px bg-slate-300 h-full" />
            <div className="w-1/2 flex flex-col items-center justify-center pl-4">
              <p className="text-m text-slate-900 font-medium">Draft Survey</p>
              <p className="text-2xl font-bold text-slate-900">01</p>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-[16px] w-full p-4 shadow flex-1">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Recent Activities
            </h2>
            {[
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
                title: "Updated Survey Description",
                message: (
                  <>
                    <strong>You</strong> updated the description of{" "}
                    <strong>“Market Research - Eco Products”</strong> to include
                    a thank you message.
                  </>
                ),
                date: "May 24, 2025 – 06:58 PM",
              },
              {
                title: "Changed Survey Name",
                message: (
                  <>
                    <strong>Alex K.</strong> renamed{" "}
                    <strong>“UX Feedback Form”</strong> to{" "}
                    <strong>“UX Feedback - Q2 Update”</strong>.
                  </>
                ),
                date: "May 24, 2025 – 10:42 AM",
              },
              {
                title: "Edited Question Type",
                message: (
                  <>
                    <strong>You</strong> changed question 2 from “Long Answer”
                    to “Short answer” in{" "}
                    <strong>“New Feature Feedback Form”</strong>.
                  </>
                ),
                date: "May 24, 2025 – 09:30 AM",
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

            {/* Show more */}
            <div className="flex justify-center mt-8">
              <button className="bg-yellow-200 cursor-pointer hover:bg-yellow-300 active:bg-yellow-400 transition-colors duration-200 text-slate-900 px-4 py-2 rounded-[32px] text-sm font-medium">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
