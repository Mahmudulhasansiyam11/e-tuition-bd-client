import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import LoadingSpinner from "../Shared/LoadingSpinner";
import Container from "../Shared/Container";
import { FiSearch, FiMail, FiBriefcase, FiDollarSign, FiBook } from "react-icons/fi";

const Tutors = () => {
  const [search, setSearch] = useState("");

  const { data: tutors = [], isLoading } = useQuery({
    queryKey: ["all-tutors", search],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutors`, {
        params: { search },
      });
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header & Search Section */}
      <div className="bg-[#0A1F4A] pt-20 pb-28 text-white relative">
        <Container>
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Expert Tutors Directory
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Connect with top-rated educators to unlock your full potential.
            </p>
          </div>

          {/* Search Bar Container */}
          <div className="max-w-2xl mx-auto relative z-10 px-4">
            <div className="relative group">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search by subject (e.g. Physics, Math)..."
                className="w-full pl-14 pr-6 py-5 rounded-2xl text-gray-900 bg-white border-4 border-blue-900/20 focus:border-blue-500 focus:ring-0 outline-none shadow-2xl text-lg transition-all"
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm font-bold">
                  Press Enter
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Tutor Grid */}
        <div className="mt-[-60px] relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Profile Card Header */}
              <div className="p-8 flex items-center gap-5 border-b border-gray-50 bg-gradient-to-r from-white to-gray-50/50">
                <img
                  src={tutor.tutorImage || "https://i.ibb.co/C36ZDsH5/User.png"}
                  alt={tutor.tutorName}
                  className="w-20 h-20 rounded-2xl object-cover ring-4 ring-blue-50 shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#0A1F4A] leading-tight mb-1">
                    {tutor.tutorName}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest ${
                      tutor.status === 'Approved' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {tutor.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats & Details */}
              <div className="p-8 space-y-5 flex-grow">
                <div className="flex items-center gap-4 group">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FiBook className="text-blue-500 group-hover:text-inherit" />
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-bold text-gray-800">Subject:</span> {tutor.subject}</p>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FiBriefcase className="text-blue-500 group-hover:text-inherit" />
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-bold text-gray-800">Experience:</span> {tutor.experience}</p>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <FiDollarSign className="text-emerald-600" />
                  </div>
                  <p className="text-sm font-black text-emerald-600">Expected: ${tutor.expectedSalary}/mo</p>
                </div>
                
                <div className="mt-4 pt-5 border-t border-dashed border-gray-200">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">Professional Qualifications</p>
                  <p className="text-gray-600 text-sm italic leading-relaxed font-medium">"{tutor.qualifications}"</p>
                </div>
              </div>

              {/* Footer Action */}
              <div className="p-8 pt-0">
                <button className="w-full py-4 bg-[#0A1F4A] text-white rounded-2xl font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-3">
                  <FiMail className="text-lg" /> Contact Tutor
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {tutors.length === 0 && (
          <div className="text-center py-32">
            <div className="bg-white inline-block p-10 rounded-full shadow-inner mb-6">
              <FiSearch className="text-6xl text-gray-200" />
            </div>
            <h3 className="text-2xl text-gray-800 font-bold">No tutors found</h3>
            <p className="text-gray-500 mt-2">Try searching for a different subject or clearing the search.</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Tutors;