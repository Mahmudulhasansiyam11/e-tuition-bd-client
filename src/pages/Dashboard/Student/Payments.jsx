import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payments = () => {

  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

   const {
      data: ordersData = [],
      isLoading,
    } = useQuery({
      queryKey: ["orders", user?.email],
      queryFn: async () => {
        const result = await axiosSecure(
          `/my-orders`
        );
        return result.data;
      },
    });
  
  if(isLoading) return <LoadingSpinner/>

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">Payments</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Student Name</th>
              <th className="px-6 py-3">Student Email
              </th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ordersData.map((p, idx) => (
              <tr key={p.id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4 font-medium">{p.userName}</td>
                <td className="px-6 py-4">{p.userEmail}</td>
                <td className="px-6 py-4">${p.amount}</td>
                <td className="px-6 py-4">{p.paidAt}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-white bg-green-500">
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
