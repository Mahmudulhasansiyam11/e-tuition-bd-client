
import useAuth from '../../../hooks/useAuth';
import coverImg from '../../../assets/images/cover1.jpg';
import { FaEnvelope, FaIdBadge } from 'react-icons/fa';
import useRole from '../../../hooks/useRole';

const Profile = () => {
  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();

  return (
    <div className="min-h-screen bg-[#E5F1FF] flex justify-center items-start py-12 px-4">
      <div className="w-full md:w-3/4 lg:w-2/5">

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={coverImg} 
            alt="cover" 
            className="w-full h-40 object-cover"
          />
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 flex flex-col items-center
                        border border-[#0A3AFF]/50 hover:shadow-3xl transition-all duration-300
                        -mt-20 relative z-10">

          {/* Profile Picture */}
          <div className="relative -mt-16">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0A3AFF] to-[#0B5FFF] blur opacity-60 animate-pulse"></div>
            <img
              src={user?.photoURL || 'https://i.ibb.co/ZJ7C4wJ/default-avatar.png'}
              alt="profile"
              className="w-28 h-28 rounded-full border-4 border-white object-cover relative z-10"
            />
          </div>

          {/* Name and Role */}
          {/* <h2 className="mt-4 text-2xl font-bold text-[#0A3AFF]">{user?.displayName || 'John Doe'}</h2> */}
          <span className="mt-2 inline-block px-4 py-1 rounded-full text-sm font-semibold bg-[#0A1F4A] text-white shadow-md">
            {role}
          </span>

          {/* User Info */}
          <div className="mt-6 w-full space-y-3">
            <div className="flex items-center gap-3 bg-[#0A3AFF]/10 p-4 rounded-xl hover:bg-[#0A3AFF]/20 transition">
              <FaEnvelope className="text-[#0A3AFF] text-xl" />
              <div className="text-left">
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-gray-800 font-semibold">{user?.email || 'example@mail.com'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#0A3AFF]/10 p-4 rounded-xl hover:bg-[#0A3AFF]/20 transition">
              <FaIdBadge className="text-[#0A3AFF] text-xl" />
              <div className="text-left">
                <p className="text-gray-500 text-sm">User ID</p>
                <p className="text-gray-800 font-semibold">{user?.uid || '123456789'}</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 w-full">
            <button className="flex-1 bg-gradient-to-r from-[#0A3AFF] to-[#0B5FFF] text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition transform">
              Update Profile
            </button>
            <button className="flex-1 bg-gradient-to-r from-[#0A3AFF] to-[#0B5FFF] text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition transform">
              Change Password
            </button>
          </div>

          <p className="mt-4 text-gray-500 text-sm text-center">
            Keep your profile updated to get the best experience on Tuition BD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
