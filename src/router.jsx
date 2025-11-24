import { createBrowserRouter } from "react-router-dom";

// Public Layout
import PublicLayout from "./component/Layout/PublicLayout/PublicLayout";
import Products from "./Pages/Product/Products";
import Hero from "./Pages/Product/Home/Hero";

// Admin Layout
import App from "./App"; 
import Sidebar from "./component/Layout/Sidebar";
import Header from "./component/Layout/Header";

// New: Admin Login
import AdminLogin from "./component/Layout/AdminLogin";
import UserLogin from "./UserLogin/UserLogin";

// New: Dashboard
// import Dashboard from "./Pages/Product/Dashboard"; 

const router = createBrowserRouter([
  // -------------------
  // Public Routes
  // -------------------
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      // { path: "user-login", element: <UserLogin />},
      { path: "products", element: <Products /> },
      { path: "hero", element: <Hero /> },
    ],
  },

  {
    path: "/user-login",
    element: <UserLogin />,
  },

  // -------------------
  // Admin Login Route
  // -------------------
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },

  // -------------------
  // Admin Routes (Requires Login)
  // -------------------
  {
    path: "/admin",
    element: <App />, // Admin Layout
    children: [
      // { path: "dashboard", element: <Dashboard /> }, // /admin/dashboard
      { path: "sidebar", element: <Sidebar /> },
      { path: "header", element: <Header /> },
    ],
  },
]);

export default router;



// import { createBrowserRouter } from "react-router-dom";
// import PublicLayout from "./component/Layout/PublicLayout/PublicLayout";
// import Products from "./Pages/Product/Products";
// import Hero from "./Pages/Product/Home/Hero";
// import App from "./App"; // Admin layout
// import Sidebar from "./component/Layout/Sidebar";
// import Header from "./component/Layout/Header";

// const router = createBrowserRouter([
//   // Public routes wrapped in PublicLayout
//   {
//     path: "/",
//     element: <PublicLayout />,
//     children: [
//       { path: "products", element: <Products /> }, // /products
//       { path: "hero", element: <Hero /> },         // /hero
//     ],
//   },

//   // Admin routes
//   {
//     path: "/admin",
//     element: <App />, // Admin layout
//     children: [
//       { path: "sidebar", element: <Sidebar /> },  // /admin/sidebar
//       { path: "header", element: <Header /> },    // /admin/header
//     ],
//   },
// ]);

// export default router;



// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import Products from "./Pages/Product/Products";
// import Sidebar from "./component/Layout/Sidebar";
// import Header from "./component/Layout/Header";
// import Hero from "./Pages/Product/Home/Hero";
// import PublicLayout from "./component/Layout/PublicLayout/PublicLayout";
// // import AdminLogin from "./Pages/Auth/AdminLogin";

// const router = createBrowserRouter([
//   // Public route
//   {
//     path: "/",
//     element: <PublicLayout />,
//     children: [
//       { path: "products", element: <Products /> },
//       { path: "hero", element: <Hero /> },
//     ],
//   },

//   // Admin route
//   {
//     path: "/admin",
//     element: <App />, // Admin layout
//     children: [
//       { path: "sidebar", element: <Sidebar /> },
//       { path: "header", element: <Header /> },
//       // অন্যান্য admin pages এখানে add করতে পারবে
//     ],
//   },
// ]);

// export default router;





// // import { createBrowserRouter } from "react-router-dom";
// // import App from "./App";
// // import Products from "./Pages/Product/Products";
// // import Sidebar from "./component/Layout/Sidebar";
// // // import AdminLogin from "./Pages/Auth/AdminLogin";

// // const router = createBrowserRouter([
// // //   { path: "/admin-login", element: <AdminLogin /> },

// //   {
// //     path: "/admin",
// //     // element: <App />,
// //     element: <App />,
// //     children: [
// //         { path: "/sidebar", element: <Sidebar />}
// //     ],
// //     { path: "/products", element: <Products /> },
// //   },
// // ]);

// // export default router;





// // import { createBrowserRouter } from "react-router-dom";
// // import App from "./App";
// // import Products from "./Pages/Product/Products";
// // // import AdminLogin from "./Pages/Auth/AdminLogin";

// // const router = createBrowserRouter([
// // //   { path: "/admin-login", element: <AdminLogin /> },

// //   {
// //     path: "/",
// //     element: <App />,
// //     children: [
// //       { path: "/products", element: <Products /> },
// //     ],
// //   },
// // ]);

// // export default router;
