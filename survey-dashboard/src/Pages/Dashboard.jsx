import AddIcon from "../assets/Add.png";
import TemplatesIcon from "../assets/Templates.png";
import AiIcon from "../assets/AI.png";
import SearchIcon from "../assets/Search.png";
import ArrowdownIcon from "../assets/Arrow_down.png";

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">Good Morning, Sarah!</h1>

      <div className="relative w-[1028px] h-14 border border-indigo-200 bg-white rounded-[8px] flex items-center px-4">
        <img src={SearchIcon} alt="Search" className="w-5 h-5 mr-4" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 h-full border-none focus:outline-none text-slate-900 bg-transparent"
        />
        <div className="flex items-center gap-2 pr-2">
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
            className="w-[332px] h-[80px] bg-white text-slate-900 rounded-[32px] flex items-center gap-4 px-6"
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
          <div className="bg-white rounded-[16px] w-[680px] h-[264px] p-4 shadow">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              New Feature Feedback Form
            </h2>
            {/* dditional content */}
          </div>
          <div className="bg-white rounded-[16px] w-[680px] h-[417px] p-4 shadow">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Recent Surveys
            </h2>
            {/* dditional content */}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-[16px] w-[332px] h-[117px] p-4 flex items-center justify-between">
            <div className="text-center">
              <p className="text-sm text-slate-900 font-medium">Open Survey</p>
              <p className="text-xl font-bold">03</p>
            </div>
            <div className="w-px bg-slate-300 h-full mx-4" />
            <div className="text-center">
              <p className="text-sm text-slate-900 font-medium">Draft Survey</p>
              <p className="text-xl font-bold">01</p>
            </div>
          </div>
          <div className="bg-white rounded-[16px] w-[332px] h-[564px] p-4 shadow">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Recent Activities
            </h2>
            {/* dditional content */}
          </div>
        </div>
      </div>
    </div>
  );
}
