import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const RevenueHistory = () => {

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

  const revenueHistory = ongoingTuitionsData.filter(
    (item) => item.status === "Approved" || item.status === "Paid"
  );

  if (isLoading) return <LoadingSpinner />;
 

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">Revenue History</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Tuition</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {revenueHistory.map((tx, index) => (
              <tr key={tx.id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">{tx.subject}</td>
                <td className="px-6 py-4">${tx.expectedSalary}</td>
                <td className="px-6 py-4">{tx.appliedAt}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      tx.status === "Approved" ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    paid
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueHistory;
