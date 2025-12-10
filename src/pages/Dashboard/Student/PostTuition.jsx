const PostTuition = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#0A3AFF] mb-6">Post New Tuition</h1>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Math, Physics, etc."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B5FFF] outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Class</label>
            <input
              type="text"
              placeholder="Grade 10, College, etc."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B5FFF] outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Location</label>
            <input
              type="text"
              placeholder="Dhaka, Chittagong, etc."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B5FFF] outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Budget</label>
            <input
              type="text"
              placeholder="$200"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0B5FFF] outline-none"
            />
          </div>
          <button className="w-full bg-[#0A3AFF] hover:bg-[#0B5FFF] text-white py-3 rounded-xl font-semibold transition">
            Submit Tuition
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostTuition;
