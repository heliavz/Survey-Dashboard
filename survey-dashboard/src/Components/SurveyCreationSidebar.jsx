import { useState } from "react";
import ArrowdownIcon from "../assets/Arrow_down.png";
import ArrowupIcon from "../assets/Arrow_up.png";

export default function SurveyCreationSidebar({ user }) {
  const [openSection, setOpenSection] = useState("questions");

  const questions = [
    { name: "Single Choice", icon: "🔘" },
    { name: "Multiple Choice", icon: "☑️" },
    { name: "Short Answer", icon: "✏️" },
    { name: "Long Answer", icon: "📝" },
    { name: "Upload", icon: "📤" },
  ];

  const elements = [
    { name: "Text", icon: "🔤" },
    { name: "Link", icon: "🔗" },
    { name: "Media", icon: "🖼️" },
    { name: "Rating", icon: "⭐" },
    { name: "Diagram", icon: "📊" },
  ];

  const Section = ({ title, items }) => {
    const isOpen = openSection === title;

    return (
      <div>
        <button
          className="w-full flex justify-between items-center bg-purple-500 text-white px-4 py-2 rounded-[12px] mt-4"
          onClick={() => setOpenSection(isOpen ? "" : title)}
        >
          <span className="capitalize">{title}</span>
          <img
            src={isOpen ? ArrowupIcon : ArrowdownIcon}
            alt="Toggle"
            className="w-4 h-4"
          />
        </button>
        {isOpen && (
          <div className="mt-2 flex flex-col gap-2 text-black">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 px-4 py-2 hover:bg-purple-100 rounded-md cursor-pointer"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-[348px] bg-white h-screen shadow-lg flex flex-col p-4">
      {/* User Section */}
      <div className="mb-6">
        <p className="font-semibold text-slate-900">
          {user?.name || "Sarah Miller"}
        </p>
        <p className="text-sm text-gray-500">
          {user?.email || "sarahmiller@gmail.com"}
        </p>
      </div>

      <Section title="questions" items={questions} />
      <Section title="elements" items={elements} />
    </aside>
  );
}
