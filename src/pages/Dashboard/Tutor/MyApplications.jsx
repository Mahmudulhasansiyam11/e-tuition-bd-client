import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import { useState } from "react";
import Swal from "sweetalert2";
import { FaTrash, FaEdit } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const MyApplications = () => {
  const {user} = useAuth();
  const { data: applications = [], isLoading, refetch } = useQuery({
    queryKey: ["my-applications"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/applications/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id, status) => {
    if (status === "Approved") {
      Swal.fire("Not allowed", "Approved applications cannot be deleted.", "error");
      return;
    }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This application will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    await axios.delete(`${import.meta.env.VITE_API_URL}/applications/${id}`);
    Swal.fire("Deleted!", "Your application has been deleted.", "success");
    refetch();
  };

  const handleEdit = async (app) => {
    if (app.status === "Approved") {
      Swal.fire("Not allowed", "Approved applications cannot be edited.", "error");
      return;
    }

    const { value: formValues } = await Swal.fire({
      title: "Edit Application",
      html: `
        <input id="qualifications" class="swal2-input" placeholder="Qualifications" value="${app.qualifications}">
        <input id="experience" class="swal2-input" placeholder="Experience" value="${app.experience}">
        <input id="expectedSalary" type="number" class="swal2-input" placeholder="Expected Salary" value="${app.expectedSalary}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: () => {
        return {
          qualifications: document.getElementById("qualifications").value,
          experience: document.getElementById("experience").value,
          expectedSalary: document.getElementById("expectedSalary").value,
        };
      },
    });

    if (!formValues) return;

    await axios.put(`${import.meta.env.VITE_API_URL}/applications/${app._id}`, formValues);
    Swal.fire("Updated!", "Your application has been updated.", "success");
    refetch();
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">My Applications</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Tuition Title</th>
              <th className="px-6 py-3 text-left">Qualifications</th>
              <th className="px-6 py-3 text-left">Experience</th>
              <th className="px-6 py-3 text-left">Expected Salary</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Applied At</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((app, idx) => (
              <tr key={app._id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4 font-medium">{app.subject}</td>
                <td className="px-6 py-4">{app.qualifications}</td>
                <td className="px-6 py-4">{app.experience}</td>
                <td className="px-6 py-4">${app.expectedSalary}</td>
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
                <td className="px-6 py-4">{new Date(app.appliedAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleEdit(app)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(app._id, app.status)}
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
