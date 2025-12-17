
// import { FaCheck, FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import toast from "react-hot-toast";

// const AppliedTutors = () => {
//   const queryClient = useQueryClient();

//   const { data: applications = [], isLoading } = useQuery({
//     queryKey: ["my-applications"],
//     queryFn: async () => {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/applications`);
//       return res.data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;

//   // Handle Reject button
//   const handleReject = async (id) => {
//     try {
//       const res = await axios.put(`${import.meta.env.VITE_API_URL}/applications/status/${id}`, {
//         status: "Rejected",
//       });

//       if (res.data.modifiedCount > 0) {
//         toast.success("Application rejected successfully");
//         queryClient.invalidateQueries(["my-applications"]); // refresh data
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to reject application");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">
//         Tutor Applications Received
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         {applications.map((tutor) => (
//           <div
//             key={tutor._id}
//             className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 hover:shadow-xl transition"
//           >
//             <img
//               src={tutor.tutorImage || "https://i.ibb.co/ZJ7C4wJ/default-avatar.png"}
//               className="w-16 h-16 rounded-full border"
//               alt={tutor.tutorName}
//             />
//             <div className="flex-1">
//               <h2 className="text-xl font-semibold">{tutor.tutorName}</h2>
//               <p className="text-gray-600">Subject: {tutor.subject}</p>
//               <p className="text-gray-600">Qualifications: {tutor.qualifications}</p>
//               <p className="text-gray-600">Experience: {tutor.experience}</p>
//               <p className="text-gray-600">Expected Salary: {tutor.expectedSalary}</p>
//               <p
//                 className={`mt-1 font-medium ${
//                   tutor.status === "Pending"
//                     ? "text-yellow-600"
//                     : tutor.status === "Approved"
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }`}
//               >
//                 Status: {tutor.status}
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 mt-4 md:mt-0">
//               <button
//                 className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl flex items-center gap-2"
//                 disabled={tutor.status === "Approved"}
//               >
//                 <FaCheck /> Approve
//               </button>
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl flex items-center gap-2"
//                 onClick={() => handleReject(tutor._id)}
//                 disabled={tutor.status === "Rejected"}
//               >
//                 <FaTimes /> Reject
//               </button>
//             </div>
//           </div>
//         ))}
//         {applications.length === 0 && (
//           <p className="text-center text-gray-500 col-span-2 mt-6">
//             No tutor applications received yet.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AppliedTutors;

import { FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import toast from "react-hot-toast";

const AppliedTutors = () => {
  const queryClient = useQueryClient();

  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["my-applications"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/applications`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // Handle Reject button
  const handleReject = async (id) => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/applications/status/${id}`, {
        status: "Rejected",
      });

      if (res.data.modifiedCount > 0) {
        toast.success("Application rejected successfully");
        queryClient.invalidateQueries(["my-applications"]); // refresh data
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to reject application");
    }
  };

  // Filter out rejected applications
  const visibleApplications = applications.filter(app => app.status !== "Rejected");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">
        Tutor Applications Received
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleApplications.map((tutor) => (
          <div
            key={tutor._id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 hover:shadow-xl transition"
          >
            <img
              src={tutor.tutorImage || "https://i.ibb.co/ZJ7C4wJ/default-avatar.png"}
              className="w-16 h-16 rounded-full border"
              alt={tutor.tutorName}
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{tutor.tutorName}</h2>
              <p className="text-gray-600">Subject: {tutor.subject}</p>
              <p className="text-gray-600">Qualifications: {tutor.qualifications}</p>
              <p className="text-gray-600">Experience: {tutor.experience}</p>
              <p className="text-gray-600">Expected Salary: {tutor.expectedSalary}</p>
              <p
                className={`mt-1 font-medium ${
                  tutor.status === "Pending"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Status: {tutor.status}
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl flex items-center gap-2"
                disabled={tutor.status === "Approved"}
              >
                <FaCheck /> Approve
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl flex items-center gap-2"
                onClick={() => handleReject(tutor._id)}
              >
                <FaTimes /> Reject
              </button>
            </div>
          </div>
        ))}
        {visibleApplications.length === 0 && (
          <p className="text-center text-gray-500 col-span-2 mt-6">
            No tutor applications received yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default AppliedTutors;
