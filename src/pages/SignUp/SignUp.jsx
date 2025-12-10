// import { Link, useLocation, useNavigate } from 'react-router'
// import { FcGoogle } from 'react-icons/fc'
// import useAuth from '../../hooks/useAuth'
// import { toast } from 'react-hot-toast'
// import { TbFidgetSpinner } from 'react-icons/tb'

// const SignUp = () => {
//   const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth()
//   const navigate = useNavigate()
//   const location = useLocation()
//   const from = location.state || '/'

//   // form submit handler
//   const handleSubmit = async event => {
//     event.preventDefault()
//     const form = event.target
//     const name = form.name.value
//     const email = form.email.value
//     const password = form.password.value

//     try {
//       //2. User Registration
//       const result = await createUser(email, password)

//       //3. Save username & profile photo
//       await updateUserProfile(
//         name,
//         'https://lh3.googleusercontent.com/a/ACg8ocKUMU3XIX-JSUB80Gj_bYIWfYudpibgdwZE1xqmAGxHASgdvCZZ=s96-c'
//       )
//       console.log(result)

//       navigate(from, { replace: true })
//       toast.success('Signup Successful')
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
//       toast.success('Signup Successful')
//     } catch (err) {
//       console.log(err)
//       toast.error(err?.message)
//     }
//   }
//   return (
//     <div className='flex justify-center items-center min-h-screen bg-white'>
//       <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
//         <div className='mb-8 text-center'>
//           <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
//           <p className='text-sm text-gray-400'>Welcome to PlantNet</p>
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
//                 Name
//               </label>
//               <input
//                 type='text'
//                 name='name'
//                 id='name'
//                 placeholder='Enter Your Name Here'
//                 className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
//                 data-temp-mail-org='0'
//               />
//             </div>
//             {/* Image */}
//             <div>
//               <label
//                 htmlFor='image'
//                 className='block mb-2 text-sm font-medium text-gray-700'
//               >
//                 Profile Image
//               </label>
//               <input
//                 name='image'
//                 type='file'
//                 id='image'
//                 accept='image/*'
//                 className='block w-full text-sm text-gray-500
//       file:mr-4 file:py-2 file:px-4
//       file:rounded-md file:border-0
//       file:text-sm file:font-semibold
//       file:bg-lime-50 file:text-lime-700
//       hover:file:bg-lime-100
//       bg-gray-100 border border-dashed border-lime-300 rounded-md cursor-pointer
//       focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400
//       py-2'
//               />
//               <p className='mt-1 text-xs text-gray-400'>
//                 PNG, JPG or JPEG (max 2MB)
//               </p>
//             </div>
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
//                 autoComplete='new-password'
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
//         <div className='flex items-center pt-4 space-x-1'>
//           <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
//           <p className='px-3 text-sm dark:text-gray-400'>
//             Signup with social accounts
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
//           Already have an account?{' '}
//           <Link
//             to='/login'
//             className='hover:underline hover:text-lime-500 text-gray-600'
//           >
//             Login
//           </Link>
//           .
//         </p>
//       </div>
//     </div>
//   )
// }

// export default SignUp


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
