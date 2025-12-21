import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";


const OngoingTuitions = () => {
  const { user } = useAuth();

  const {
    data: ongoingTuitionsData = [],
    isLoading,
  } = useQuery({
    queryKey: ["ongoingTuitions", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/my-ongoing-tuitions/${user?.email}`
      );
      return result.data;
    },
  });

  const approvedTuitions = ongoingTuitionsData.filter(
    (item) => item.status === "Approved" || item.status === "Paid"
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0A3AFF]">Ongoing Tuitions</h1>
          <p className="text-gray-500">Manage your active learning sessions and payments.</p>
        </div>
        <div className="bg-blue-100 text-[#0A3AFF] px-4 py-2 rounded-lg font-semibold">
          Total Active: {approvedTuitions.length}
        </div>
      </div>

      {approvedTuitions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedTuitions.map((t) => (
            <div
              key={t._id}
              className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden border border-gray-100"
            >
              {/* Status Header */}
              <div className="bg-green-500 px-6 py-2 flex justify-between items-center">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  Approved & Paid
                </span>
                <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {t.subject || "Academic Tuition"}
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <span className="w-24 font-medium text-gray-400">Tutor</span>
                    <span className="text-gray-800">{t.name || t.tutorName}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <span className="w-24 font-medium text-gray-400">Subject</span>
                    <span className="text-gray-800">{t.subject}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <span className="w-24 font-medium text-gray-400">Salary</span>
                    <span className="text-green-600 font-bold">${t.expectedSalary} / month</span>
                  </div>
                  
                </div>

                
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <div className="text-6xl mb-4">📖</div>
          <h3 className="text-xl font-semibold text-gray-700">No Ongoing Tuitions</h3>
          <p className="text-gray-500 max-w-xs mx-auto">
            Once you approve a tutor and complete the payment, your tuitions will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default OngoingTuitions;