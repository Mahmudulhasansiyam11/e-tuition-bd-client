// // import { useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// // import { toast } from "react-hot-toast";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const ManageTuitions = () => {

//    // fetch tuitions data
//   const { data: tuitionsData = [], isLoading } = useQuery({
//     queryKey: ["tuitionsData"],
//     queryFn: async () => {
//       const result = await axios(`${import.meta.env.VITE_API_URL}/tuitions`);
//       return result.data;
//     },
//   });

//  if (isLoading) return <LoadingSpinner />;

//   const handleApprove = () => {
   
//   };

//   const handleReject = () => {
  
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">Tuition Management</h1>

//       <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-[#0A1F4A] text-white">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Subject</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Class</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Budget</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
//               <th className="px-6 py-3 text-center text-sm font-semibold">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {tuitionsData.map((t, index) => (
//               <tr key={t.id} className="hover:bg-blue-50">
//                 <td className="px-6 py-4">{index + 1}</td>
//                 <td className="px-6 py-4 font-medium">{t.subject}</td>
//                 <td className="px-6 py-4">{t.classLevel}</td>
//                 <td className="px-6 py-4">{t.location}</td>
//                 <td className="px-6 py-4">${t.budget}</td>
//                 <td className="px-6 py-4">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white text-sm ${
//                       t.status === "Approved"
//                         ? "bg-green-500"
//                         : t.status === "Rejected"
//                         ? "bg-red-500"
//                         : "bg-yellow-500"
//                     }`}
//                   >
//                     {t.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 flex justify-center gap-3">
//                   <button
//                     className="text-green-600 hover:text-green-800"
//                     onClick={() => handleApprove(t.id)}
//                   >
//                     <FaCheckCircle />
//                   </button>
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => handleReject(t.id)}
//                   >
//                     <FaTimesCircle />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageTuitions;


import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ManageTuitions = () => {
  // 1. Fetch all tuition posts
  const { data: tuitionsData = [], isLoading, refetch } = useQuery({
    queryKey: ["tuitionsData"],
    queryFn: async () => {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/tuitions`);
      return result.data;
    },
  });

  // 2. Handle Status Update (Approve/Reject)
  const updateStatus = async (id, newStatus) => {
    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/tuition/status/${id}`, {
        status: newStatus,
      });

      if (data.modifiedCount > 0) {
        toast.success(`Tuition post ${newStatus} successfully!`);
        refetch(); // Refresh the table data
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A3AFF]">Tuition Management</h1>
        <p className="text-gray-500">Moderate and verify student tuition requests.</p>
      </div>

      <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase">#</th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Subject</th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Class</th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Location</th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Budget</th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Status</th>
              <th className="px-6 py-4 text-center text-sm font-semibold uppercase">Moderate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tuitionsData.map((t, index) => (
              <tr key={t._id} className="hover:bg-blue-50/50 transition-colors">
                <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 font-bold text-gray-800">{t.subject}</td>
                <td className="px-6 py-4 text-gray-600">{t.classLevel}</td>
                <td className="px-6 py-4 text-gray-600">{t.location}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">${t.budget}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      t.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : t.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {t.status || "Pending"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-4">
                    {/* Only show buttons if not already processed */}
                    {t.status !== "Approved" && (
                      <button
                        title="Approve"
                        className="text-green-600 hover:text-green-800 scale-125 transition-transform"
                        onClick={() => updateStatus(t._id, "Approved")}
                      >
                        <FaCheckCircle size={20} />
                      </button>
                    )}
                    {t.status !== "Rejected" && (
                      <button
                        title="Reject"
                        className="text-red-600 hover:text-red-800 scale-125 transition-transform"
                        onClick={() => updateStatus(t._id, "Rejected")}
                      >
                        <FaTimesCircle size={20} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {tuitionsData.length === 0 && (
        <div className="text-center py-20 text-gray-400 italic">
          No tuition posts found in the records.
        </div>
      )}
    </div>
  );
};

export default ManageTuitions;