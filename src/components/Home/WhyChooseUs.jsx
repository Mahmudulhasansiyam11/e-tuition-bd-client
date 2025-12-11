import Container from "../Shared/Container";
import { FaShieldAlt, FaUsers, FaBolt, FaAward } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-emerald-600" />,
      title: "Verified & Trusted Profiles",
      desc: "Every tutor and tuition post is manually verified for your safety and trust.",
    },
    {
      icon: <FaUsers className="text-4xl text-emerald-600" />,
      title: "Large Tutor Community",
      desc: "Find highly qualified tutors from top universities across Bangladesh.",
    },
    {
      icon: <FaBolt className="text-4xl text-emerald-600" />,
      title: "Fast & Easy Matching",
      desc: "Smart search and instant apply features help you find matches quickly.",
    },
    {
      icon: <FaAward className="text-4xl text-emerald-600" />,
      title: "Top Quality Learning",
      desc: "We focus on delivering quality education through experienced tutors.",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <Container>
        <h2 className="text-3xl font-bold text-[#0A1F4A] text-center mb-12">
          Why Choose eTuitionBD?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition"
            >
              <div className="mb-3 flex justify-center">{item.icon}</div>

              <h3 className="text-xl font-semibold text-[#0A1F4A]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
