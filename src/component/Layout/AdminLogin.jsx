



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded admin credentials
  const adminEmail = "admin@gmail.com";
  const adminPass = "677324";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPass) {
      // Redirect to Admin Dashboard
      navigate("/admin");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-120"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter admin email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-md font-medium hover:bg-blue-700 duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}












// import React, { useEffect } from 'react'
// // import { supabase } from './utils/supabase';
// import { supabase } from '../../Utils/SupaBase';
// import { useNavigate } from 'react-router';

// export default function App() {
//   const navigate = useNavigate();

// //   const signOut = async () => {
// //     const { error } = await supabase.auth.signOut();
// //     if (error) {
// //       console.log("Error signing out:", error);
// //       return;
// //     }
// //     navigate('/admin');
// //   }

//   useEffect(() => {
//       const checkSession = async () => {
//         const { data, error } = await supabase.auth.getSession();
//         if (error) {
//           console.log('Error checking session:', error);
//           return;
//         }
//         if (data.session) {
//           navigate('/admin');
//           console.log('User is signed in:', data.session);
          
//         }

//         // else {
//         //   navigate('/');
//         //   console.log('User is not signed in');
//         // }
//       };
//       checkSession();
//     }, []);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline">
//         Welcome
//       </h1>

//       {/* <button onClick={() => signOut()}>Sign out</button> */}
//     </div>
//   )
// }




// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // function AdminLogin() {
// //   const navigate = useNavigate();
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const adminEmail = "admin@gmail.com";
// //   const adminPass = "123456";

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     if (email === adminEmail && password === adminPass) {

// //       // 👉 Redirect to Admin Dashboard
// //       navigate("/admin");

// //     } else {
// //       alert("Invalid Email or Password!");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <form
// //         onSubmit={handleLogin}
// //         className="bg-white p-8 rounded-xl shadow-lg w-96"
// //       >
// //         <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>

// //         <div className="mb-4">
// //           <label className="block mb-1 font-medium">Email</label>
// //           <input
// //             type="email"
// //             className="w-full border px-3 py-2 rounded-md"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             placeholder="Enter admin email"
// //             required
// //           />
// //         </div>

// //         <div className="mb-6">
// //           <label className="block mb-1 font-medium">Password</label>
// //           <input
// //             type="password"
// //             className="w-full border px-3 py-2 rounded-md"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Enter password"
// //             required
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 duration-200"
// //         >
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default AdminLogin;
