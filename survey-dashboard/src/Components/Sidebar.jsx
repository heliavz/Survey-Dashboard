import profilePic from "../assets/Profile.jpg";
import DashboardIcon from "../assets/Dashboard.png";
import MySurveysIcon from "../assets/Surveys.png";
import ReportsIcon from "../assets/Reports.png";
import NotificationsIcon from "../assets/Notification.png";
import TemplatesIcon from "../assets/Templates_sidebar.png";
import HelpIcon from "../assets/Help.png";
import LogOutIcon from "../assets/Log_out.png";

const menuItems = [
  { label: "Dashboard", icon: DashboardIcon },
  { label: "My Surveys", icon: MySurveysIcon },
  { label: "Reports", icon: ReportsIcon },
  { label: "Notifications", icon: NotificationsIcon },
  { label: "Templates", icon: TemplatesIcon },
  { label: "Help", icon: HelpIcon },
];

export default function Sidebar() {
  return (
    <aside className="w-[348px] h-[1024px] bg-indigo-200 flex flex-col justify-between text-slate-900">
      {/* Top: Profile */}
      <div className="p-6">
        <div className="flex items-center gap-4">
          <img
            src={profilePic}
            alt="User"
            className="w-14 h-14 rounded-full "
          />
          <div>
            <p className="text-base font-semibold leading-tight">
              Sarah Miller
            </p>
            <p className="text-sm opacity-80">sarahmiller@email.com</p>
          </div>
        </div>
        <hr className="mt-6 mb-4 border-t border-white w-[284px]" />

        {/* Menu Items */}
        <nav className="flex flex-col gap-2 mt-2">
          {menuItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-4 h-12 w-[300px] rounded-[32px] ${
                index === 0 ? "bg-yellow-200" : ""
              }`}
            >
              <img
                src={item.icon}
                alt={`${item.label} Icon`}
                className="w-6 h-6"
              />
              <span className="text-slate-900">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom: Log Out */}
      <div className="pb-6 flex justify-center">
        <button className="flex items-center gap-2 px-6 py-2 bg-yellow-200 rounded-[32px] text-slate-900 font-semibold">
          <img src={LogOutIcon} alt="Log Out Icon" className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </aside>
  );
}
