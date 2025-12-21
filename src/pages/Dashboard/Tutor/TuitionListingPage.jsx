
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { useState } from "react";
import ApplyModal from "./tutor components/ApplyModal";


const TuitionListingPage = () => {
  const { data: tuitionsData = [], isLoading } = useQuery({
    queryKey: ["tuitions"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/tuitions`);
      return res.data;
    },
  });

  const [selectedTuition, setSelectedTuition] = useState(null);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">
        Tuition Listings
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Subject</th>
              <th className="px-6 py-3">Class</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Budget</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {tuitionsData.map((t, idx) => (
              <tr key={t._id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4">{t.subject}</td>
                <td className="px-6 py-4">{t.classLevel}</td>
                <td className="px-6 py-4">{t.location}</td>
                <td className="px-6 py-4">${t.budget}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-500 text-white text-sm">
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setSelectedTuition(t)}
                    className="bg-[#0A3AFF] text-white px-4 py-2 rounded"
                  >
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Apply Modal */}
      {selectedTuition && (
        <ApplyModal
          tuition={selectedTuition}
          closeModal={() => setSelectedTuition(null)}
        />
      )}
    </div>
  );
};

export default TuitionListingPage;
