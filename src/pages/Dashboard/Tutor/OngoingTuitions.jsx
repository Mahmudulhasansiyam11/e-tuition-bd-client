
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const OngoingTuitions = () => {


  const {user} = useAuth();
  
     const {
        data: ongoingTuitionsData = [],
        isLoading,
      } = useQuery({
        queryKey: ["ongoingTuitions", user?.email],
        queryFn: async () => {
          const result = await axios(
            `${import.meta.env.VITE_API_URL}/my-ongoing-tuitions/${user?.email}`
          );
          return result.data;
        },
      });
    
    if(isLoading) return <LoadingSpinner/>

  

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">
        Ongoing Tuitions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ongoingTuitionsData.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#0A3AFF]"
          >
            <h2 className="text-xl font-semibold mb-2">{t.title}</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Tutor:</span> {t.tutorName}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Subject:</span> {t.subject}
            </p>
             <p className="text-gray-600 mb-2">
              <span className="font-medium">Qualifications:</span> {t.qualifications}
            </p>
             <p className="text-gray-600 mb-2">
              <span className="font-medium">Experience:</span> {t.experience}
            </p>
            <span className="inline-block px-3 py-1 rounded-full bg-green-500 text-white text-sm">
              Active
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingTuitions;
