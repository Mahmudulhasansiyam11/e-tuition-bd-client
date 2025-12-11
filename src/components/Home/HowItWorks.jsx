import Container from "../Shared/Container";
import { FaSearch, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaSearch className="text-4xl text-emerald-600" />,
      title: "Search for Tuitions / Tutors",
      desc: "Browse thousands of verified tuition posts and tutor profiles with advanced filtering.",
    },
    {
      id: 2,
      icon: <FaUserGraduate className="text-4xl text-emerald-600" />,
      title: "Apply or Contact Easily",
      desc: "Students can apply for tutors, and tutors can apply to tuition posts instantly.",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="text-4xl text-emerald-600" />,
      title: "Start Learning",
      desc: "Once matched, begin online or offline tuition sessions with confidence.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-[#0A1F4A] text-center mb-12">
          How the Platform Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-blue-50 border border-blue-100 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>

              <h3 className="text-xl font-semibold text-[#0A1F4A] mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
