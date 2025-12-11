
import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/logo-flat1.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // NavLink style
  const navClass =
    "px-4 py-2 text-[15px] font-medium hover:text-blue-600 transition";

  return (
    <div className="bg-white sticky top-0 z-50 shadow-md border-b border-blue-100">
      <Container>
        <div className="flex items-center justify-between w-full py-2">

          {/* LEFT — LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" width="48" />
          </Link>

          {/* MIDDLE — NAV LINKS */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/tuitions" className={navClass}>
              Tuitions
            </NavLink>
            <NavLink to="/tutors" className={navClass}>
              Tutors
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </div>

          {/* RIGHT — AUTH DROPDOWN */}
          <div className="relative">
            <div className="flex items-center gap-3">

              {/* Dropdown Button */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 border border-blue-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-lg transition hover:bg-blue-50"
              >
                <AiOutlineMenu className="text-[22px] text-blue-700" />

                {/* Avatar */}
                <div className="hidden md:block">
                  <img
                    src={user?.photoURL || avatarImg}
                    alt="profile"
                    className="rounded-full w-8 h-8 border border-blue-300"
                  />
                </div>
              </div>
            </div>

            {/* DROPDOWN MENU */}
            {isOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-xl border border-blue-100 overflow-hidden z-50">
                <div className="flex flex-col py-2">

                  {/* Mobile Nav Items */}
                  <NavLink to="/" className="md:hidden px-4 py-2 hover:bg-blue-50 transition">
                    Home
                  </NavLink>
                  <NavLink to="/tuitions" className="md:hidden px-4 py-2 hover:bg-blue-50 transition">
                    Tuitions
                  </NavLink>
                  <NavLink to="/tutors" className="md:hidden px-4 py-2 hover:bg-blue-50 transition">
                    Tutors
                  </NavLink>
                  <NavLink to="/about" className="md:hidden px-4 py-2 hover:bg-blue-50 transition">
                    About
                  </NavLink>
                  <NavLink to="/contact" className="md:hidden px-4 py-2 hover:bg-blue-50 transition">
                    Contact
                  </NavLink>

                  {/* Auth Items */}
                  {user ? (
                    <>
                      <Link
                        to="/dashboard"
                        className="px-4 py-2 hover:bg-blue-50 transition"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={logOut}
                        className="text-left px-4 py-2 hover:bg-red-50 transition text-red-600"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-4 py-2 hover:bg-blue-50 transition"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="px-4 py-2 hover:bg-blue-50 transition font-medium text-blue-700"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

