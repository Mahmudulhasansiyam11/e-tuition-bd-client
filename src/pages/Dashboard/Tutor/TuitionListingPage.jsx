
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import { useState } from "react";
// import ApplyModal from "./tutor components/ApplyModal";


// const TuitionListingPage = () => {
//   const { data: tuitionsData = [], isLoading } = useQuery({
//     queryKey: ["tuitions"],
//     queryFn: async () => {
//       const res = await axios(`${import.meta.env.VITE_API_URL}/tuitions`);
//       return res.data;
//     },
//   });

//   const [selectedTuition, setSelectedTuition] = useState(null);

//   if (isLoading) return <LoadingSpinner />;

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">
//         Tuition Listings
//       </h1>

//       <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-[#0A1F4A] text-white">
//             <tr>
//               <th className="px-6 py-3">#</th>
//               <th className="px-6 py-3">Subject</th>
//               <th className="px-6 py-3">Class</th>
//               <th className="px-6 py-3">Location</th>
//               <th className="px-6 py-3">Budget</th>
//               <th className="px-6 py-3">Status</th>
//               <th className="px-6 py-3 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200">
//             {tuitionsData.map((t, idx) => (
//               <tr key={t._id} className="hover:bg-blue-50">
//                 <td className="px-6 py-4">{idx + 1}</td>
//                 <td className="px-6 py-4">{t.subject}</td>
//                 <td className="px-6 py-4">{t.classLevel}</td>
//                 <td className="px-6 py-4">{t.location}</td>
//                 <td className="px-6 py-4">${t.budget}</td>
//                 <td className="px-6 py-4">
//                   <span className="px-3 py-1 rounded-full bg-yellow-500 text-white text-sm">
//                     {t.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-center">
//                   <button
//                     onClick={() => setSelectedTuition(t)}
//                     className="bg-[#0A3AFF] text-white px-4 py-2 rounded"
//                   >
//                     Apply
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Apply Modal */}
//       {selectedTuition && (
//         <ApplyModal
//           tuition={selectedTuition}
//           closeModal={() => setSelectedTuition(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default TuitionListingPage;


import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { useState } from "react";
import ApplyModal from "./tutor components/ApplyModal";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TuitionListingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
  const [selectedTuition, setSelectedTuition] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["tuitions", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/tuitions-listing`, {
        params: { page: currentPage, size: itemsPerPage }
      });
      return res.data; // Now returns { result, totalCount }
    },
  });

  const tuitionsData = data?.result || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const pages = [...Array(totalPages).keys()].map(n => n + 1);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#0A1F4A]">Tuition Listings</h1>
        <div className="text-sm text-gray-500 font-medium">
          Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalCount)} of {totalCount} entries
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">#</th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Subject</th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Class</th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Location</th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Budget</th>
              <th className="px-6 py-4 text-left font-semibold uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-center font-semibold uppercase tracking-wider">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {tuitionsData.map((t, idx) => (
              <tr key={t._id} className="hover:bg-blue-50 transition duration-150">
                <td className="px-6 py-4 text-gray-700">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{t.subject}</td>
                <td className="px-6 py-4 text-gray-600">{t.classLevel}</td>
                <td className="px-6 py-4 text-gray-600">{t.location}</td>
                <td className="px-6 py-4 font-semibold text-emerald-600">${t.budget}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    t.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setSelectedTuition(t)}
                    className="bg-[#0A3AFF] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
                  >
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center items-center mt-10 gap-2 mb-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="p-2 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiChevronLeft size={20} />
        </button>

        {pages.map(btnNum => (
          <button
            key={btnNum}
            onClick={() => setCurrentPage(btnNum)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
              currentPage === btnNum 
                ? 'bg-[#0A1F4A] text-white scale-110 shadow-md' 
                : 'bg-white border text-gray-600 hover:border-[#0A3AFF] hover:text-[#0A3AFF]'
            }`}
          >
            {btnNum}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="p-2 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiChevronRight size={20} />
        </button>

        {/* Rows per page selector */}
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1); // Reset to page 1 when size changes
          }}
          className="ml-4 p-2 border rounded-lg bg-white text-gray-600 outline-none"
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
        </select>
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