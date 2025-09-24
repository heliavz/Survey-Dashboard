import { useState } from "react";
import SearchIcon from "../assets/Search.png";
import ArrowdownIcon from "../assets/Arrow_down.png";
import MoreIcon from "../assets/More.png";
import MessageIcon from "../assets/Message.png";
import ImportantIcon from "../assets/Star.png";
import ResponsesIcon from "../assets/Reports.png";
import MentionIcon from "../assets/Person.png";
import TimeIcon from "../assets/Clock.png";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All" },
    { name: "Unread", count: 4 },
    { name: "Archive" },
    { name: "Important", count: 1 },
  ];

  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New message from team",
      time: "23m ago",
      desc: "You have received a new message about your survey.",
      unread: true,
    },
    {
      id: 2,
      type: "important",
      title: "Survey deadline approaching",
      time: "1h ago",
      desc: "Your usability study closes in 24 hours.",
      unread: true,
    },
    {
      id: 3,
      type: "responses",
      title: "10 new responses",
      time: "3h ago",
      desc: "Your Beta Test Feedback survey has 10 new responses.",
      unread: false,
    },
    {
      id: 4,
      type: "mention",
      title: "You were mentioned",
      time: "5h ago",
      desc: "Helia mentioned you in comments of Product Launch survey.",
      unread: false,
    },
    {
      id: 5,
      type: "time",
      title: "Reminder: Meeting soon",
      time: "1d ago",
      desc: "Your scheduled feedback session starts in 1 hour.",
      unread: false,
    },
  ];

  const typeStyles = {
    message: "bg-[#A7E6C4]",
    important: "bg-[#F5DEA1]",
    responses: "bg-purple-200",
    mention: "bg-indigo-200",
    time: "bg-purple-200",
  };

  return (
    <div className="p-6 flex flex-col gap-6 transition-all duration-300 h-full">
      <h1 className="text-2xl font-bold text-white">Notifications</h1>

      {/* Search bar with extra buttons */}
      <div className="relative w-full h-14 border border-indigo-200 bg-white rounded-[16px] flex items-center px-4 gap-3">
        <img src={SearchIcon} alt="Search" className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 h-full border-none focus:outline-none text-slate-900 bg-transparent"
        />
        <button className="bg-white border border-indigo-200 px-4 py-2 rounded-[12px] text-sm font-medium text-slate-900 hover:bg-indigo-100 active:bg-indigo-200 transition-colors">
          Select
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-[12px] flex items-center gap-2 text-sm font-medium hover:bg-purple-600 active:bg-purple-700 transition-colors">
          <img src={ArrowdownIcon} alt="" className="w-4 h-4" />
          Mark all as read
        </button>
      </div>

      {/* Notifications Card */}
      <div className="bg-white rounded-[16px] w-full p-4 shadow">
        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200">
          <div className="flex gap-10 relative">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`pb-2 text-sm font-medium flex items-center gap-2 transition-colors hover:text-purple-500 cursor-pointer ${
                  activeTab === tab.name
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500"
                }`}
              >
                {tab.name}
                {tab.count && (
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="mt-4 flex flex-col divide-y">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`flex items-start justify-between px-2 py-3 rounded-lg transition-colors ${
                n.unread ? "bg-[#E7F7EE]" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex gap-3">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                    typeStyles[n.type]
                  }`}
                >
                  <img
                    src={
                      {
                        message: MessageIcon,
                        important: ImportantIcon,
                        responses: ResponsesIcon,
                        mention: MentionIcon,
                        time: TimeIcon,
                      }[n.type]
                    }
                    alt={n.type}
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm text-black ${
                        n.unread ? "font-bold" : "font-medium"
                      }`}
                    >
                      {n.title}
                    </span>
                    <span className="text-xs text-gray-500">{n.time}</span>
                  </div>
                  <p className="text-sm text-gray-700">{n.desc}</p>
                </div>
              </div>
              <button className="p-1 rounded hover:bg-gray-100 active:bg-gray-200 transition-colors">
                <img src={MoreIcon} alt="More" className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
