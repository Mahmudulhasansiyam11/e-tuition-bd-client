import Container from "../Shared/Container";
import { Link } from "react-router";

// Static Tuotions Placeholder
const sampleTuitions = [
  { id: 1, subject: "Mathematics", class: "Class 8", location: "Dhanmondi", salary: "6,000 BDT" },
  { id: 2, subject: "Physics", class: "Class 10", location: "Uttara", salary: "7,500 BDT" },
  { id: 3, subject: "English", class: "Class 7", location: "Mirpur", salary: "5,500 BDT" },
];

const LatestTuitions = () => {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-[#0A1F4A] mb-6 text-center">
          Latest Tuition Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTuitions.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#0A1F4A]">
                {item.subject}
              </h3>
              <p className="text-gray-600 mt-1">Class: {item.class}</p>
              <p className="text-gray-600">Location: {item.location}</p>
              <p className="text-emerald-600 font-semibold mt-2">
                Salary: {item.salary}
              </p>

              <Link
                to="/tuitions"
                className="mt-4 inline-block text-[#0A1F4A] font-medium hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestTuitions;
