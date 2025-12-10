import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const [role, setRole] = useState("Student");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;

    try {
      const result = await createUser(email, password);

      await updateUserProfile(
        name,
        "https://lh3.googleusercontent.com/a/ACg8ocKUMU3XIX-JSUB80Gj_bYIWfYudpibgdwZE1xqmAGxHASgdvCZZ=s96-c"
      );

      console.log({ ...result, role, phone });

      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-lime-50 flex items-center justify-center px-4">

      {/* SignUp Card */}
      <div className="w-full max-w-md bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.06)] rounded-3xl py-10 px-8">

        {/* Branding */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">eT</span>
          </div>
          <h1 className="mt-6 text-3xl font-semibold text-gray-800 tracking-tight">
            Create Your Account
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Register as Student or Tutor
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full py-3 px-4 bg-gray-100/70 border border-gray-200 rounded-xl text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 outline-none transition-all"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Register As
            </label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full py-3 px-4 bg-gray-100/70 border border-gray-200 rounded-xl text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 outline-none transition-all"
            >
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+880 1XXXXXXXXX"
              required
              className="w-full py-3 px-4 bg-gray-100/70 border border-gray-200 rounded-xl text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              required
              className="w-full py-3 px-4 bg-gray-100/70 border border-gray-200 rounded-xl text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="********"
              className="w-full py-3 px-4 bg-gray-100/70 border border-gray-200 rounded-xl text-gray-700 shadow-sm focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 outline-none transition-all"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300 hover:opacity-95"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Signup */}
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center cursor-pointer gap-3 py-3 border border-gray-300 hover:bg-gray-100 rounded-xl transition-all"
        >
          <FcGoogle size={26} />
          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
