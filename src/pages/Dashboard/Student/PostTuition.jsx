import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import ErrorPage from "../../ErrorPage";

const PostTuition = () => {
  const { user } = useAuth();


  // useMutation hook use case
  const {isPending, isError, mutateAsync, reset: mutationReset} = useMutation({
    mutationFn: async (payload) => 
      await axios.post(
        `${import.meta.env.VITE_API_URL}/tuitions`,
        payload),
        onSuccess: data => {
          console.log(data);
          // Show toast 
          toast.success('New Tuition Add Successfully');
          mutationReset();
          // Query key invalidate 
        },
        onError: error => {
          console.log(error);
        },
        onMutate: payload => {
          console.log('I will post this data--->', payload);
        },
        onSettled: (data, error) => {
          if(data) console.log(data)
          if(error) console.log(error)
        },
      retry: 3,
  })
  

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

      await mutateAsync(newTuitionData);

      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/tuitions`,
      //   newTuitionData
      // );
      // console.log(data);

      // alert("Tuition Posted (static)!");
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  if(isPending) return <LoadingSpinner/>
  if(isError) return <ErrorPage/>

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
            {/* Submit Tuition */}
            {
              isPending ? (<TbFidgetSpinner className="animate-spin m-auto" />) : (
                'Submit Tuition'
              ) 
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostTuition;
