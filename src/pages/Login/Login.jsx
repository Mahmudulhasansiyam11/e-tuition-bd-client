import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  // Loading Screen
  if (loading) return <LoadingSpinner />;

  // Redirect if logged in
  if (user) return <Navigate to={from} replace={true} />;

  // HANDLE EMAIL LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  // HANDLE GOOGLE LOGIN
  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-lime-50 flex items-center justify-center px-4">

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.06)] rounded-3xl py-10 px-8">

        {/* Branding */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">eT</span>
          </div>
          <h1 className="mt-6 text-3xl font-semibold text-gray-800 tracking-tight">
            Login to Your Account
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Continue your learning journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300 hover:opacity-95"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin mx-auto text-white" size={26} />
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-3 text-right">
          <button className="text-gray-500 text-sm hover:text-emerald-600 hover:underline">
            Forgot password?
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <div
          onClick={handleGoogle}
          className="flex items-center justify-center cursor-pointer gap-3 py-3 border border-gray-300 hover:bg-gray-100 rounded-xl transition-all"
        >
          <FcGoogle size={26} />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </div>

        {/* Signup Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            state={from}
            className="text-emerald-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
           <Link
            to="/"
            state={from}
            className="text-emerald-600 ml-1 font-semibold hover:underline"
          >
            Home
          </Link>
        </p>

        
      </div>
    </div>
  );
};

export default Login;
