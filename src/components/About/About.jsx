import React from 'react';
import Container from '../Shared/Container';
import { FiCheckCircle, FiUsers, FiBookOpen, FiStar } from 'react-icons/fi';

const About = () => {
  const stats = [
    { id: 1, icon: <FiUsers />, label: "Expert Tutors", count: "500+" },
    { id: 2, icon: <FiBookOpen />, label: "Subjects Covered", count: "50+" },
    { id: 3, icon: <FiStar />, label: "Success Rate", count: "98%" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#0A1F4A] py-20 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Students Through Quality Education
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              We bridge the gap between dedicated tutors and ambitious students. 
              Our platform is designed to make personalized learning accessible, 
              reliable, and effective for everyone.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[-50px]">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border border-gray-100">
              <div className="text-3xl text-blue-600 mb-4 bg-blue-50 p-4 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#0A1F4A]">{stat.count}</h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image Placeholder */}
          <div className="relative">
            <div className="w-full h-[400px] bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students studying" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0A1F4A]/10"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-2xl font-bold">10+ Years</p>
              <p className="text-sm opacity-80">of Excellence</p>
            </div>
          </div>

          {/* Right Side: Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A1F4A] mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Finding the right tutor shouldn't be a challenge. We provide a 
              transparent and secure environment where students can find experts 
              tailored to their specific learning styles and academic goals.
            </p>

            <ul className="space-y-4">
              {[
                "Verified & Background Checked Tutors",
                "Personalized One-on-One Sessions",
                "Flexible Scheduling & Locations",
                "Affordable Budget Options"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <FiCheckCircle className="text-emerald-500 text-xl shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-10 px-8 py-4 bg-[#0A1F4A] text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Vision/Mission Row */}
        <div className="pb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-blue-50 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#0A1F4A] mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To democratize education by connecting every student with the 
              perfect mentor, regardless of their location or subject complexity.
            </p>
          </div>
          <div className="p-10 bg-gray-100 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#0A1F4A] mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the world's most trusted learning network where 
              knowledge sharing is seamless, safe, and life-changing.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;