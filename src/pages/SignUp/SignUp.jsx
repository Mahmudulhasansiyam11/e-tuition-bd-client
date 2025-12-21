import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import axios from 'axios';
import { imageUpload } from "../../utils";
import axios from "axios";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const [role, setRole] = useState("Student");

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // MAIN FORM SUBMIT HANDLER (React Hook Form)
  const onSubmit = async (data) => {
    const { name, email, password, phone, role, photo } = data;

    // Convert file to image URL
    const imageFile = photo[0];
    // const imageURL = imageFile ? URL.createObjectURL(imageFile) : null;
    // const formData = new FormData();
    // formData.append('image', imageFile);
    // console.log(formData);

  

    try {

        // const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);
        // // console.log(data.data.display_url);
        const imageURL = await imageUpload(imageFile);


      // 1. Create User
       await createUser(email, password);

      // 2. Update Profile
      await updateUserProfile(name, imageURL);

      // 3. Save User Data to Your DB
      // console.log({
      //   uid: result.user.uid,
      //   name,
      //   role,
      //   phone,
      //   email,
      //   photo: imageURL,
      // });

      // 3. SAVE USER DATA TO MONGODB
      const userData = {
        name,
        email,
        role, // Using the role selected in the form
        phone,
        image: imageURL,
        status: "Verified"
      };

      await axios.put(`${import.meta.env.VITE_API_URL}/users`, userData);

      toast.success("Signup Successful!");
      navigate(from, { replace: true });

    } catch (err) {
      toast.error(err?.message);
    }
  };

  // Google Sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      // SAVE GOOGLE USER TO DB (Default Role: Student)
      const userData = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        role: "Student", // Default role for Google Login
        image: result?.user?.photoURL,
        status: "Verified"
      };
      await axios.put(`${import.meta.env.VITE_API_URL}/users`, userData);

      toast.success("Signup Successful");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-lime-50 flex items-center justify-center px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.06)] rounded-3xl py-10 px-8">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">eT</span>
          </div>
          <h1 className="mt-6 text-3xl font-semibold text-gray-800">
            Create Your Account
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Register as Student or Tutor
          </p>
        </div>

        {/* FORM START */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* NAME */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full py-3 px-4 bg-gray-100/70 border rounded-xl outline-none"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 30, message: "Name too long" },
              })}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>

          {/* ROLE */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Register As
            </label>
            <select
              className="w-full py-3 px-4 bg-gray-100/70 border rounded-xl outline-none"
              {...register("role", { required: "Role is required" })}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
            </select>
          </div>

          {/* PHONE */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+880 1XXXXXXXXX"
              className="w-full py-3 px-4 bg-gray-100/70 border rounded-xl outline-none"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full py-3 px-4 bg-gray-100/70 border rounded-xl outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full py-3 px-4 bg-gray-100/70 border rounded-xl outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          {/* PHOTO UPLOAD */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium text-sm">
              Upload Your Photo
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full bg-gray-100/70 border p-2 rounded-xl"
              {...register("photo", {
                required: "Photo is required",
              })}
            />
            {errors.photo && <p className="text-red-500 text-xs">{errors.photo.message}</p>}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 text-white text-lg shadow-md hover:shadow-xl transition"
          >
            {loading ? <TbFidgetSpinner className="animate-spin m-auto" /> : "Register"}
          </button>
        </form>

        {/* OR DIVIDER */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* GOOGLE SIGN IN */}
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center cursor-pointer gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
        >
          <FcGoogle size={26} />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </div>

        {/* REDIRECT */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 font-semibold hover:underline">
            Login
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

export default SignUp;
