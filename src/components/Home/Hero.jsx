import { Link } from "react-router";
import Container from "../Shared/Container";

const Hero = () => {
  return (
    <section className="bg-[#0A1F4A] text-white py-16">
      <Container>
         <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find the Best Tutors & Quality Tuitions in Bangladesh
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            eTuitionBD helps students connect with verified tutors for academic success.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/tuitions"
              className="bg-white text-[#0A1F4A] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
            >
              Find Tuitions
            </Link>

            <Link
              to="/tutors"
              className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-emerald-600 transition"
            >
              Explore Tutors
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
