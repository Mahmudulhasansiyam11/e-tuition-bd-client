import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const PostTuition = () => {
  const { user } = useAuth();

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle Form Submit
  const onSubmit = async(data) => {
    console.log("Tuition Data:", data);

    const { subject, classLevel, location, budget } = data;

    try {
      const newTuitionData = {
        subject,
        classLevel,
        location,
        budget: Number(budget),
        status: "pending",
        studentInfo: {
          image: user?.photoURL,
          name: user?.displayName,
          email: user?.email,
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/tuitions`,
        newTuitionData
      );
      console.log(data);

      alert("Tuition Posted (static)!");
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">
        Post New Tuition
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Subject */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="Math, Physics, etc."
              {...register("subject", { required: "Subject is required" })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B5FFF] outline-none"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Class */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Class
            </label>
            <input
              type="text"
              placeholder="Grade 10, College, etc."
              {...register("classLevel", {
                required: "Class level is required",
              })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B5FFF] outline-none"
            />
            {errors.classLevel && (
              <p className="text-red-500 text-sm mt-1">
                {errors.classLevel.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              placeholder="Dhaka, Chittagong, etc."
              {...register("location", { required: "Location is required" })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B5FFF] outline-none"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Budget
            </label>
            <input
              type="text"
              placeholder="$200"
              {...register("budget", { required: "Budget is required" })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B5FFF] outline-none"
            />
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">
                {errors.budget.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0A3AFF] hover:bg-[#0B5FFF] text-white py-3 rounded-xl font-semibold transition"
          >
            Submit Tuition
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostTuition;
