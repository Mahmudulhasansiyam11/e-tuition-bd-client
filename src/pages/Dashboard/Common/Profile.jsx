// import useAuth from '../../../hooks/useAuth'
// import coverImg from '../../../assets/images/cover.jpg'

// const Profile = () => {
//   const { user } = useAuth()

//   return (
//     <div className='flex justify-center items-center h-screen'>
//       <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
//         <img
//           alt='cover photo'
//           src={coverImg}
//           className='w-full mb-4 rounded-t-lg h-56'
//         />
//         <div className='flex flex-col items-center justify-center p-4 -mt-16'>
//           <a href='#' className='relative block'>
//             <img
//               alt='profile'
//               src={user?.photoURL}
//               className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
//             />
//           </a>

//           <p className='p-2 px-4 text-xs text-white bg-[#0A1F4A] rounded-full'>
//             Customer
//           </p>
//           <p className='mt-2 text-xl font-medium text-gray-800 '>
//             User Id: {user?.uid}
//           </p>
//           <div className='w-full p-2 mt-4 rounded-lg'>
//             <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
//               <p className='flex flex-col'>
//                 Name
//                 <span className='font-bold text-gray-600 '>
//                   {user?.displayName}
//                 </span>
//               </p>
//               <p className='flex flex-col'>
//                 Email
//                 <span className='font-bold text-gray-600 '>{user?.email}</span>
//               </p>

//               <div>
//                 <button className='bg-[#0A1F4A]  px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-lime-800 block mb-1'>
//                   Update Profile
//                 </button>
//                 <button className='bg-[#0A1F4A] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-lime-800'>
//                   Change Password
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile


import useAuth from '../../../hooks/useAuth';
import coverImg from '../../../assets/images/cover.jpg';
import { FaEnvelope, FaIdBadge } from 'react-icons/fa';

const Profile = () => {
  const { user } = useAuth();

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
          <h2 className="mt-4 text-2xl font-bold text-[#0A3AFF]">{user?.displayName || 'John Doe'}</h2>
          <span className="mt-2 inline-block px-4 py-1 rounded-full text-sm font-semibold bg-[#0A1F4A] text-white shadow-md">
            {user?.role || 'Student'}
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
