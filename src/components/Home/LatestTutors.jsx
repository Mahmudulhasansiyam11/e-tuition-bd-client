import Container from "../Shared/Container";
import { Link } from "react-router";

// Static Tutors Placeholder
const sampleTutors = [
  { id: 1, name: "Ayesha Rahman", subject: "Biology", university: "DU" },
  { id: 2, name: "Mahin Islam", subject: "Math", university: "BUET" },
  { id: 3, name: "Tanzim Khan", subject: "English", university: "NSU" },
];

const LatestTutors = () => {
  return (
    <section className="py-16 bg-blue-50">
      <Container>
        <h2 className="text-3xl font-bold text-[#0A1F4A] mb-6 text-center">
          Latest Tutors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#0A1F4A]">
                {tutor.name}
              </h3>
              <p className="text-gray-600 mt-1">
                Teaches: {tutor.subject}
              </p>
              <p className="text-gray-600">University: {tutor.university}</p>

              <Link
                to="/tutors"
                className="mt-4 inline-block text-[#0A1F4A] font-medium hover:underline"
              >
                View Profile →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestTutors;
