// import { useQuery } from "@tanstack/react-query";
// import Container from "../Shared/Container";
// import { Link } from "react-router";
// import axios from "axios";
// import LoadingSpinner from "../Shared/LoadingSpinner";

// const LatestTutors = () => {
//   const { data: tutors = [], isLoading } = useQuery({
//     queryKey: ["latest-tutors"],
//     queryFn: async () => {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/latest-tutors`);
//       return res.data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;
//   return (
//     <section className="py-16 bg-blue-50">
//       <Container>
//         <h2 className="text-3xl font-bold text-[#0A1F4A] mb-6 text-center">
//           Latest Tutors
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {tutors.map((tutor) => (
//             <div
//               key={tutor._id}
//               className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
//             >
//               <h3 className="text-xl font-semibold text-[#0A1F4A]">
//                 {tutor.tutorName}
//               </h3>
//               <p className="text-gray-600 mt-1">
//                 Teaches: {tutor.subject}
//               </p>
//               <p className="text-gray-600">Qualifications: {tutor.qualifications}</p>

//               <Link
//                 className="mt-4 inline-block text-[#0A1F4A] font-medium hover:underline"
//               >
//                 View Profile →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default LatestTutors;

import { useQuery } from "@tanstack/react-query";
import Container from "../Shared/Container";
import { Link } from "react-router";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { FiUser, FiBookOpen, FiAward, FiArrowRight } from "react-icons/fi";

const LatestTutors = () => {
  const { data: tutors = [], isLoading } = useQuery({
    queryKey: ["latest-tutors"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/latest-tutors`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-[#0A1F4A]">
              Our Expert Tutors
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Learn from the best. Our latest registered tutors are highly qualified and ready to help you succeed.
            </p>
          </div>
          <Link
            to="tutors"
            className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition"
          >
            Browse All Tutors 
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Profile Image / Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-50 shadow-inner">
                  {tutor.tutorImage ? (
                    <img 
                      src={tutor.tutorImage} 
                      alt={tutor.tutorName} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-400">
                      <FiUser size={40} />
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-4 border-white" title="Available Now"></div>
              </div>

              {/* Tutor Info */}
              <h3 className="text-2xl font-bold text-[#0A1F4A] mb-1">
                {tutor.tutorName}
              </h3>
              
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm mb-4 bg-blue-50 px-3 py-1 rounded-full">
                <FiBookOpen size={14} />
                <span>{tutor.subject} Specialist</span>
              </div>

              <div className="flex items-start gap-2 text-gray-500 text-sm mb-6 min-h-[40px]">
                <FiAward className="text-yellow-500 shrink-0 mt-1" />
                <p className="line-clamp-2 italic">"{tutor.qualifications}"</p>
              </div>

              {/* Action Button */}
              <Link
                className="w-full py-3 bg-[#0A1F4A] text-white rounded-xl font-semibold hover:bg-blue-700 shadow-md hover:shadow-blue-200 transition-all active:scale-95"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>

        {tutors.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <p className="text-gray-400">No tutors found at the moment.</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default LatestTutors;