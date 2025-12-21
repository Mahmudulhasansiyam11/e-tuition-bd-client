import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaDollarSign, FaUsers, FaBook } from "react-icons/fa";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const Statistics = () => {

  const { data: transactionsData = [], isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/transaction-history`
      );
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // Static financial & platform data
  const totalEarnings = "$12,450";
  const totalUsers = 1250;
  const totalTuitions = 320;

 

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6 text-center md:text-left">
        Reports & Analytics
      </h1>

      {/* ------------------------ */}
      {/* Top Cards */}
      {/* ------------------------ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#0A1F4A] text-white rounded-xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition">
          <FaDollarSign size={36} className="text-[#0B5FFF]" />
          <div>
            <p className="text-sm sm:text-base">Total Earnings</p>
            <p className="text-xl sm:text-2xl font-bold">{totalEarnings}</p>
          </div>
        </div>
        <div className="bg-[#0A1F4A] text-white rounded-xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition">
          <FaUsers size={36} className="text-[#0B5FFF]" />
          <div>
            <p className="text-sm sm:text-base">Total Users</p>
            <p className="text-xl sm:text-2xl font-bold">{totalUsers}</p>
          </div>
        </div>
        <div className="bg-[#0A1F4A] text-white rounded-xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition">
          <FaBook size={36} className="text-[#0B5FFF]" />
          <div>
            <p className="text-sm sm:text-base">Total Tuitions</p>
            <p className="text-xl sm:text-2xl font-bold">{totalTuitions}</p>
          </div>
        </div>
      </div>

      {/* ------------------------ */}
      {/* Transaction History */}
      {/* ------------------------ */}
      <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 overflow-x-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#0A3AFF] mb-4">
          Transaction History
        </h2>
        <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-3 sm:px-6 py-2 text-left">#</th>
              <th className="px-3 sm:px-6 py-2 text-left">Name</th>
              <th className="px-3 sm:px-6 py-2 text-left">Email</th>
              <th className="px-3 sm:px-6 py-2 text-left">Amount</th>
              <th className="px-3 sm:px-6 py-2 text-left">Date</th>
              <th className="px-3 sm:px-6 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactionsData.map((txn, idx) => (
              <tr key={txn.id} className="hover:bg-blue-50">
                <td className="px-3 sm:px-6 py-2">{idx + 1}</td>
                <td className="px-3 sm:px-6 py-2 font-medium">
                  {txn.userName}
                </td>
                <td className="px-3 sm:px-6 py-2">{txn.userEmail}</td>
                <td className="px-3 sm:px-6 py-2">${txn.amount}</td>
                <td className="px-3 sm:px-6 py-2">{txn.paidAt}</td>
                <td className="px-3 sm:px-6 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs sm:text-sm ${
                      txn.status === "Successful"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
            {transactionsData.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;
