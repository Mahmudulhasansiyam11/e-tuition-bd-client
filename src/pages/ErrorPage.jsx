// import Button from '../components/Shared/Button/Button'
// import { useNavigate } from 'react-router'

// const ErrorPage = () => {
//   const navigate = useNavigate()

//   return (
//     <section className='bg-white '>
//       <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
//         <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
//           <p className='p-3 text-sm font-medium text-lime-500 rounded-full bg-blue-50 '>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth='2'
//               stroke='currentColor'
//               className='w-6 h-6'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
//               />
//             </svg>
//           </p>
//           <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
//             Something Went Wrong!
//           </h1>
//           <p className='mt-4 text-gray-500 '>Here are some helpful links:</p>

//           <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
//             <button
//               onClick={() => navigate(-1)}
//               className='flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100 '
//             >
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 strokeWidth='1.5'
//                 stroke='currentColor'
//                 className='w-5 h-5 rtl:rotate-180 text-lime-500'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
//                 />
//               </svg>

//               <span>Go back</span>
//             </button>

//             <Button label={'Take Me Home'} onClick={() => navigate('/')} />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ErrorPage

import { useNavigate } from "react-router";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#F3F6FF] px-4">
      <div className="bg-[#0A1F4A] rounded-2xl shadow-xl max-w-md w-full p-10 text-center text-white">
        
        {/* 404 Heading */}
        <h1 className="text-6xl font-extrabold text-[#0B5FFF] mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#0B5FFF] text-[#0B5FFF] font-medium hover:bg-[#0B5FFF] hover:text-white transition"
          >
            <FaArrowLeft /> Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0B5FFF] text-white font-medium hover:bg-[#0A3AFF] transition"
          >
            <FaHome /> Home
          </button>
        </div>

      </div>
    </section>
  );
};

export default ErrorPage;
