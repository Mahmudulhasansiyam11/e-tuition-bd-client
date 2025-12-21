import { useState } from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const ManageUsers = () => {
  const [editingUser, setEditingUser] = useState(null);

  // 1. FETCH USERS
  const { data: usersData = [], isLoading, refetch } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return result.data;
    },
  });

  // 2. DELETE USER
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`);
        toast.success("User deleted successfully");
        refetch(); // Refresh the list
      } catch (err) {
        console.log(err);
        toast.error("Failed to delete user");
      }
    }
  };

  // 3. UPDATE USER
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedInfo = {
      name: form.name.value,
      email: form.email.value,
      role: form.role.value,
      status: form.status.value,
      verified: form.verified.checked,
    };

    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/users/${editingUser._id}`, updatedInfo);
      toast.success("User updated successfully");
      setEditingUser(null);
      refetch();
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">User Management</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white text-left">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">Profile</th>
              <th className="px-6 py-3 text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-sm font-semibold">Role</th>
              <th className="px-6 py-3 text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {usersData.map((user) => (
              <tr key={user._id} className="hover:bg-blue-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={user.image} alt="" className="w-10 h-10 rounded-full border object-cover" />
                  <span className="font-medium text-gray-800">{user.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${user.status === "Verified" || user.verified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {user.verified ? "Verified" : (user.status || "Pending")}
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-4">
                  <button onClick={() => setEditingUser(user)} className="text-blue-600 hover:scale-110 transition"><FaUserEdit size={18} /></button>
                  <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:scale-110 transition"><FaTrash size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Update User Account</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" defaultValue={editingUser.name} className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" defaultValue={editingUser.email} className="w-full px-4 py-2 border rounded-xl bg-gray-50" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Role</label>
                  <select name="role" defaultValue={editingUser.role} className="w-full px-4 py-2 border rounded-xl outline-none">
                    <option value="Student">Student</option>
                    <option value="Tutor">Tutor</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Account Status</label>
                  <select name="status" defaultValue={editingUser.status} className="w-full px-4 py-2 border rounded-xl outline-none">
                    <option value="Verified">Verified</option>
                    <option value="Pending">Pending</option>
                    <option value="Blocked">Blocked</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2 py-2">
                <input type="checkbox" name="verified" defaultChecked={editingUser.verified} id="v" className="w-5 h-5 accent-blue-600" />
                <label htmlFor="v" className="text-gray-700 font-medium cursor-pointer">Verify User Manually</label>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setEditingUser(null)} className="px-6 py-2 rounded-xl border font-semibold">Cancel</button>
                <button type="submit" className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;