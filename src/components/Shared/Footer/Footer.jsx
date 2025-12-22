// const Footer = () => {
//   return (
//     <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
//       <div className='py-6 text-sm text-center text-gray-400'>
//         © 2025-2026 PlantNet Inc. All rights reserved.
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import { Link } from "react-router";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6"; // New X logo

// const Footer = () => {
//   return (
//     <footer className="bg-blue-50 text-gray-700 border-t border-blue-100 mt-10">
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

//         {/* ABOUT SECTION */}
//         <div>
//           <h3 className="text-xl font-semibold text-blue-700 mb-3">
//             About eTuitionBD
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             eTuitionBD is a modern online platform connecting students with
//             verified tutors. We help learners find the right guidance and help
//             tutors grow their teaching careers.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-xl font-semibold text-blue-700 mb-3">
//             Quick Links
//           </h3>
//           <ul className="space-y-2">
//             <li>
//               <Link to="/" className="hover:text-blue-600 transition">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/tuitions" className="hover:text-blue-600 transition">
//                 Tuitions
//               </Link>
//             </li>
//             <li>
//               <Link to="/tutors" className="hover:text-blue-600 transition">
//                 Tutors
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-blue-600 transition">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-blue-600 transition">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* CONTACT INFO */}
//         <div>
//           <h3 className="text-xl font-semibold text-blue-700 mb-3">
//             Contact Us
//           </h3>
//           <p>Email: support@etuitionbd.com</p>
//           <p>Phone: +880 1234-567890</p>
//           <p>Location: Dhaka, Bangladesh</p>

//           {/* SOCIAL ICONS */}
//           <div className="flex items-center gap-4 mt-4 text-blue-700">
//             <a
//               href="#"
//               className="hover:text-blue-600 transition text-xl"
//               aria-label="Facebook"
//             >
//               <FaFacebookF />
//             </a>

//             <a
//               href="#"
//               className="hover:text-blue-600 transition text-xl"
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </a>

//             <a
//               href="#"
//               className="hover:text-blue-600 transition text-xl"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedinIn />
//             </a>

//             <a
//               href="#"
//               className="hover:text-blue-600 transition text-xl"
//               aria-label="YouTube"
//             >
//               <FaYoutube />
//             </a>

//             {/* NEW X LOGO */}
//             <a
//               href="#"
//               className="hover:text-blue-600 transition text-xl"
//               aria-label="Twitter X"
//             >
//               <FaXTwitter />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* COPYRIGHT AREA */}
//       <div className="bg-blue-100 text-center py-4 text-gray-600 text-sm">
//         © {new Date().getFullYear()} eTuitionBD — All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-[#0A1F4A] text-gray-200 pt-12">
      
    <Container>
        {/* MAX WIDTH WRAPPER LIKE NAVBAR */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ABOUT SECTION */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            About eTuitionBD
          </h3>
          <p className="text-gray-300 leading-relaxed">
            eTuitionBD is a modern online platform connecting students with
            verified tutors. We help learners find the right guidance and help
            tutors grow their teaching careers.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-emerald-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-tuitions" className="hover:text-emerald-300 transition">
                Tuitions
              </Link>
            </li>
            <li>
              <Link to="/tutors" className="hover:text-emerald-300 transition">
                Tutors
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Contact Us
          </h3>
          <p className="text-gray-300">Email: support@etuitionbd.com</p>
          <p className="text-gray-300">Phone: +880 1234-567890</p>
          <p className="text-gray-300">Location: Dhaka, Bangladesh</p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-4 text-white">
            <a href="#" className="hover:text-emerald-300 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-emerald-300 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-emerald-300 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-emerald-300 text-xl">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-emerald-300 text-xl">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </Container>
      {/* COPYRIGHT */}
      <div className="bg-[#09193A] text-center py-4 text-gray-300 text-sm mt-10">
        © {new Date().getFullYear()} eTuitionBD — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
