// import { useState } from "react";
// import { Link, NavLink, Outlet } from "react-router";
// import { FiMenu } from "react-icons/fi";
// import { FaUser, FaMoneyBill, FaBook, FaChalkboardTeacher } from "react-icons/fa";
// import { MdPostAdd, MdOutlinePayments } from "react-icons/md";
// import { RiDashboardFill } from "react-icons/ri";
// import { HiUsers } from "react-icons/hi";

// const fakeUser = {
//   role: "admin",
//   name: "Mahmudul Hasan",
//   photo: "https://i.ibb.co/ZJ7C4wJ/default-avatar.png",
// };

// const DashboardLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const role = fakeUser.role;

//   const studentMenu = [
//     { path: "my-tuitions", label: "My Tuitions", icon: <FaBook /> },
//     { path: "post-tuition", label: "Post New Tuition", icon: <MdPostAdd /> },
//     { path: "applied-tutors", label: "Applied Tutors", icon: <FaChalkboardTeacher /> },
//     { path: "payments", label: "Payments", icon: <MdOutlinePayments /> },
//   ];

//   const tutorMenu = [
//     { path: "my-applications", label: "My Applications", icon: <FaChalkboardTeacher /> },
//     { path: "ongoing-tuitions", label: "Ongoing Tuitions", icon: <FaBook /> },
//     { path: "revenue-history", label: "Revenue History", icon: <FaMoneyBill /> },
//   ];

//   const adminMenu = [
//     { path: "statistics", label: "Admin Statistics", icon: <RiDashboardFill /> },
//     { path: "manage-users", label: "Manage Users", icon: <HiUsers /> },
//     { path: "manage-tuitions", label: "Manage Tuitions", icon: <FaBook /> },
//   ];

//   const commonMenu = [{ path: "profile", label: "Profile", icon: <FaUser /> }];

//   const currentMenu =
//     role === "student" ? studentMenu : role === "tutor" ? tutorMenu : adminMenu;

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* --------------------------
//           SIDEBAR
//       -------------------------- */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-64 p-6 shadow-xl transition-all duration-300 z-50
//           bg-[#0A1F4A] text-white border-r border-blue-900
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
//           lg:translate-x-0`}
//       >
//         <Link
//           to="/"
//           className="text-3xl font-bold tracking-wide mb-10 block text-white"
//         >
//           Tuition BD
//         </Link>

//         <p className="text-blue-200 mb-4 capitalize">Role: {role}</p>

//         <nav className="space-y-2">
//           {currentMenu.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-3 rounded-lg font-medium
//                 transition-all duration-300
//                 ${
//                   isActive
//                     ? "bg-white text-[#0A1F4A] shadow-lg"
//                     : "hover:bg-blue-700/40"
//                 }`
//               }
//             >
//               <span className="text-lg">{item.icon}</span>
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="mt-8 border-t border-blue-700 pt-6">
//           <h3 className="text-blue-200 mb-2 text-sm tracking-wide">GENERAL</h3>
//           <nav className="space-y-2">
//             {commonMenu.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 rounded-lg font-medium
//                   transition-all duration-300
//                   ${
//                     isActive
//                       ? "bg-white text-[#0A1F4A] shadow-lg"
//                       : "hover:bg-blue-700/40"
//                   }`
//                 }
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 {item.label}
//               </NavLink>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       {/* --------------------------
//           MAIN CONTENT
//       -------------------------- */}
//       <div className="flex-1 ml-0 lg:ml-64">

//         {/* TOP NAV */}
//         <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-40">
//           <button
//             className="lg:hidden text-2xl text-[#0A1F4A]"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             <FiMenu />
//           </button>

//           <div className="flex items-center gap-3">
//             <img
//               src={fakeUser.photo}
//               className="w-11 h-11 rounded-full border-2 border-[#0A3AFF]"
//             />
//             <span className="font-semibold text-[#0A1F4A]">
//               {fakeUser.name}
//             </span>
//           </div>
//         </header>

//         {/* CONTENT */}
//         <main className="p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FiMenu } from "react-icons/fi";
import {
  FaUser,
  FaMoneyBill,
  FaBook,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdPostAdd, MdOutlinePayments, MdHome } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";


const fakeUser = {
  role: "admin",
  name: "Mahmudul Hasan",
  photo: "https://i.ibb.co/ZJ7C4wJ/default-avatar.png",
};


const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const role = fakeUser.role;

  const studentMenu = [
    { path: "my-tuitions", label: "My Tuitions", icon: <FaBook /> },
    { path: "post-tuition", label: "Post New Tuition", icon: <MdPostAdd /> },
    {
      path: "applied-tutors",
      label: "Applied Tutors",
      icon: <FaChalkboardTeacher />,
    },
    { path: "payments", label: "Payments", icon: <MdOutlinePayments /> },
  ];

  const tutorMenu = [
    { path: "tuition-listing-page", label: "Tuition Listing Page", icon: <FaBook /> },
    {
      path: "my-applications",
      label: "My Applications",
      icon: <FaChalkboardTeacher />,
    },
    { path: "ongoing-tuitions", label: "Ongoing Tuitions", icon: <FaBook /> },
    {
      path: "revenue-history",
      label: "Revenue History",
      icon: <FaMoneyBill />,
    },
  ];

  const adminMenu = [
    {
      path: "statistics",
      label: "Admin Statistics",
      icon: <RiDashboardFill />,
    },
    { path: "manage-users", label: "Manage Users", icon: <HiUsers /> },
    { path: "manage-tuitions", label: "Manage Tuitions", icon: <FaBook /> },
  ];

  const commonMenu = [{ path: "profile", label: "Profile", icon: <FaUser /> }];

  const currentMenu =
    role === "student" ? studentMenu : role === "tutor" ? tutorMenu : adminMenu;

  // Close sidebar on mobile click
  const handleMenuClick = () => {
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 p-6 shadow-xl transition-transform duration-300 z-50
          bg-[#0A1F4A] text-white border-r border-blue-900
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          lg:translate-x-0
        `}
      >
        <Link
          to="/"
          onClick={handleMenuClick}
          className="flex items-center gap-3 text-3xl bg-blue-900 px-4 py-2 rounded-lg font-bold tracking-wide mb-10 text-white"
        >
          <MdHome size={28} />
          <span className="text-2xl">Tuition BD</span>
        </Link>

        <p className="text-blue-200 mb-4 capitalize text-sm sm:text-base">
          Role: {role}
        </p>

        <nav className="space-y-2">
          {currentMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleMenuClick} // close on mobile
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium
                 transition-all duration-300
                 ${
                   isActive
                     ? "bg-white text-[#0A1F4A] shadow-lg"
                     : "hover:bg-blue-700/40"
                 }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="truncate">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 border-t border-blue-700 pt-6">
          <h3 className="text-blue-200 mb-2 text-sm tracking-wide">GENERAL</h3>
          <nav className="space-y-2">
            {commonMenu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleMenuClick}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-medium
                   transition-all duration-300
                   ${
                     isActive
                       ? "bg-white text-[#0A1F4A] shadow-lg"
                       : "hover:bg-blue-700/40"
                   }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-0 lg:ml-64 flex flex-col min-h-screen">
        <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-40">
          <button
            className="lg:hidden text-2xl text-[#0A1F4A]"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FiMenu />
          </button>

          <div className="flex items-center gap-3">
            <img
              src={fakeUser.photo}
              className="w-11 h-11 rounded-full border-2 border-[#0A3AFF]"
            />
            <span className="font-semibold text-[#0A1F4A] truncate max-w-xs sm:max-w-sm">
              {fakeUser.name}
            </span>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
