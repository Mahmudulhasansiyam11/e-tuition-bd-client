const RevenueHistory = () => {
  const transactions = [
    {
      id: 1,
      tuitionTitle: "Math Tuition for Grade 10",
      amount: "$200",
      date: "2025-12-10",
      status: "Paid",
    },
    {
      id: 2,
      tuitionTitle: "Physics Tuition for College",
      amount: "$250",
      date: "2025-12-09",
      status: "Paid",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">Revenue History</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Tuition</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((tx, index) => (
              <tr key={tx.id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">{tx.tuitionTitle}</td>
                <td className="px-6 py-4">{tx.amount}</td>
                <td className="px-6 py-4">{tx.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      tx.status === "Paid" ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    {tx.status}
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

export default RevenueHistory;
