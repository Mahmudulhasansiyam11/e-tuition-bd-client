// import { Link, Navigate, useLocation, useNavigate } from 'react-router'
// import toast from 'react-hot-toast'
// import LoadingSpinner from '../../components/Shared/LoadingSpinner'
// import useAuth from '../../hooks/useAuth'
// import { FcGoogle } from 'react-icons/fc'
// import { TbFidgetSpinner } from 'react-icons/tb'

// const Login = () => {
//   const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth()
//   const navigate = useNavigate()
//   const location = useLocation()

//   const from = location.state || '/'

//   if (loading) return <LoadingSpinner />
//   if (user) return <Navigate to={from} replace={true} />

//   // form submit handler
//   const handleSubmit = async event => {
//     event.preventDefault()
//     const form = event.target
//     const email = form.email.value
//     const password = form.password.value

//     try {
//       //User Login
//       await signIn(email, password)

//       navigate(from, { replace: true })
//       toast.success('Login Successful')
//     } catch (err) {
//       console.log(err)
//       toast.error(err?.message)
//     }
//   }

//   // Handle Google Signin
//   const handleGoogleSignIn = async () => {
//     try {
//       //User Registration using google
//       await signInWithGoogle()
//       navigate(from, { replace: true })
//       toast.success('Login Successful')
//     } catch (err) {
//       console.log(err)
//       setLoading(false)
//       toast.error(err?.message)
//     }
//   }
//   return (
//     <div className='flex justify-center items-center min-h-screen bg-white'>
//       <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
//         <div className='mb-8 text-center'>
//           <h1 className='my-3 text-4xl font-bold'>Log In</h1>
//           <p className='text-sm text-gray-400'>
//             Sign in to access your account
//           </p>
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           noValidate=''
//           action=''
//           className='space-y-6 ng-untouched ng-pristine ng-valid'
//         >
//           <div className='space-y-4'>
//             <div>
//               <label htmlFor='email' className='block mb-2 text-sm'>
//                 Email address
//               </label>
//               <input
//                 type='email'
//                 name='email'
//                 id='email'
//                 required
//                 placeholder='Enter Your Email Here'
//                 className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
//                 data-temp-mail-org='0'
//               />
//             </div>
//             <div>
//               <div className='flex justify-between'>
//                 <label htmlFor='password' className='text-sm mb-2'>
//                   Password
//                 </label>
//               </div>
//               <input
//                 type='password'
//                 name='password'
//                 autoComplete='current-password'
//                 id='password'
//                 required
//                 placeholder='*******'
//                 className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type='submit'
//               className='bg-lime-500 w-full rounded-md py-3 text-white'
//             >
//               {loading ? (
//                 <TbFidgetSpinner className='animate-spin m-auto' />
//               ) : (
//                 'Continue'
//               )}
//             </button>
//           </div>
//         </form>
//         <div className='space-y-1'>
//           <button className='text-xs hover:underline hover:text-lime-500 text-gray-400 cursor-pointer'>
//             Forgot password?
//           </button>
//         </div>
//         <div className='flex items-center pt-4 space-x-1'>
//           <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
//           <p className='px-3 text-sm dark:text-gray-400'>
//             Login with social accounts
//           </p>
//           <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
//         </div>
//         <div
//           onClick={handleGoogleSignIn}
//           className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
//         >
//           <FcGoogle size={32} />

//           <p>Continue with Google</p>
//         </div>
//         <p className='px-6 text-sm text-center text-gray-400'>
//           Don&apos;t have an account yet?{' '}
//           <Link
//             state={from}
//             to='/signup'
//             className='hover:underline hover:text-lime-500 text-gray-600'
//           >
//             Sign up
//           </Link>
//           .
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login

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
        </p>
      </div>
    </div>
  );
};

export default Login;
