import { useState } from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { toast } from "react-hot-toast";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mahmudul Hasan",
      email: "mahmudul@example.com",
      role: "Student",
      status: "Active",
      photo: "https://i.ibb.co/ZJ7C4wJ/default-avatar.png",
      verified: true,
    },
    {
      id: 2,
      name: "Rina Akter",
      email: "rina@example.com",
      role: "Tutor",
      status: "Inactive",
      photo: "https://i.ibb.co/ZJ7C4wJ/default-avatar.png",
      verified: false,
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
      status: "Active",
      photo: "https://i.ibb.co/ZJ7C4wJ/default-avatar.png",
      verified: true,
    },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const handleDelete = (id) => {
    toast.success("User Deleted (static)");
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedUser = {
      ...editingUser,
      name: form.name.value,
      email: form.email.value,
      role: form.role.value,
      status: form.status.value,
      verified: form.verified.checked,
    };
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    toast.success("User Updated (static)");
    setEditingUser(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">User Management</h1>

      {/* USERS TABLE */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Profile</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Verified</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-10 h-10 rounded-full border"
                  />
                  {user.name}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {user.verified ? (
                    <span className="text-green-600 font-semibold">Yes</span>
                  ) : (
                    <span className="text-red-600 font-semibold">No</span>
                  )}
                </td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => setEditingUser(user)}
                  >
                    <FaUserEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-semibold text-[#0A3AFF] mb-4">Edit User</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingUser.name}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B5FFF] outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={editingUser.email}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B5FFF] outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  defaultValue={editingUser.role}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B5FFF] outline-none"
                >
                  <option value="Student">Student</option>
                  <option value="Tutor">Tutor</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  defaultValue={editingUser.status}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B5FFF] outline-none"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="verified"
                  defaultChecked={editingUser.verified}
                  className="w-4 h-4 accent-[#0A3AFF]"
                />
                <label className="text-gray-700 text-sm">Verified</label>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setEditingUser(null)}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#0A3AFF] text-white hover:bg-[#0B5FFF] transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
