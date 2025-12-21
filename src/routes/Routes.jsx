// import Home from '../pages/Home/Home'
// import ErrorPage from '../pages/ErrorPage'
// import Login from '../pages/Login/Login'
// import SignUp from '../pages/SignUp/SignUp'
// import PlantDetails from '../pages/PlantDetails/PlantDetails'
// import PrivateRoute from './PrivateRoute'
// import DashboardLayout from '../layouts/DashboardLayout'
// import AddPlant from '../pages/Dashboard/Seller/AddPlant'
// import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
// import Profile from '../pages/Dashboard/Common/Profile'
// import Statistics from '../pages/Dashboard/Common/Statistics'
// import MainLayout from '../layouts/MainLayout'
// import MyInventory from '../pages/Dashboard/Seller/MyInventory'
// import ManageOrders from '../pages/Dashboard/Seller/ManageOrders'
// import MyOrders from '../pages/Dashboard/Customer/MyOrders'
// import { createBrowserRouter } from 'react-router'
// import MyTuitions from '../pages/Dashboard/Student/MyTuitions'
// import PostTuition from '../pages/Dashboard/Student/PostTuition'
// import AppliedTutors from '../pages/Dashboard/Student/AppliedTutors'
// import Payments from '../pages/Dashboard/Student/Payments'

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/plant/:id',
//         element: <PlantDetails />,
//       },
//     ],
//   },
//   { path: '/login', element: <Login /> },
//   { path: '/signup', element: <SignUp /> },
//   {
//     path: '/dashboard',
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         index: true,
//         element: (
//           <PrivateRoute>
//             <Statistics />
//           </PrivateRoute>
//         ),
//       },
//       // student role
//        { path: "my-tuitions", element: <PrivateRoute><MyTuitions /></PrivateRoute> },
//         { path: "post-tuition", element: <PrivateRoute><PostTuition/></PrivateRoute> },
//          { path: "applied-tutors", element: <PrivateRoute><AppliedTutors/></PrivateRoute> },
//          { path: "payments", element: <PrivateRoute><Payments /></PrivateRoute> },
//       {
//         path: 'add-plant',
//         element: (
//           <PrivateRoute>
//             <AddPlant />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: 'my-inventory',
//         element: (
//           <PrivateRoute>
//             <MyInventory />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: 'manage-users',
//         element: (
//           <PrivateRoute>
//             <ManageUsers />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: 'profile',
//         element: (
//           <PrivateRoute>
//             <Profile />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: 'my-orders',
//         element: (
//           <PrivateRoute>
//             <MyOrders />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: 'manage-orders',
//         element: <ManageOrders />,
//       },
//     ],
//   },
// ])


import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";

import MainLayout from "../layouts/MainLayout";

// ---- Student Pages ----
import MyTuitions from "../pages/Dashboard/Student/MyTuitions";
import PostTuition from "../pages/Dashboard/Student/PostTuition";
import AppliedTutors from "../pages/Dashboard/Student/AppliedTutors";
import Payments from "../pages/Dashboard/Student/Payments";

// ---- Tutor Pages ----
import MyApplications from "../pages/Dashboard/Tutor/MyApplications";
import OngoingTuitions from "../pages/Dashboard/Tutor/OngoingTuitions";
import RevenueHistory from "../pages/Dashboard/Tutor/RevenueHistory";

// ---- Admin Pages ----
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageTuitions from "../pages/Dashboard/Admin/ManageTuitions";
import Statistics from "../pages/Dashboard/Admin/Statistics";

// ---- Common (All Roles) ----
import Profile from "../pages/Dashboard/Common/Profile";

import { createBrowserRouter } from "react-router";
import TuitionListingPage from "../pages/Dashboard/Tutor/TuitionListingPage";
import PaymentSuccess from "../pages/Payment/PaymentSucces";
import TutorRoute from "./TutorRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import AllTuitions from "../components/AllTuitions/AllTuitions";
import Tutors from "../components/Tutors/Tutors";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export const router = createBrowserRouter([
  // MAIN LAYOUT ROUTES
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/all-tuitions", element: <AllTuitions></AllTuitions>
      },
      {
        path: "/tutors", element: <Tutors></Tutors>
      },
      {
        path: "/about", element: <About></About>
      },
      {
        path: "/contact", element: <Contact></Contact>
      }
    ],
  },

  // payment success
  {
    path: "/payment-success",
    element: <PaymentSuccess/>,
  },

  // AUTH ROUTES
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },

  // DASHBOARD ROUTES
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // Auto Dashboard Home (Role Redirect)
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics /> {/* For admin; Students & Tutors auto redirect */}
          </PrivateRoute>
        ),
      },

      // -------------------------
      // STUDENT ROUTES
      // -------------------------
      {
        path: "my-tuitions",
        element: (
          <PrivateRoute requiredRole="student">
            <StudentRoute>
              <MyTuitions />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "post-tuition",
        element: (
          <PrivateRoute requiredRole="student">
            <StudentRoute>
              <PostTuition />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "applied-tutors",
        element: (
          <PrivateRoute requiredRole="student">
           <StudentRoute>
             <AppliedTutors />
           </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payments",
        element: (
          <PrivateRoute requiredRole="student">
            <StudentRoute>
              <Payments />
            </StudentRoute>
          </PrivateRoute>
        ),
      },

      // -------------------------
      // TUTOR ROUTES
      // -------------------------
      {
        path: "my-applications",
        element: (
          <PrivateRoute requiredRole="tutor">
            <TutorRoute>
              <MyApplications />
            </TutorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "ongoing-tuitions",
        element: (
          <PrivateRoute requiredRole="tutor">
           <TutorRoute>
             <OngoingTuitions />
           </TutorRoute>
          </PrivateRoute>
        ),
      },
       {
        path: "tuition-listing-page",
        element: (
          <PrivateRoute requiredRole="tutor">
            <TutorRoute>
              <TuitionListingPage />
            </TutorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "revenue-history",
        element: (
          <PrivateRoute requiredRole="tutor">
            <TutorRoute>
              <RevenueHistory />
            </TutorRoute>
          </PrivateRoute>
        ),
      },

      // -------------------------
      // ADMIN ROUTES
      // -------------------------
      {
        path: "manage-users",
        element: (
          <PrivateRoute requiredRole="admin">
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-tuitions",
        element: (
          <PrivateRoute requiredRole="admin">
            <AdminRoute>
              <ManageTuitions />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "statistics",
        element: (
          <PrivateRoute requiredRole="admin">
            <AdminRoute>
              <Statistics />
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      // -------------------------
      // COMMON (All Roles)
      // -------------------------
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
