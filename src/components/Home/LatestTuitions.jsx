import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from "../Shared/Container";
import { Link } from "react-router";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

const LatestTuitions = () => {
  const { data: tuitions = [], isLoading } = useQuery({
    queryKey: ["latest-tuitions"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/latest-tuitions`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-[#0A1F4A]">
              Latest Tuition Posts
            </h2>
            <p className="text-gray-500 mt-2">
              Recently posted opportunities waiting for the right tutor.
            </p>
          </div>
          <Link
            to="/all-tuitions"
            className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition"
          >
            View All Posts <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tuitions.slice(0, 3).map((item) => (
            <div
              key={item._id}
              className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {item.classLevel}
                </span>
                <p className="text-emerald-600 font-bold text-xl">
                   {item.budget} <span className="text-xs text-gray-400 font-normal">BDT</span>
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#0A1F4A] mb-3 group-hover:text-blue-600 transition">
                {item.subject}
              </h3>

              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <FiMapPin className="text-red-400" />
                <span className="text-sm font-medium">{item.location}</span>
              </div>

              <Link
                className="block text-center border-2 border-[#0A1F4A] text-[#0A1F4A] py-3 rounded-xl font-bold hover:bg-[#0A1F4A] hover:text-white transition-colors duration-300"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        {tuitions.length === 0 && (
          <p className="text-center text-gray-400 italic py-10">No recent posts available.</p>
        )}
      </Container>
    </section>
  );
};

export default LatestTuitions;