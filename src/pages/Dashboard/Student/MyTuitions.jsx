// import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const MyTuitions = () => {

  // use useQuery to tuitions data fetch on server
  const { data: tuitionsData =[], isLoading } = useQuery({
    queryKey: ['tuitions'],
    queryFn: async() => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/tuitions`);
      return result.data;
    },
  })

  // Use useState for dynamic/static simulation
  // const [tuitions, setTuitions] = useState([
  //   {
  //     id: 1,
  //     subject: "Mathematics",
  //     classLevel: "Grade 10",
  //     location: "Dhaka",
  //     budget: "$200",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2,
  //     subject: "Physics",
  //     classLevel: "College",
  //     location: "Chittagong",
  //     budget: "$250",
  //     status: "Approved",
  //   },
  //   {
  //     id: 3,
  //     subject: "English",
  //     classLevel: "Grade 8",
  //     location: "Sylhet",
  //     budget: "$150",
  //     status: "Rejected",
  //   },
  // ]);

  // Handle delete (static simulation)
  // const handleDelete = (id) => {
  //   setTuitions((prev) => prev.filter((t) => t.id !== id));
  //   toast.success("Tuition post deleted (static)");
  // };

  // Handle delete (static simulation)
  // const handleDelete = (id) => {
    
  // };

  if(isLoading) return <LoadingSpinner/>

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">My Tuitions</h1>

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
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tuitionsData.map((t, idx) => (
              <tr key={t.id} className="hover:bg-blue-50 transition-all">
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4 font-medium">{t.subject}</td>
                <td className="px-6 py-4">{t.classLevel}</td>
                <td className="px-6 py-4">{t.location}</td>
                <td className="px-6 py-4">${t.budget}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                      t.status === "Pending"
                        ? "bg-yellow-500"
                        : t.status === "Approved"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800 transition-all"
                    onClick={() => toast("Edit clicked (static)")}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 transition-all"
                    // onClick={() => handleDelete(t.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {tuitionsData.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No tuition posts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTuitions;
