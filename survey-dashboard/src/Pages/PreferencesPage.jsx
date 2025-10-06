import { useState, useEffect } from "react";
import { Save, X, Check } from "lucide-react";
import toast from "react-hot-toast";

export default function PreferencesPage() {
  const savedPrefs = JSON.parse(localStorage.getItem("preferencesData")) || {};
  const [notifications, setNotifications] = useState(savedPrefs);
  const [original, setOriginal] = useState(savedPrefs);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const toggleNotification = (key) => {
    setNotifications((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      setIsDirty(true);
      return updated;
    });
  };

  const handleSave = () => {
    localStorage.setItem("preferencesData", JSON.stringify(notifications));
    setOriginal(notifications);
    setIsDirty(false);
    toast.success("Preferences saved successfully!");
  };

  const handleCancel = () => {
    if (isDirty) {
      const confirm = window.confirm("You have unsaved changes. Discard them?");
      if (!confirm) return;
    }
    setNotifications(original);
    setIsDirty(false);
    toast("Changes reverted.");
  };

  const notificationSections = [
    {
      title: "Surveys I Create",
      options: [
        "Receive confirmation when a new survey is published.",
        "Receive responses as they come in.",
        "Get a daily/weekly summary of responses.",
        "Be notified when my survey reaches its response goal.",
        "Be notified when my survey is closed.",
      ],
    },
    {
      title: "Surveys I Participate In",
      options: [
        "Get a confirmation after submitting a response.",
        "Be notified if the survey creator shares results.",
        "Be notified if I’m invited to participate in a new survey.",
      ],
    },
    {
      title: "Team & Collaboration",
      options: [
        "Receive an email when someone invites me to join a team.",
        "Be notified when I’m added/removed from a survey project.",
        "Get updates when teammates make changes to a shared survey.",
      ],
    },
    {
      title: "Account & General",
      options: [
        "Security alerts (e.g., login from a new device).",
        "Updates about new features or announcements from the platform.",
      ],
    },
  ];

  return (
    <div className="p-6 sm:p-10 flex justify-center text-slate-900">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4 sm:mb-0">
            Preferences
          </h2>
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 bg-[#DDE1FF] hover:bg-[#c9ceff] cursor-pointer text-black font-medium px-4 py-2 rounded-xl transition-all focus:ring-2 focus:ring-indigo-400"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-indigo-200 hover:bg-indigo-300 cursor-pointer text-black font-medium px-4 py-2 rounded-xl transition-all focus:ring-2 focus:ring-indigo-400"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>

        {/* Language & Timezone */}
        <h3 className="text-lg font-semibold mb-4">Language & Timezone</h3>
        <div className="grid sm:grid-cols-2 gap-8 mb-6">
          <div>
            <label className="block text-sm text-gray-500 mb-2">Language</label>
            <select className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 cursor-pointer">
              <option>English (US)</option>
              <option>German (DE)</option>
              <option>French (FR)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-2">Timezone</label>
            <select className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 cursor-pointer">
              <option>Central European Time (CET/CEST)</option>
              <option>Greenwich Mean Time (GMT)</option>
              <option>Eastern Time (ET)</option>
            </select>
          </div>
        </div>

        {/* Notifications */}
        <hr className="my-6 border-gray-300" />
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>

        {notificationSections.map((section, i) => (
          <div key={i} className="mb-6">
            <h4 className="font-medium mb-4">{section.title}</h4>
            <div className="grid sm:grid-cols-2 gap-y-3">
              {section.options.map((opt) => (
                <label
                  key={opt}
                  onClick={() => toggleNotification(opt)}
                  className="flex items-center gap-2 cursor-pointer group select-none"
                >
                  <div
                    className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all ${
                      notifications[opt]
                        ? "bg-indigo-200 border-indigo-300"
                        : "border-yellow-200"
                    }`}
                  >
                    {notifications[opt] && (
                      <Check className="w-4 h-4 text-black" />
                    )}
                  </div>
                  <span className="text-slate-800 group-hover:text-indigo-600 transition-all">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
            {i < notificationSections.length - 1 && (
              <hr className="my-6 mx-auto w-2/3 border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
