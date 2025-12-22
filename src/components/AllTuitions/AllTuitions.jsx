import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import LoadingSpinner from "../Shared/LoadingSpinner";
import Container from "../Shared/Container";
import { Link } from "react-router";
import { FiSearch, FiFilter, FiMapPin } from "react-icons/fi";

const AllTuitions = () => {
  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("newest");

  const { data: tuitionsData = [], isLoading } = useQuery({
    // queryKey must include all filter states to trigger a refetch
    queryKey: ["tuitions", search, filterClass, location, sort],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/all-tuitions`, {
        params: { search, filterClass, location, sort },
      });
      return res.data;
    },
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="bg-[#0A1F4A] py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center mb-4">Find Your Perfect Tuition</h1>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-8 mt-[-40px]">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-lg h-fit sticky top-24 border border-gray-100">
            <div className="flex items-center gap-2 mb-6 text-[#0A1F4A] font-bold text-lg border-b pb-2">
              <FiFilter /> <span>Filters</span>
            </div>

            <div className="space-y-6">
              {/* Search Subject */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Subject</label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search e.g. Physics"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Class Level - UPDATED TO MATCH YOUR DB DATA */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Class Level</label>
                <select
                  className="w-full p-2 border rounded-lg outline-none bg-white"
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                >
                  <option value="">All Levels</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Location</label>
                <div className="relative">
                  <FiMapPin className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. Dhaka"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              {/* Sort By Budget/Date */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Order By</label>
                <select
                  className="w-full p-2 border rounded-lg outline-none bg-white"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="budgetHigh">Salary: High to Low</option>
                  <option value="budgetLow">Salary: Low to High</option>
                </select>
              </div>

              <button 
                onClick={() => {setSearch(""); setFilterClass(""); setLocation(""); setSort("newest");}}
                className="w-full py-2 text-sm text-red-500 font-medium hover:bg-red-50 rounded-lg transition border border-red-100"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Grid View */}
          <div className="flex-1">
            {isLoading ? (
              <LoadingSpinner />
            ) : tuitionsData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {tuitionsData.map((item) => (
                  <div key={item._id} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-md">
                        {item.classLevel}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1F4A] mb-2">{item.subject}</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                      <FiMapPin /> {item.location}
                    </p>
                    <div className="border-t pt-4 flex justify-between items-center">
                      <p className="text-emerald-600 font-bold text-lg">${item.budget}</p>
                      <Link className="text-blue-600 font-semibold text-sm hover:underline">
                        Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-20 text-center rounded-2xl shadow-sm">
                <p className="text-gray-400 italic">No matches found for your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllTuitions;