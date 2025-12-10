const Payments = () => {
  const payments = [
    {
      id: 1,
      tutorName: "Rina Akter",
      tuitionTitle: "Math Grade 10",
      amount: "$200",
      date: "2025-12-10",
      status: "Paid",
    },
    {
      id: 2,
      tutorName: "Mahmudul Hasan",
      tuitionTitle: "Physics College",
      amount: "$250",
      date: "2025-12-09",
      status: "Paid",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">Payments</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#0A1F4A] text-white">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Tutor</th>
              <th className="px-6 py-3">Tuition</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {payments.map((p, idx) => (
              <tr key={p.id} className="hover:bg-blue-50">
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4 font-medium">{p.tutorName}</td>
                <td className="px-6 py-4">{p.tuitionTitle}</td>
                <td className="px-6 py-4">{p.amount}</td>
                <td className="px-6 py-4">{p.date}</td>
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
