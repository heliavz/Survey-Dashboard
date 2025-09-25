import { useState } from "react";
import SearchIcon from "../assets/Search.png";
import LikeIcon from "../assets/Like.png";
import PeopleIcon from "../assets/People.png";
import EventIcon from "../assets/Event.png";
import ResearchIcon from "../assets/Research.png";
import HandshakeIcon from "../assets/Handshake.png";
import InterviewIcon from "../assets/Interview.png";
import FormIcon from "../assets/Form.png";
import TestIcon from "../assets/Test.png";
import RequestIcon from "../assets/Request.png";

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Feedback",
    "UX Testing",
    "General",
    "Popular",
    "New",
    "Recommended",
    "HR",
    "Events",
    "Research",
  ];

  const templates = [
    {
      id: 1,
      icon: LikeIcon,
      categories: ["HR"],
      title: "Employee Feedback",
      desc: "Collect insights from employees.",
      uses: "2.3k",
    },
    {
      id: 2,
      icon: PeopleIcon,
      categories: ["Recommended", "Events"],
      title: "Team Gathering",
      desc: "Plan your next team activity.",
      uses: "1.8k",
    },
    {
      id: 3,
      icon: ResearchIcon,
      categories: ["Research"],
      title: "Usability Test",
      desc: "Test new product features.",
      uses: "3.1k",
    },
    {
      id: 4,
      icon: InterviewIcon,
      categories: ["HR"],
      title: "Interview Feedback",
      desc: "Evaluate candidate interviews.",
      uses: "900",
    },
    {
      id: 5,
      icon: EventIcon,
      categories: ["Events"],
      title: "Event Signup",
      desc: "Register participants quickly.",
      uses: "5.2k",
    },
  ];

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.categories.includes(activeCategory));

  return (
    <div className="p-6 flex flex-col gap-6 h-full">
      <h1 className="text-2xl font-bold text-white">Templates</h1>

      {/* Search Bar */}
      <div className="relative w-full h-14 border border-indigo-200 bg-white rounded-[16px] flex items-center px-4 gap-3">
        <img src={SearchIcon} alt="Search" className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search templates..."
          className="flex-1 h-full border-none focus:outline-none text-slate-900 bg-transparent"
        />
        <button className="p-2 hover:bg-indigo-100 rounded-lg transition-colors"></button>
      </div>

      {/* Category Tags */}
      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border hover:bg-purple-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-purple-500 text-white border-purple-500"
                : "bg-white text-slate-900 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Template Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-[16px] shadow p-4 flex flex-col gap-3 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100">
                <img src={t.icon} alt={t.title} className="w-6 h-6" />
              </div>
              <div className="flex gap-1 flex-wrap">
                {t.categories.map((c) => (
                  <span
                    key={c}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                {t.title}
              </h3>
              <p className="text-sm text-gray-600">{t.desc}</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              {t.uses} uses
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
