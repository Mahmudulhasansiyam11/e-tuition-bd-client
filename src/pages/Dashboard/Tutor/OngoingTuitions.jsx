const OngoingTuitions = () => {
  const tuitions = [
    {
      id: 1,
      title: "Math Tuition for Grade 10",
      student: "Rina Akter",
      schedule: "Mon/Wed/Fri 4-6 PM",
      status: "Active",
    },
    {
      id: 2,
      title: "Physics Tuition for College",
      student: "Mahmudul Hasan",
      schedule: "Tue/Thu 6-8 PM",
      status: "Active",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">Ongoing Tuitions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tuitions.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#0A3AFF] hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{t.title}</h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Student:</span> {t.student}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Schedule:</span> {t.schedule}
            </p>
            <p className="text-white inline-block px-3 py-1 rounded-full bg-green-500 mt-2">
              {t.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingTuitions;
