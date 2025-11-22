// // Pages/Admin/AdminLayout.jsx
// import { Outlet } from "react-router-dom";
// import Sidebar from "../../component/Layout/Sidebar";
// import Header from "../../component/Layout/Header";

// export default function AdminLayout() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Header />
//         <Outlet />
//       </div>
//     </div>
//   );
// }
// // export default App;




import { Outlet } from "react-router-dom";
import Sidebar from "./component/Layout/Sidebar";
import Header from "./component/Layout/Header"

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;





// // import { Sidebar } from "lucide-react"
// import Sidebar from "./component/Layout/Sidebar"
// import Header from "./component/Layout/Header"

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
//       <div className='flex h-screen overflow-hidden'>
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header />
//       </div>
//       </div>
//     </div>
//   )
// }

// export default App
