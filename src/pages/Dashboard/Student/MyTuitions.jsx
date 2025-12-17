import { FaEdit, FaTrash } from "react-icons/fa";
// import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import Swal from "sweetalert2";

const MyTuitions = () => {
  const {
    data: tuitionsData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tuitions"],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/tuitions`
      );
      return result.data;
    },
  });

  // ✅ Handle delete with SweetAlert
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This tuition post will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/tuitions/${id}`
      );

      if (res.data.deletedCount > 0) {
        Swal.fire(
          "Deleted!",
          "Tuition post has been deleted.",
          "success"
        );
        refetch();
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        "Failed to delete tuition post.",
        "error"
      );
      console.error(error);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">
        My Tuitions
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
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {tuitionsData.map((t, idx) => (
              <tr key={t._id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4 font-medium">{t.subject}</td>
                <td className="px-6 py-4">{t.classLevel}</td>
                <td className="px-6 py-4">{t.location}</td>
                <td className="px-6 py-4">${t.budget}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-500 text-white text-sm">
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="text-blue-600">
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600"
                    onClick={() => handleDelete(t._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {tuitionsData.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-500">
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
