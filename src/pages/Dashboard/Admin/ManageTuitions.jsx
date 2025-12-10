import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ManageTuitions = () => {
  const [tuitions, setTuitions] = useState([
    {
      id: 1,
      subject: "Mathematics",
      class: "10th Grade",
      location: "Dhaka",
      budget: "5000 BDT",
      status: "Pending",
    },
    {
      id: 2,
      subject: "English",
      class: "8th Grade",
      location: "Chittagong",
      budget: "4000 BDT",
      status: "Approved",
    },
    {
      id: 3,
      subject: "Physics",
      class: "12th Grade",
      location: "Sylhet",
      budget: "6000 BDT",
      status: "Rejected",
    },
  ]);

  const handleApprove = (id) => {
    toast.success("Tuition Approved (static)");
    setTuitions(
      tuitions.map((t) => (t.id === id ? { ...t, status: "Approved" } : t))
    );
  };

  const handleReject = (id) => {
    toast.error("Tuition Rejected (static)");
    setTuitions(
      tuitions.map((t) => (t.id === id ? { ...t, status: "Rejected" } : t))
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">Tuition Management</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Subject</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Class</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Budget</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tuitions.map((t, index) => (
              <tr key={t.id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">{t.subject}</td>
                <td className="px-6 py-4">{t.class}</td>
                <td className="px-6 py-4">{t.location}</td>
                <td className="px-6 py-4">{t.budget}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      t.status === "Approved"
                        ? "bg-green-500"
                        : t.status === "Rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button
                    className="text-green-600 hover:text-green-800"
                    onClick={() => handleApprove(t.id)}
                  >
                    <FaCheckCircle />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleReject(t.id)}
                  >
                    <FaTimesCircle />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTuitions;
