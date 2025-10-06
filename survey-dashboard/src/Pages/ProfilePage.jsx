import { useState, useEffect } from "react";
import { Camera, Save, X } from "lucide-react";
import toast from "react-hot-toast";
import profilePic from "../assets/profile.jpg";

export default function ProfilePage() {
  const storedData = JSON.parse(localStorage.getItem("profileData")) || {
    fullName: "Sarah Miller",
    email: "sarahmiller@gmail.com",
    phone: "+49 152 12345678",
    role: "UX Designer",
    company: "Echo",
  };

  const [formData, setFormData] = useState(storedData);
  const [originalData, setOriginalData] = useState(storedData);
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

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setIsDirty(true);
  };

  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(formData));
    setOriginalData(formData);
    setIsDirty(false);
    toast.success("Profile information saved successfully!");
  };

  const handleCancel = () => {
    if (isDirty) {
      const confirm = window.confirm("You have unsaved changes. Discard them?");
      if (!confirm) return;
    }
    setFormData(originalData);
    setIsDirty(false);
    toast("Changes reverted.");
  };

  return (
    <div className="p-6 sm:p-10 flex justify-center text-slate-900">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4 sm:mb-0">
            Profile Information
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

        {/* Profile Picture */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            <img
              src={profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-lg object-cover"
            />
            <button
              className="absolute bottom-2 right-2 bg-yellow-200 p-2 rounded-full shadow hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-400 cursor-pointer transition-all"
              aria-label="Change profile picture"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Personal Details */}
        <hr className="my-6 border-gray-300" />
        <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              disabled
              className="w-full border border-gray-300 bg-gray-100 text-gray-500 rounded-lg px-4 py-2 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {/* Organization */}
        <hr className="my-6 border-gray-300" />
        <h3 className="text-lg font-semibold mb-4">Organization</h3>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm text-gray-500 mb-2">Role</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-2">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {/* Security */}
        <hr className="my-6 border-gray-300" />
        <h3 className="text-lg font-semibold mb-4">Security</h3>
        <button className="border border-black text-black px-6 py-2 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-indigo-400 cursor-pointer transition-all">
          Change My Password
        </button>
      </div>
    </div>
  );
}
