import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const MyApplications = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      tuitionTitle: "Math Tuition for Grade 10",
      studentName: "Rina Akter",
      status: "Pending",
      expectedSalary: "$200",
      dateApplied: "2025-12-10",
    },
    {
      id: 2,
      tuitionTitle: "Physics Tuition for College",
      studentName: "Mahmudul Hasan",
      status: "Approved",
      expectedSalary: "$250",
      dateApplied: "2025-12-09",
    },
  ]);

  const handleDelete = (id) => {
    toast.success("Application deleted (static)");
    setApplications(applications.filter((app) => app.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">My Applications</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Tuition Title</th>
              <th className="px-6 py-3 text-left">Student</th>
              <th className="px-6 py-3 text-left">Expected Salary</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Date Applied</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((app, index) => (
              <tr key={app.id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">{app.tuitionTitle}</td>
                <td className="px-6 py-4">{app.studentName}</td>
                <td className="px-6 py-4">{app.expectedSalary}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      app.status === "Pending"
                        ? "bg-yellow-500"
                        : app.status === "Approved"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4">{app.dateApplied}</td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(app.id)}
                  >
                    <FaTrash />
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

export default MyApplications;
