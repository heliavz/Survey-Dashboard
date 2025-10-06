import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShowMoreIcon from "../assets/Show_More.png";
import ProfileIcon from "../assets/Person.png";
import PreferencesIcon from "../assets/Preferences.png";
import LogoutIcon from "../assets/Log_out.png";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile picture (menu trigger) */}
      <button
        onClick={toggleMenu}
        className="flex items-center focus:outline-none hover:opacity-90 transition"
        aria-label="Open profile menu"
      >
        <img
          src={ShowMoreIcon}
          alt="Show more"
          className="w-10 h-10 rounded-full object-cover border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl py-2 z-50 border border-gray-100">
          <button
            onClick={() => {
              navigate("/profile");
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition cursor-pointer"
          >
            <img src={ProfileIcon} alt="My Profile" className="w-5 h-5" />
            <span className="text-gray-800 font-medium">My Profile</span>
          </button>

          <button
            onClick={() => {
              navigate("/preferences");
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition cursor-pointer"
          >
            <img src={PreferencesIcon} alt="Preferences" className="w-5 h-5" />
            <span className="text-gray-800 font-medium">Preferences</span>
          </button>

          <hr className="my-1 border-gray-200" />

          <button
            onClick={() => alert("You have been logged out.")}
            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-red-50 transition text-red-600  cursor-pointer"
          >
            <img src={LogoutIcon} alt="Log Out" className="w-5 h-5" />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      )}
    </div>
  );
}
