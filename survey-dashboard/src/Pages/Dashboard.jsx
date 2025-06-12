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

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-col gap-6 transition-all duration-300">
      <h1 className="text-2xl font-bold text-white">Good Morning, Sarah!</h1>

      <div className="relative w-[1028px] h-14 border border-indigo-200 bg-white rounded-[16px] flex items-center px-4">
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

      <div className="flex gap-4">
        {[
          {
            title: "Create New Survey",
            icon: AddIcon,
            bg: "bg-yellow-200",
          },
          {
            title: "Explore Templates",
            icon: TemplatesIcon,
            bg: "bg-indigo-200",
          },
          {
            title: "Start with AI",
            icon: AiIcon,
            bg: "bg-emerald-200",
          },
        ].map(({ title, icon, bg }) => (
          <div
            key={title}
            className="w-[332px] h-[80px] bg-white text-slate-900 rounded-[32px] flex items-center gap-4 px-6 transition-all duration-300"
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

      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {/* Feedback Form Card */}
          <div className="bg-white rounded-[16px] w-[680px] h-[264px] p-4 shadow relative flex">
            <div className="w-full">
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  New Feature Feedback Form
                  <img src={EditIcon} alt="Edit" className="w-4 h-4" />
                </h2>
                <button className="bg-emerald-100 text-emerald-800 text-sm px-4 py-1 rounded-full">
                  Open
                </button>
              </div>

              <div className="flex mt-2 h-[180px]">
                {/* Left side of the line */}
                <div className="flex w-1/2 pr-4 items-center">
                  <img
                    src={ImgFeedback}
                    alt="Feedback"
                    className="w-[163px] h-[143px] object-cover rounded"
                  />
                  <div className="ml-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img src={PositiveIcon} className="w-4 h-4" />
                      <span className="bg-green-100 px-2 py-1 rounded text-green-800 text-xs">
                        32% Positive
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={NegativeIcon} className="w-4 h-4" />
                      <span className="bg-red-100 px-2 py-1 rounded text-red-800 text-xs">
                        45% Negative
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={NeutralIcon} className="w-4 h-4" />
                      <span className="bg-indigo-100 px-2 py-1 rounded text-indigo-800 text-xs">
                        23% Neutral
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-px bg-indigo-500 mx-4" />

                {/* Right side of the line */}
                <div className="w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold mb-2">
                      Responses (Age)
                    </h3>
                    <div className="flex gap-2 mb-2">
                      <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded-md text-xs">
                        Female 380
                      </span>
                      <span className="bg-slate-200 text-slate-800 px-2 py-1 rounded-md text-xs">
                        Male 410
                      </span>
                      <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md text-xs">
                        Not Specified 210
                      </span>
                    </div>
                    <img
                      src={AgeGraph}
                      alt="Graph"
                      className="w-[296px] h-[93px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[16px] w-[680px] h-[417px] p-4 shadow">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Recent Surveys
            </h2>
            {/* content */}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-[16px] w-[332px] h-[117px] p-4 flex items-center justify-center relative">
            <div className="w-1/2 flex flex-col items-center justify-center pr-4">
              <p className="text-sm text-slate-900 font-medium">Open Survey</p>
              <p className="text-xl font-bold">03</p>
            </div>
            <div className="w-px bg-slate-300 h-full" />
            <div className="w-1/2 flex flex-col items-center justify-center pl-4">
              <p className="text-sm text-slate-900 font-medium">Draft Survey</p>
              <p className="text-xl font-bold">01</p>
            </div>
          </div>

          <div className="bg-white rounded-[16px] w-[332px] h-[564px] p-4 shadow">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Recent Activities
            </h2>
            {/* content*/}
          </div>
        </div>
      </div>
    </div>
  );
}
